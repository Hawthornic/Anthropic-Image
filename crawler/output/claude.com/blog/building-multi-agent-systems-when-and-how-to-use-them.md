---
source_url: https://claude.com/blog/building-multi-agent-systems-when-and-how-to-use-them
title: "Building multi-agent systems: When and how to use them"
section: blog
date: 2026-01-23
---

<!-- para:0001 -->
A multi-agent system is an architecture where multiple LLM instances run with separate conversation contexts, coordinated through code. Multiple coordination patterns exist (agent swarms, capability-based systems, and message bus architectures), but this article focuses on the orchestrator-subagent pattern: a hierarchical model where a lead agent spawns and manages specialized subagents for specific subtasks. This pattern offers a straightforward coordination model and is a good starting point for teams new to multi-agent systems. We'll explore other patterns in detail in our next article.

<!-- para:0002 -->
Today, multi-agent systems are often applied in situations where a single agent would perform better, though this calculus continues to evolve as models improve. At Anthropic, we’ve seen teams invest months building elaborate multi-agent architectures only to discover that improved prompting on a single agent achieved equivalent results.

<!-- para:0003 -->
After building multi-agent systems and working with teams deploying them in production, we've identified three situations where multiple agents consistently outperform a single agent: when context pollution degrades performance, when tasks can run in parallel, and when specialization improves tool selection or task focus. Outside these situations, the coordination costs typically exceed the benefits. In this article, we share how to recognize single-agent limits, identify the three scenarios where multi-agent systems excel, and avoid common implementation mistakes.

<!-- para:0004 -->
## The case for starting with a single agent

<!-- para:0005 -->
A well-designed single agent with appropriate tools can accomplish far more than many developers expect.

<!-- para:0006 -->
Multi-agent systems introduce overhead. Every additional agent represents another potential point of failure, another set of prompts to maintain, and another source of unexpected behavior.

<!-- para:0007 -->
We've observed teams build elaborate multi-agent systems with separate agents for planning, execution, review, and iteration, only to discover that they suffered from lost context at each handoff and spent more tokens coordinating than executing. In our testing, multi-agent implementations typically use 3-10x more tokens than single-agent approaches for equivalent tasks. This overhead stems from duplicating context across agents, coordination messages between agents, and summarizing results for handoffs.

<!-- para:0008 -->
## A decision framework for multi-agent systems

<!-- para:0009 -->
Multi-agent architectures provide value when they address specific constraints that a single agent cannot overcome. This means multi-agent architectures should be reserved for cases where they provide clear benefits that justify the additional cost.

<!-- para:0010 -->
The patterns below represent cases where we consistently observe positive returns on this investment.

<!-- para:0011 -->
### Context protection

<!-- para:0012 -->
Large language models have finite context windows, and response quality can degrade as context grows. When an agent's context accumulates information from one subtask that is irrelevant to subsequent subtasks, context pollution occurs. Subagents provide isolation, with each operating in its own clean context focused on its specific task.

<!-- para:0013 -->
Consider a customer support agent that needs to retrieve order history while diagnosing technical issues. If every order lookup adds thousands of tokens to the context, the agent's ability to reason about the technical problem degrades.

<!-- para:0014 -->
‍

<!-- para:0015 -->
**The single-agent approach: **

<!-- para:0016 -->
```
# Single agent accumulates everything in context
conversation_history = [
    {"role": "user", "content": "My order #12345 isn't working"},
    {"role": "assistant", "content": "Let me check your order..."},
    # Tool result adds 2000+ tokens of order history
    {"role": "user", "content": "... (order details, past purchases, shipping info) ..."},
    {"role": "assistant", "content": "Now let me diagnose the technical issue..."},
    # Context is now polluted with order details the agent doesn't need
]
```

<!-- para:0017 -->
The agent must reason about the technical issue while maintaining 2000+ tokens of irrelevant order history in context, diluting attention and reducing response quality.

<!-- para:0018 -->
**The multi-agent approach: **

