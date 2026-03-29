---
source_url: https://www.anthropic.com/news/healthcare-life-sciences
title: "Advancing Claude in healthcare and the life sciences"
section: news
date: 2026-01-11
---

<!-- para:0001 -->
In October, we announced [Claude for Life Sciences](https://www.anthropic.com/news/claude-for-life-sciences), our latest step in making Claude a productive research partner for scientists and clinicians, and in helping Claude to support those in industry bringing new scientific advancements to the public.

<!-- para:0002 -->
Now, we’re expanding that feature set in two ways. First, we’re introducing [Claude for Healthcare](https://claude.com/solutions/healthcare), a complementary set of tools and resources that allow healthcare providers, payers, and health tech companies and startups to use Claude for medical purposes through HIPAA-ready products. We're also introducing tools to help individuals understand and navigate their personal health data. Second, we’re adding new capabilities for life sciences: connecting Claude to more scientific platforms, and helping it provide greater support in areas ranging from clinical trial management to regulatory operations.

<!-- para:0003 -->
These features build on top of major recent improvements we’ve made to Claude’s general intelligence. These improvements are best captured by evaluations of Claude’s agentic performance on detailed simulations of medical and scientific tasks, since this correlates most closely to real-world usefulness. Here, Claude Opus 4.5, our latest model, represents a major forward step:

<!-- para:0004 -->
![Medical benchmarket performance](https://www.anthropic.com/_next/image?url=https%3A%2F%2Fwww-cdn.anthropic.com%2Fimages%2F4zrzovbb%2Fwebsite%2F9de13efd2402bda97dfb174739633ef598c3b59a-1920x1080.png&w=3840&q=75)

*Claude 4.5 models evaluated with extended thinking (64k tokens) and native tool useMedCalc: Medical calculation accuracy (with Python code execution)MedAgentBench: Medical agent task completion (Stanford)

<!-- para:0005 -->
In addition, Opus 4.5 with extended thinking improves on earlier Claude models in producing correct answers on our suite of honesty evaluations, reflecting the progress we’ve made on factual hallucinations.^1^

<!-- para:0006 -->
With these model improvements and our new tools, Claude is now dramatically more useful for real-world healthcare and life sciences tasks. Ultimately, it’s those real-world outcomes that have motivated our work: these tools can be used to speed up prior authorization requests so that patients can get life saving care more quickly, can help with patient care coordination to reduce the pressures on clinicians' time, and help with regulatory submissions so that more life saving drugs can come to market faster. We discuss the practical ways that Claude can be used across these industries in more detail below.

<!-- para:0007 -->
## **Introducing Claude for Healthcare**

<!-- para:0008 -->
#### **What’s new**

<!-- para:0009 -->
[Connectors](https://claude.ai/redirect/website.v1.fdeb5e93-0f04-4e8b-a162-49c3e80b18c4/settings/connectors) are tools that allow users to give Claude access to other platforms directly. For payers and providers, we’ve added several connectors that make healthcare information easier to find, access, and understand. These allow Claude to pull information from industry-standard systems and databases, meaning that clinicians and administrators can save significant time finding the data and generating the reports they need.

<!-- para:0010 -->
Claude can now connect to:

<!-- para:0011 -->
- The **Centers for Medicare & Medicaid Services (CMS) Coverage Database**, including both Local and National Coverage Determinations. This enables Claude to verify locally-accurate coverage requirements, support prior authorization checks, and help build stronger claims appeals. This connector is designed to help revenue cycle, compliance, and patient-facing teams work more efficiently with Medicare policy.
- The **International Classification of Diseases, 10th Revision (ICD-10).** Claude can look up both diagnosis and procedure codes to support medical coding, billing accuracy, and claims management. This data is provided by the CMS and the Centers for Disease Control and Prevention (CDC).
- The **National Provider Identifier Registry**, which allows Claude to help with provider verification, credentialing, networking directory management, and claims validation.

<!-- para:0012 -->
Since HIPAA-compliant organizations can now use Claude for Enterprise, they can also access existing healthcare-related connectors, including **PubMed**, which provides access to more than 35 million pieces of biomedical literature and allows Claude to quickly surface the latest research, and produce up-to-date literature reviews.

<!-- para:0013 -->
Finally, we’ve added two new [Agent Skills](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview): **FHIR development**and a sample**prior authorization review**skill. FHIR is the modern standard for exchanging data between healthcare systems, and this skill helps to improve interoperability by enabling developers to connect them faster and with fewer errors.

<!-- para:0014 -->
The prior authorization skillprovides a template that can be customized to organizations’ policies and work patterns, helping with cross-referencing between coverage requirements, clinical guidelines, patient records, and appeal documents.

<!-- para:0015 -->
#### **Using Claude for healthcare tasks**

<!-- para:0016 -->
With these new tools, Claude can provide meaningful support for healthcare startups building new products, and for large enterprises looking to integrate AI more deeply into their operations. For example, Claude can:

<!-- para:0017 -->
**Speed up reviews of prior authorization requests**. These requests can take hours to review, slowing patients’ access to care they need and frustrating payers and providers alike. Reviews require working across various fragmented sources of information, including coverage requirements, clinical guidelines, patient records, and appeal documents. Now, Claude can pull coverage requirements from CMS or custom policies, check clinical criteria against patient records in a HIPAA-ready manner, and then propose a determination with supporting materials for the payer’s review.**

<!-- para:0018 -->
![Video thumbnail](https://www.anthropic.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F4zrzovbb%2Fwebsite%2F249b312cf875a6daa78a7d42497d58bf457b8099-3418x1914.png&w=3840&q=75)

<!-- para:0019 -->
**Support claims appeals**. Denied claims cost time and money for all parties. By pulling together the necessary information from patient records, coverage policies, clinical guidelines and prior documentation, Claude helps providers build stronger appeals, and helps payers to process them more quickly.**

<!-- para:0020 -->
**Coordinate care and triage patient messages.** Claude can support care teams in navigating a large volume of patient portal messages, referrals, and handoffs. It can sort through these to identify what needs immediate attention, and to ensure that nothing gets inadvertently forgotten.**

<!-- para:0021 -->
**Support healthcare startups developing new ideas.** On the Claude Developer Platform, startups can build new products that use Claude to reduce the time burden of healthcare administration—such as ambient scribing for clinical documentation, or tools to support chart reviews and clinical decisions.**

<!-- para:0022 -->
#### **Connecting personal health data**

<!-- para:0023 -->
We’re also introducing integrations designed to make it easier for individuals to understand their health information and prepare for important medical conversations with clinicians.

<!-- para:0024 -->
In the US, Claude Pro and Max plan subscribers can choose to give Claude secure access to their lab results and health records. New **HealthEx** and **Function**connectors are available in beta today, while **Apple Health** and **Android Health Connect**integrationsarerolling out in beta this week via the Claude [iOS](https://apps.apple.com/us/app/claude-by-anthropic/id6473753684) and [Android](https://play.google.com/store/apps/details?id=com.anthropic.claude&hl=en_GB&pli=1) apps.

<!-- para:0025 -->
When connected, Claude can summarize users’ medical history, explain test results in plain language, detect patterns across fitness and health metrics, and prepare questions for appointments. The aim is to make patients' conversations with doctors more productive, and to help users stay well-informed about their health.

<!-- para:0026 -->
These integrations are private by design. Users can choose exactly the information they share with Claude, must explicitly opt-in to enable access, and can disconnect or edit Claude’s permissions at any time. We do not use users’ health data to train models.

<!-- para:0027 -->
Claude is designed to include contextual disclaimers, acknowledge its uncertainty, and direct users to healthcare professionals for personalized guidance.

<!-- para:0028 -->
## **Expanding Claude for Life Sciences**

<!-- para:0029 -->
#### **What’s new**

<!-- para:0030 -->
In our initial release, we focused on making Claude more powerful for preclinical research and development (including bioinformatics, and generating hypotheses and protocols). Now, we’re expanding our focus to the clinical trial operations and regulatory stages of the development chain. We’re adding connectors to:

<!-- para:0031 -->
- **Medidata**, a leading provider of clinical trial solutions to the life sciences industry. Enabled Medidata Study Feasibility customers can use Claude to securely access Medidata's historical trial enrollment information as well as information about site performance.
- **ClinicalTrials.gov**, the US clinical trials registry. This provides Claude with information on drug and device development pipelines, as well as patient recruitment planning, site selection, and protocol design.
- **ToolUniverse**, which allows scientists to use a library of over 600 vetted scientific tools to rapidly test hypotheses, compare approaches, and refine their analyses.
- **bioRxiv & medRxiv**, the life sciences preprint servers. When connected to bioRxiv & medRxiv, Claude can access the latest research before it’s formally published.
- **Open Targets**, which supports the systematic identification and prioritization of potential therapeutic drug targets.
- **ChEMBL**, the bioactive compound and drug database, which will help Claude support early discovery work.
- **Owkin,**whosePathology Explorer agent analyzes tissue images to detect cells and map tumors, designed to accelerate drug discovery and development.

<!-- para:0032 -->
These join our existing Life Sciences connectors to **Benchling**, **10x Genomics**, **PubMed**, **BioRender**, **Synapse.org**, and **Wiley Scholar Gateway**. Our Benchling connector is now also available via Claude.ai on the web (in addition to the Claude desktop app), with secure access via SSO.

<!-- para:0033 -->
Finally, we’re adding new Agent Skills for **scientific problem selection**, converting **instrument data to Allotrope**, and supporting bioinformatics work with skills bundles for **scVI-tools** and **Nextflow deployment**. We’re also adding a sample skill for **clinical trial protocol draft generation**. These drafts include endpoint recommendations and account for regulatory pathways, the competitive landscape, and relevant FDA guidelines.

<!-- para:0034 -->
See the clinical trial skill in action, below:

<!-- para:0035 -->
![Video thumbnail](https://www.anthropic.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F4zrzovbb%2Fwebsite%2F842ab2275159eeb8f8f4a7d7f5a14050a4e77b93-2982x1632.png&w=3840&q=75)

<!-- para:0036 -->
#### **Using Claude in life sciences**

<!-- para:0037 -->
With this new package of tools, Claude can support:

<!-- para:0038 -->
**Drafting clinical trial protocols.** Claude can create a draft of a clinical trial protocol that takes FDA and NIH requirements into account and uses your organization’s preferred templates, policies, and datasets.**

<!-- para:0039 -->
**Clinical trial operations.** Using Medidata trial data, Claude can track important indicators—like enrollment and site performance—that allow it to surface issues before they begin to affect a trial’s timeline.**

<!-- para:0040 -->
**Preparing regulatory submissions.**Claude can identify gaps in existing regulatory documents, draft responses to agencies’ queries, and navigate FDA guidelines.**

<!-- para:0041 -->
#### **Our customers and partners**

<!-- para:0042 -->
We’re working with a number of organizations in healthcare and the life sciences. A selection of our partners describe their experiences using Claude below:

<!-- para:0043 -->
Claude is the only frontier model available on all three leading cloud services: AWS, Google Cloud, and Microsoft.

<!-- para:0044 -->
We’re also partnering with companies who specialize in helping organizations adopt AI for specialist work, including Accenture, Blank Metal, Caylent, Deloitte, Deepsense.ai, Firemind, KPMG, Provectus, PwC, OWT, Quantium, Slalom, Tribe AI, and Turing.

<!-- para:0045 -->
## **Getting started**

<!-- para:0046 -->
To learn more about Claude for Healthcare, see [here](http://claude.com/solutions/healthcare), or see our tutorial guides [here](https://claude.com/resources/tutorials-category/healthcare). For more detail on the expanded Claude for Life Sciences capabilities, see [here](https://claude.com/solutions/life-sciences), and our tutorial guides [here](https://claude.com/resources/tutorials-category/life-sciences).

<!-- para:0047 -->
Our new connectors and Agent Skills are generally available to all Claude subscribers, including Claude Pro, Max, Teams, and Enterprise.

<!-- para:0048 -->
You can also [contact our sales team](https://www.claude.com/contact-sales) to discuss bringing Claude to your organization.

<!-- para:0049 -->
## Footnotes

<!-- para:0050 -->
*1: See the [Claude Opus 4.5 system card](https://assets.anthropic.com/m/64823ba7485345a7/Claude-Opus-4-5-System-Card.pdf), pages 48-49.*

<!-- para:0051 -->
**Changelog:**

<!-- para:0052 -->
February 7, 2026: *Edited the introductory paragraph to clarify that HIPAA-ready products are specific to healthcare providers and payers. The personal health integrations for individual users are covered in the "Connecting personal health data" section.*
