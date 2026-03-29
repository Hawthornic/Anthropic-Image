---
source_url: https://claude.com/resources/tutorials/using-the-clinicaltrials-gov-connector-in-claude
title: "Using the Clinical Trials.gov Connector in Claude"
section: resources
---

<!-- para:0001 -->
# Using the Clinical Trials.gov Connector in Claude

<!-- para:0002 -->
- Category: Life Sciences
- Product
- Reading time Watch time5minmin
- Share [Copy link](https://claude.com/resources/tutorials/using-the-clinicaltrials-gov-connector-in-claude#)https://claude.com/resources/tutorials/using-the-clinicaltrials-gov-connector-in-claude

<!-- para:0003 -->
The Clinical Trials.gov connector gives Claude access to the NIH/NLM registry of 500,000+ clinical studies to search trials, analyze endpoints, and support research operations. This article explains how to set up and use the Clinical Trials.gov integration with Claude to power clinical, regulatory, and patient-supporting workflows.

<!-- para:0004 -->
The Clinical Trials.gov integration relies upon Claude's ability to [use remote connectors](https://support.claude.com/en/articles/11724452-browsing-and-connecting-to-tools-from-the-directory).

<!-- para:0005 -->
‍

<!-- para:0006 -->
## **What this integration provides**

<!-- para:0007 -->
The Clinical Trials.gov connector gives Claude access to Clinical Trials.gov API v2, the world's largest clinical trial registry managed by the National Library of Medicine (NLM) at the National Institutes of Health (NIH). With more than 1,200 studies, the database has grown to over 500,000 registered trials across 221 countries and territories, representing the most comprehensive source of clinical research information worldwide.

<!-- para:0008 -->
This connector provides six primary tool calls that access different dimensions of clinical trial data.

<!-- para:0009 -->
- **search_trials** is the primary discovery tool, enabling users to find trials by condition (e.g., "diabetes", "lung cancer"), intervention (drug/treatment names), location (city, state, country), sponsor, recruitment status (RECRUITING, COMPLETED, etc.), and development phase (PHASE1-PHASE4), with support for Boolean operators and medical synonym expansion.
- **get_trial_details**retrieves comprehensive protocol information for specific trials using their NCT identifier, returning full eligibility criteria (inclusion/exclusion), detailed study design and methodology, primary and secondary endpoints with measurement timeframes, all study locations with contact information, sponsor details, enrollment targets, and links to published results.
- **search_by_sponsor** enables pharmaceutical pipeline analysis by finding all trials funded by specific companies or institutions (e.g., "Pfizer", "NIH", "Mayo Clinic"), supporting competitive intelligence and drug development tracking with filtering by condition and phase.
- **search_investigators**identifies principal investigators and research sites conducting trials in specific therapeutic areas, returning investigator names, roles, institutional affiliations, facility locations, and associated trial information for site selection and investigator verification.
- **analyze_endpoints**systematically compares outcome measures across trials, operating in two modes: single-trial analysis (returns all endpoints for one NCT ID) or aggregate analysis (identifies common endpoint patterns across multiple trials in a therapeutic area), essential for protocol design benchmarking and understanding standard measures in a disease area.
- **search_by_eligibility**enables clinical research coordinators to screen for trials matching specific demographic and clinical criteria (age, sex) with support for eligibility keyword searches in inclusion/exclusion criteria text (e.g., "BRCA mutation", "HbA1c > 8%", "ECOG 0-1").

<!-- para:0010 -->
On the provider side, the connector queries Clinical Trials.gov's RESTful API v2, which accesses a PostgreSQL database updated daily with trial registration data submitted by study sponsors. All interventional trials of FDA-regulated products must be registered before enrollment begins (per FDAAA 801), and results must be submitted within one year of study completion. The database includes structured data fields for conditions (using MeSH terminology), interventions, locations, eligibility criteria, outcome measures, and study design parameters.

<!-- para:0011 -->
## **Who should use the Clinical Trials.gov integration**

<!-- para:0012 -->
- **Clinical Research Coordinators & Study Recruiters: **Screen institutional patient populations for trial eligibility using demographic and clinical criteria, identify nearby recruiting studies for referral programs, verify detailed trial requirements and visit schedules, and coordinate with study sponsors to accelerate enrollment.
- **Pharmaceutical & Biotech Companies: ** Conduct competitive intelligence on competitor pipelines, analyze clinical development strategies across therapeutic areas, identify partnership opportunities with active research sites, and benchmark study designs and endpoints against industry standards.
- **Principal Investigators & Site Coordinators: **Identify collaborating investigators at other institutions, understand which sites are most active in specific disease areas, verify investigator qualifications and track record, and discover trials for potential site participation.
- **Protocol Writers & Clinical Operations Teams: **Benchmark endpoint selection by analyzing outcome measures used in similar trials, design eligibility criteria based on prior study standards, identify common recruitment challenges in a therapeutic area, and estimate feasible enrollment timelines.
- **Regulatory Affairs Professionals: **Track clinical development programs for regulatory submissions, verify trial registration compliance for FDA-regulated products, analyze phase progression rates and development timelines, and identify precedent trials for regulatory strategy.
- **Clinical Trial Recruiters & Research Navigators: **Screen institutional patient populations for trial eligibility, identify appropriate trials for referral programs, coordinate with study sponsors for patient enrollment, and maintain databases of active trials at their healthcare system.
- **Medical Affairs & Health Economists: **Analyze trial completion rates and time-to-results, identify gaps in clinical evidence for specific indications, track real-world evidence studies and post-marketing trials, and support payer value dossiers with clinical trial data.

<!-- para:0013 -->
## **Setting up the Clinical Trials.gov integration**

<!-- para:0014 -->
**For Organization Owners (Team and Enterprise)**

<!-- para:0015 -->
1. Navigate to Admin settings > Connectors
2. Click "Browse connectors"
3. Click “**Clinical Trials.gov**”
4. Click “Add to your team”

<!-- para:0016 -->
**For Individual Claude Users**

<!-- para:0017 -->
1. Navigate to Settings > Connectors
2. Find “**Clinical Trials.gov**”
3. Click “Connect”

<!-- para:0018 -->
Learn about [finding and connecting tools](https://support.claude.com/en/articles/11724452-browsing-and-connecting-to-tools-from-the-directory) in Claude.

<!-- para:0019 -->
**For Claude Code Users**

<!-- para:0020 -->
1. Command: /plugin marketplace add anthropics/life-sciences
2. Command: /plugin install clinical-trials@life-sciences
3. Restart Claude Code
4. Verify that the server is connected with /mcp

<!-- para:0021 -->
Technical details of the Clinical Trials.gov integration can be found in the [Clinical Trials.gov MCP Server Documentation](http://clinicaltrials.gov/).

<!-- para:0022 -->
## **Example use cases**

<!-- para:0023 -->
**Clinical Trial Recruitment & Eligibility Screening**

<!-- para:0024 -->
- Scenario: Research coordinators and recruitment professionals identifying eligible trial candidates from their institutional patient populations
- Sample Prompts: *"Find recruiting Phase 3 diabetes trials with HbA1c eligibility criteria between 7-10% for our Boston research site"**"What breast cancer trials are accepting BRCA-positive candidates at academic medical centers in California?"**"Search for Alzheimer's trials with MMSE score requirements that match our memory clinic population"**"Identify pediatric leukemia trials recruiting at major children's hospitals for our referral network"*

<!-- para:0025 -->
**Competitive Intelligence & Pipeline Analysis**

<!-- para:0026 -->
- Scenario: Analyzing pharmaceutical company development programs and therapeutic landscapes
- Sample Prompts: *"What Phase 3 oncology trials is Pfizer currently running? Show their cancer pipeline"**"Find all GLP-1 agonist trials for obesity. Who are the main sponsors and what endpoints are they measuring?"**"Show me Moderna's active clinical trials and their development phases"**"What companies are developing drugs for Parkinson's disease? Analyze their trial endpoints"*

<!-- para:0027 -->
**Systematic Protocol Design & Endpoint Benchmarking**

<!-- para:0028 -->
- Scenario: Designing new trial protocols based on industry standards and precedent studies
- Sample Prompts: *"What are the most common primary endpoints used in Phase 3 diabetes trials?"**"Analyze endpoints for completed heart failure trials - what timeframes do they use?"**"Find principal investigators at academic medical centers conducting immunotherapy trials"**"What eligibility criteria do Phase 2 NASH trials typically use? Show me HbA1c cutoffs"*

<!-- para:0029 -->
Learn more at How to use the Clinical Trial Protocol skill with Claude