<!-- para:0019 -->
```
from anthropic import Anthropic

client = Anthropic()

class OrderLookupAgent:
    def lookup_order(self, order_id: str) -> dict:
        # Separate agent with its own context
        messages = [
            {"role": "user", "content": f"Get essential details for order {order_id}"}
        ]
        response = client.messages.create(
            model="claude-sonnet-4-5",
            max_tokens=1024,
            messages=messages,
            tools=[get_order_details_tool]
        )
        # Returns only essential information
        return extract_summary(response)

class SupportAgent:
    def handle_issue(self, user_message: str):
        if needs_order_info(user_message):
            order_id = extract_order_id(user_message)
            # Get only what's needed, not full history
            order_summary = OrderLookupAgent().lookup_order(order_id)
            # Inject compact summary, not full context
            context = f"Order {order_id}: {order_summary['status']}, purchased {order_summary['date']}"
        
        # Main agent context stays clean
        messages = [
            {"role": "user", "content": f"{context}\n\nUser issue: {user_message}"}
        ]
        response = client.messages.create(
            model="claude-sonnet-4-5",
            max_tokens=2048,
            messages=messages
        )
        return response
```

<!-- para:0020 -->
The order lookup agent processes the full order history and extracts a summary. The main agent receives only the 50-100 tokens it actually needs, keeping context focused.

<!-- para:0021 -->
Context isolation is most effective when subtasks generate high context volume (more than 1000 tokens) but most of that information is irrelevant to the main task, when the subtask is well-defined with clear criteria for what information to extract, and for lookup or retrieval operations that require filtering before use.

<!-- para:0022 -->
### Parallelization

<!-- para:0023 -->
Running multiple agents in parallel allows you to explore a larger search space than a single agent can cover. This pattern has proven particularly valuable for search and research tasks.

