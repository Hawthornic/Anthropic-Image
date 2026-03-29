---
source_url: https://claude.com/plugins/aws-serverless
title: "AWS Serverless"
section: plugins
---

<!-- para:0001 -->
# AWS Serverless

<!-- para:0002 -->
Design, build, deploy, test, and debug serverless applications with AWS Serverless services.

<!-- para:0003 -->
- Install in [Claude Code](https://claude.com/plugins/aws-serverless#)
- Made by: [Amazon Web Services](https://aws.amazon.com/)
- Installs1550

<!-- para:0004 -->
Build, deploy, test, and debug serverless applications on AWS directly from your editor. This plugin equips Claude with deep knowledge of AWS Lambda, API Gateway, Event Bridge, and Step Functions, along with an MCP server that enables direct interaction with your AWS serverless resources. It supports project scaffolding with SAM CLI and CDK, event-driven architecture design, multi-environment deployments, and CI/CD pipeline setup.

<!-- para:0005 -->
The plugin includes three specialized skills. The core **AWS Lambda** skill covers full-lifecycle serverless development — from initializing projects and configuring event sources (DynamoDB, SQS, Kinesis, Kafka) to performance tuning, cold-start mitigation, and observability with Cloud Watch and X-Ray. The **AWS Serverless Deployment** skill handles infrastructure-as-code generation, SAM template validation, container-based local testing, and production deployment workflows. The **AWS Lambda Durable Functions** skill enables building resilient, long-running multi-step applications with automatic state persistence, saga patterns, and human-in-the-loop callbacks.

<!-- para:0006 -->
Defaults to Type Script and CDK, but supports Python, Java Script, Cloud Formation, and SAM — just ask. Requires AWS CLI credentials and SAM CLI to be installed.

<!-- para:0007 -->
**How to use: ** The plugin's skills activate automatically based on context. Try prompts like "Create a new Lambda function triggered by an SQS queue", "Deploy my serverless app using SAM", "Set up an Event Bridge rule to route events to my Lambda", "Build a durable function workflow with retry and checkpoint logic", or "Help me debug cold starts in my Lambda function".**

<!-- para:0008 -->
## Related plugins

<!-- para:0009 -->
### Frontend Design

<!-- para:0010 -->
Craft production-grade frontends with distinctive design. Generates polished code that avoids generic AI aesthetics.

<!-- para:0011 -->
413623

<!-- para:0012 -->
installs

<!-- para:0013 -->
### Superpowers

<!-- para:0014 -->
Claude learns brainstorming, subagent development with code review, debugging, TDD, and skill authoring through Superpowers.

<!-- para:0015 -->
294839

<!-- para:0016 -->
### Context7

<!-- para:0017 -->
Upstash Context7 MCP server for live docs lookup. Pull version-specific docs and code examples from source repos into LLM context.

<!-- para:0018 -->
212236

<!-- para:0019 -->
### Code Review

<!-- para:0020 -->
AI code review with specialized agents and confidence-based filtering for pull requests

<!-- para:0021 -->
191903
