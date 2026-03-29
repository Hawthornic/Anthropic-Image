---
source_url: https://claude.com/resources/use-cases/preclinical-study-analysis
title: "Preclinical study analysis"
section: resources
---

<!-- para:0001 -->
# Preclinical study analysis

<!-- para:0002 -->
- Author Anthropic
- Category: Life Sciences
- Model Sonnet 4.5
- Features Connectors
- Share [Copy link](https://claude.com/resources/use-cases/preclinical-study-analysis#)https://claude.com/resources/use-case/preclinical-study-analysis

<!-- para:0003 -->
## Describe the task

<!-- para:0004 -->
Claude connects directly to research platforms like Benchling, allowing you to query complex experimental data as naturally as asking a colleague. It retrieves data from multiple notebook entries and sources, synthesizes comparisons, and creates polished reports, saving hours of tedious compilation work.

<!-- para:0005 -->
Start by telling Claude what studies you need to compare and what you want to understand about them.

<!-- para:0006 -->
Summarize the study designs for ST042 and ST043 and how they're different, including a table indicating key differences. Link all my notebook entries and sources.

<!-- para:0007 -->
## Give Claude context

<!-- para:0008 -->
To enable this workflow, you'll need Claude connected to your research data management system, like Benchling or other platforms.

<!-- para:0009 -->
## Required context

<!-- para:0010 -->
To pull data directly from your Benchling workspace, use the [Benchling connector.](https://claude.ai/directory/ant.dir.ant.benchling.mcp-server) This connector requires you to have [Claude for Desktop](https://www.claude.com/download). After connecting, Claude will be able to access your electronic lab notebooks, experimental protocols, and study data.

<!-- para:0011 -->
## Optional context

<!-- para:0012 -->
## What Claude creates

<!-- para:0013 -->
Claude connects to Benchling's agents to retrieve your study data, then synthesizes a comprehensive summary with key differences highlighted.

<!-- para:0014 -->
Perfect! The research is complete. Here's a comprehensive summary of studies ST042 and ST043:

<!-- para:0015 -->
**Study Overview**

<!-- para:0016 -->
Both ST042 and ST043 are preclinical validation studies evaluating the same LNP003-L006 therapeutic formulation for hepatic phosphoglycerate mutase (PGM) protein restoration. They were run in parallel with identical test articles and analytical methods but used different animal models and dose ranges.

<!-- para:0017 -->
**ST042: Restoring PGM Levels with LNP003**

<!-- para:0018 -->
- Study ID: bfi_ZWJIMRJbt
- Duration: February 12, 2024 - March 6, 2025
- Animal Model: Apolipoprotein E knockout (Apoe−/−) mice (n=14)
- Study Context: Disease model for atherosclerosis/cardiovascular applications
- Principal Investigator: Cecilia Cheng

<!-- para:0019 -->
**ST043: Efficacy of PGM**

<!-- para:0020 -->
- Study ID: bfi_1c Qty Nuu
- Duration: January 8, 2024 - March 7, 2025
- Animal Model: C57BL/6 wild-type mice (n=12)
- Study Context: Standard efficacy assessment for baseline therapeutic evaluation
- Principal Investigator: Cecilia Cheng

<!-- para:0021 -->
**Key Differences Table**

<!-- para:0022 -->
**How They Differ**

<!-- para:0023 -->
**1. Animal Models**

<!-- para:0024 -->
ST042 used a disease model (Apoe−/− mice) with validated amyloid pathology to assess efficacy in a context relevant to atherosclerosis and cardiovascular translational applications. ST043 used standard wild-type mice to establish baseline therapeutic efficacy without disease confounders.

<!-- para:0025 -->
**2. Dosing Strategy**

<!-- para:0026 -->
ST043 explored higher dose ranges (0.75-1.5 mg/kg) compared to ST042 (0.5-1.0 mg/kg), providing dose-response data across an expanded therapeutic window.

<!-- para:0027 -->
**3. Tissue Collection Scope**

<!-- para:0028 -->
ST042 had more comprehensive tissue collection (64 samples from liver, blood, and spleen), while ST043 had focused collection (14 samples) with enhanced brain tissue analysis for potential neurological applications.

<!-- para:0029 -->
**4. Strategic Purpose**

<!-- para:0030 -->
ST042 validated efficacy in a disease-relevant model, while ST043 provided clean therapeutic signal data for establishing the baseline therapeutic window.

<!-- para:0031 -->
**Shared Elements**

<!-- para:0032 -->
Both studies used:

<!-- para:0033 -->
- Identical LNP003-L006 formulation (bfi_n Qkcz2Zb2)
- Same analytical methods (HPLC, ELISA, histology)
- Oral administration based on body weight
- Three-group design (control, low dose, high dose)
- Same sampling timepoints (D2 T0 and D7)

<!-- para:0034 -->
**Key Documentation**

<!-- para:0035 -->
**ST042 Notebook Entries**

<!-- para:0036 -->
- EXP25000831 - Primary study report
- EXP25000829 - IND application report
- EXP24000468 - HPLC analytical protocol

<!-- para:0037 -->
**ST043 Notebook Entries**

<!-- para:0038 -->
- EXP24000469 - HPLC analytical protocol

<!-- para:0039 -->
**Cross-Study Documentation**

<!-- para:0040 -->
- Comparative analysis template for ST041, ST042, and ST043

<!-- para:0041 -->
**Conclusion**

<!-- para:0042 -->
These complementary studies demonstrate that LNP003-L006 effectively restores hepatic PGM protein levels in both wild-type and disease models, with robust dose-dependent efficacy. ST042's 3.5-fold increase in protein levels between dose groups and peak response of 511 µg/mL validates therapeutic potential in a disease-relevant context, while ST043 confirms activity across higher dose ranges in standard models.

<!-- para:0043 -->
## Follow up prompts

<!-- para:0044 -->
### Generate regulatory documentation

<!-- para:0045 -->
After reviewing the study comparison, ask Claude to create a polished report.

<!-- para:0046 -->
From these results, generate a Study Report that I can include in my regulatory submission.

<!-- para:0047 -->
## Tricks, tips, and troubleshooting

<!-- para:0048 -->
### Connects directly to your source data

<!-- para:0049 -->
When you ask Claude to "link all my notebook entries," it queries Benchling's database and retrieves actual entry IDs with clickable links. This maintains full traceability back to raw experimental data, which is essential for regulatory compliance and internal validation.

<!-- para:0050 -->
### Open external links to verify and interact with content

<!-- para:0051 -->
Claude provides Benchling notebook URLs (like benchling.com/entry/bfi_ZWJIMRJbt) so you can click through to review the original experiment protocols, attachments, results, and visualizations. This gives you full context beyond what appears in the summary.

<!-- para:0052 -->
## Ready to try for yourself?