<!-- para:0024 -->
Our [Research feature](https://www.anthropic.com/engineering/multi-agent-research-system) uses this approach. A lead agent analyzes a query and spawns multiple subagents to investigate different facets in parallel. Each subagent searches independently, then returns distilled findings. Multi-agent search has shown substantial accuracy improvements over single-agent approaches by allowing exploration across larger information spaces.

<!-- para:0025 -->
The core implementation decomposes a question into independent facets, runs subagents concurrently, then synthesizes the results.

<!-- para:0026 -->
```
import asyncio
from anthropic import AsyncAnthropic

client = AsyncAnthropic()

async def research_topic(query: str) -> dict:
    # Lead agent breaks query into research facets
    facets = await lead_agent.decompose_query(query)
    
    # Spawn subagents to research each facet in parallel
    tasks = [
        research_subagent(facet) 
        for facet in facets
    ]
    results = await asyncio.gather(*tasks)
    
    # Lead agent synthesizes findings
    return await lead_agent.synthesize(results)

async def research_subagent(facet: str) -> dict:
    """Each subagent has its own context window"""
    messages = [
        {"role": "user", "content": f"Research: {facet}"}
    ]
    response = await client.messages.create(
        model="claude-sonnet-4-5",
        max_tokens=4096,
        messages=messages,
        tools=[web_search, read_document]
    )
    return extract_findings(response)
```

<!-- para:0027 -->
This improved coverage comes at a cost. Multi-agent systems typically consume 3 to 10 times more tokens than single-agent approaches for equivalent tasks. This happens because each agent needs its own context, agents must exchange messages to coordinate, and results must be summarized when passed between agents. While parallelism helps reduce total execution time compared to running all that work sequentially, multi-agent systems often take longer overall than single-agent systems because of the sheer increase in total computation.

<!-- para:0028 -->
The primary benefit of parallelization is thoroughness, not speed. When you need to search across a large information space or investigate many angles of a complex question, parallel agents can cover more ground than a single agent working within its context limits. The tradeoff is higher token usage and often longer total execution time in exchange for more comprehensive results.

<!-- para:0029 -->
### Specialization

<!-- para:0030 -->
Different tasks sometimes benefit from different tool sets, system prompts, or domains of expertise. Rather than providing a single agent with access to dozens of tools, specialized agents with focused toolsets matched to their responsibilities can improve reliability.

<!-- para:0031 -->
#### **Tool set specialization**

<!-- para:0032 -->
When an agent has access to too many tools, performance suffers. Three signals indicate tool specialization would help:

<!-- para:0033 -->
1. **Quantity.** An agent with too many tools (often 20+) struggles to select the appropriate one.
2. **Domain confusion.** When tools span multiple unrelated domains (database operations, API calls, file system operations), the agent confuses which domain applies to a given task.
3. **Degraded performance.** Adding new tools degrades performance on existing tasks, suggesting the agent has reached its capacity for tool management.

<!-- para:0034 -->
#### **System prompt specialization**

<!-- para:0035 -->
Different tasks sometimes require different personas, constraints, or instructions that conflict when combined. A customer support agent needs to be empathetic and patient; a code review agent needs to be precise and critical. A compliance-checking agent needs rigid rule-following; a brainstorming agent needs creative flexibility. When a single agent must switch between conflicting behavioral modes, separating into specialized agents with tailored system prompts produces more consistent results.

<!-- para:0036 -->
#### **Domain expertise specialization**

<!-- para:0037 -->
Some tasks benefit from deep domain context that would overwhelm a generalist agent. A legal analysis agent might need extensive context about case law and regulatory frameworks. A medical research agent might need specialized knowledge about clinical trial methodology. Rather than loading all domain context into a single agent, specialized agents can carry focused expertise relevant to their specific responsibilities.

<!-- para:0038 -->
**Example: Multi-platform integration.** Consider an integration system where agents need to work across CRM, marketing automation, and messaging platforms. Each platform has 10-15 relevant API endpoints. A single agent with 40+ tools often struggles to select correctly, confusing similar operations across platforms. Splitting into specialized agents with focused toolsets and tailored prompts resolves selection errors.**

<!-- para:0039 -->
```
from anthropic import Anthropic

client = Anthropic()

# Specialized agents with focused toolsets and tailored prompts
class CRMAgent:
    """Handles customer relationship management operations"""
    system_prompt = """You are a CRM specialist. You manage contacts, 
    opportunities, and account records. Always verify record ownership 
    before updates and maintain data integrity across related records."""
    tools = [
        crm_get_contacts,
        crm_create_opportunity,
        # 8-10 CRM-specific tools
    ]

class MarketingAgent:
    """Handles marketing automation operations"""
    system_prompt = """You are a marketing automation specialist. You 
    manage campaigns, lead scoring, and email sequences. Prioritize 
    data hygiene and respect contact preferences."""
    tools = [
        marketing_get_campaigns,
        marketing_create_lead,
        # 8-10 marketing-specific tools
    ]

class OrchestratorAgent:
    """Routes requests to specialized agents"""
    def execute(self, user_request: str):
        response = client.messages.create(
            model="claude-sonnet-4-5",
            max_tokens=1024,
            system="""You coordinate platform integrations. Route requests to the appropriate specialist:
- CRM: Contact records, opportunities, accounts, sales pipeline
- Marketing: Campaigns, lead nurturing, email sequences, scoring
- Messaging: Notifications, alerts, team communication""",
            messages=[
                {"role": "user", "content": user_request}
            ],
            tools=[delegate_to_crm, delegate_to_marketing, delegate_to_messaging]
        )
        return response
```

<!-- para:0040 -->
This pattern mirrors effective professional collaboration, where specialists with tools matched to their roles collaborate more effectively than generalists attempting to maintain expertise across all domains. However, specialization introduces routing complexity. The orchestrator must correctly classify requests and delegate to the right agent, and misrouting leads to poor results. Maintaining multiple specialized agents also increases prompt maintenance overhead. Specialization works best when domains are clearly separable and routing decisions are unambiguous.

<!-- para:0041 -->
## Outgrowing single-agent architectures

<!-- para:0042 -->
Beyond the general framework, certain concrete signals suggest that single-agent patterns have been outgrown:

<!-- para:0043 -->
**Approaching context limits.**If an agent routinely uses large amounts of context and performance is degrading, context pressure may be the bottleneck. Note that recent advances in context management ([such as compaction](https://platform.claude.com/cookbook/tool-use-automatic-context-compaction)) are reducing this limitation, allowing single agents to maintain effective memory across much longer horizons.**

<!-- para:0044 -->
**Managing many tools.** When an agent has 15-20+ tools, the model spends significant context and attention understanding its options. Before adopting a multi-agent architecture, consider using the [Tool Search Tool](https://docs.anthropic.com/en/docs/agents-and-tools/tool-use/tool-search-tool), which lets Claude dynamically discover tools on-demand rather than loading all definitions upfront. This can [reduce token usage by up to 85%](https://www.anthropic.com/engineering/advanced-tool-use) while improving tool selection accuracy.**

<!-- para:0045 -->
**Parallelizable subtasks.** When tasks naturally decompose into independent pieces (research across multiple sources, tests for multiple components), parallel subagents can provide substantial speedups.**

<!-- para:0046 -->
These thresholds will shift as models improve. Current limits represent practical guidelines, not fundamental constraints.

<!-- para:0047 -->
## Context-centric decomposition

<!-- para:0048 -->
When adopting a multi-agent architecture, the most important design decision is how to divide work between agents. We've observed that teams frequently make this choice incorrectly, leading to coordination overhead that negates the benefits of multi-agent design.

<!-- para:0049 -->
The key insight is to adopt a **context-centric view** rather than a problem-centric view when decomposing work.

<!-- para:0050 -->
**Problem-centric decomposition (often counterproductive).** Dividing by type of work (one agent writes features, another writes tests, a third reviews code) creates constant coordination overhead. Each handoff loses context. The test-writing agent lacks knowledge of why certain implementation decisions were made and the code reviewer lacks the context of exploration and iteration.**

<!-- para:0051 -->
**Context-centric decomposition (usually effective).** Dividing by context boundaries means an agent handling a feature should also handle its tests, because it already possesses the necessary context. Work should only be split when context can be truly isolated.**

<!-- para:0052 -->
This principle emerges from observing failure modes in multi-agent systems. When agents are split by problem type, they engage in a "telephone game," passing information back and forth with each handoff degrading fidelity. In one experiment with agents specialized by software development role (planner, implementer, tester, reviewer), the subagents spent more tokens on coordination than on actual work.

<!-- para:0053 -->
**Effective decomposition boundaries include: **

<!-- para:0054 -->
- **Independent research paths.** Investigating "market trends in Asia" versus "market trends in Europe" can proceed in parallel with no shared context.
- **Separate components with clean interfaces.** With a well-defined API contract, frontend and backend work can proceed in parallel.
- **Blackbox verification.** A verifier that only needs to run tests and report results does not require implementation context.

<!-- para:0055 -->
**Problematic decomposition boundaries include: **

<!-- para:0056 -->
- **Sequential phases of the same work.** Planning, implementation, and testing of the same feature share too much context.
- **Tightly coupled components.** Components requiring constant back-and-forth belong in the same agent.
- **Work requiring shared state.** Agents that would need to frequently synchronize understanding should remain together.

<!-- para:0057 -->
## The verification subagent pattern

<!-- para:0058 -->
One multi-agent pattern that consistently works well across domains is the **verification subagent**. This is a dedicated agent whose sole responsibility is testing or validating the main agent's work.

<!-- para:0059 -->
It's worth noting that more capable orchestrator models (like Claude Opus 4.5) are increasingly able to evaluate subagent work directly without a separate verification step. However, verification subagents remain valuable when using less capable orchestrators, when verification requires specialized tools, or when you want to enforce explicit verification checkpoints in your workflow.

<!-- para:0060 -->
Verification subagents succeed because they sidestep the telephone game problem. Verification requires minimal context transfer by nature, so a verifier can blackbox-test a system without needing the full history of how it was built.

<!-- para:0061 -->
### Implementation

<!-- para:0062 -->
The main agent completes a unit of work. Before proceeding, it spawns a verification subagent with the artifact to verify, clear success criteria, and tools to perform verification.

<!-- para:0063 -->
The verifier does not need to understand why the artifact was built as it was. It only needs to determine whether the artifact meets the specified criteria.

<!-- para:0064 -->
```
from anthropic import Anthropic

client = Anthropic()

class CodingAgent:
    def implement_feature(self, requirements: str) -> dict:
        """Main agent implements the feature"""
        messages = [
            {"role": "user", "content": f"Implement: {requirements}"}
        ]
        response = client.messages.create(
            model="claude-sonnet-4-5",
            max_tokens=4096,
            messages=messages,
            tools=[read_file, write_file, list_directory]
        )
        return {
            "code": response.content,
            "files_changed": extract_files(response)
        }

class VerificationAgent:
    def verify_implementation(self, requirements: str, files_changed: list) -> dict:
        """Separate agent verifies the work"""
        messages = [
            {"role": "user", "content": f"""
Requirements: {requirements}
Files changed: {files_changed}

Run the test suite and verify:
1. All existing tests pass
2. New functionality works as specified
3. No obvious errors or security issues

You MUST run the complete test suite before marking as passed.
Do not mark as passing after only running a few tests.
Run: pytest --verbose
Only mark as PASSED if ALL tests pass with no failures.
"""}
        ]
        response = client.messages.create(
            model="claude-sonnet-4-5",
            max_tokens=4096,
            messages=messages,
            tools=[run_tests, execute_code, read_file]
        )
        return {
            "passed": extract_pass_fail(response),
            "issues": extract_issues(response)
        }

def implement_with_verification(requirements: str, max_attempts: int = 3):
    for attempt in range(max_attempts):
        result = CodingAgent().implement_feature(requirements)
        verification = VerificationAgent().verify_implementation(
            requirements,
            result['files_changed']
        )
        
        if verification['passed']:
            return result
        
        requirements += f"\n\nPrevious attempt failed: {verification['issues']}"
    
    raise Exception(f"Failed verification after {max_attempts} attempts")
```

<!-- para:0065 -->
### Applications

<!-- para:0066 -->
Verification subagents are effective for:

<!-- para:0067 -->
- **Quality assurance.** Running test suites, linting code, validating outputs against schemas.
- **Compliance checking.** Verifying documents meet policy requirements, checking outputs against rules.
- **Output validation.** Confirming generated content meets specifications before delivery.
- **Factual verification.** Having a separate agent verify claims or citations in generated content.

<!-- para:0068 -->
### The early victory problem

<!-- para:0069 -->
The most significant failure mode for verification subagents is marking outputs as passing without thorough testing. The verifier runs one or two tests, observes them pass, and declares success.

<!-- para:0070 -->
Mitigation strategies include:

<!-- para:0071 -->
- **Concrete criteria.** Specify "Run the full test suite and report all failures" rather than "make sure it works."
- **Comprehensive checks.** Require the verifier to test multiple scenarios and edge cases.
- **Negative tests.** Direct the verifier to attempt inputs that should fail and confirm they do.
- **Explicit instructions.** The instruction "You MUST run the complete test suite before marking as passed" is essential. Without explicit requirements for comprehensive validation, verification agents take shortcuts.

<!-- para:0072 -->
## Moving forward

<!-- para:0073 -->
Multi-agent systems are powerful, but not universally appropriate. Before adding the complexity of multiple coordinated agents, confirm that:

<!-- para:0074 -->
1. **Genuine constraints exist** that multi-agent solves, such as context limits, parallelization opportunities, or need for specialization.
2. **Decomposition follows context, not problem type.** Group work by what context it requires, not by what kind of work it is.
3. **Clear verification points exist** where subagents can validate work without requiring full context.

<!-- para:0075 -->
Our advice? Start with the simplest approach that works, and add complexity only when evidence supports it.

<!-- para:0076 -->
*This is the first in a series of posts on multi-agent systems. For more on single-agent patterns, see*[*Building effective agents*](https://www.anthropic.com/engineering/building-effective-agents)*. For context management strategies, see*[*Effective context engineering for AI agents*](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents)*. For a deep dive into how we built our multi-agent research system, see*[*How we built our multi-agent research system*](https://www.anthropic.com/engineering/multi-agent-research-system)*.*

<!-- para:0077 -->
## Acknowledgements

<!-- para:0078 -->
Written by Cara Phillips, with contributions from Paul Chen, Andy Schumeister, Brad Abrams, and Theo Chu.
