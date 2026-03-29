---
source_url: https://claude.com/resources/tutorials/using-the-chembl-connector-in-claude
title: "Using the ChEMBL Connector in Claude"
section: resources
---

<!-- para:0001 -->
# Using the ChEMBL Connector in Claude

<!-- para:0002 -->
- Category: Life Sciences
- Product
- Reading time Watch time5minmin
- Share [Copy link](https://claude.com/resources/tutorials/using-the-chembl-connector-in-claude#)https://claude.com/resources/tutorials/using-the-chembl-connector-in-claude

<!-- para:0003 -->
The ChEMBL connector gives Claude access to EMBL-EBI's ChEMBL database, a manually curated repository of bioactive molecules with drug-like properties, their biological targets, and quantitative activity measurements. This article explains how to set up and use the ChEMBL integration with Claude to accelerate drug discovery through bioactive compound data.

<!-- para:0004 -->
The ChEMBL integration relies upon Claude's ability to [use remote connectors](https://support.claude.com/en/articles/11724452-browsing-and-connecting-to-tools-from-the-directory).

<!-- para:0005 -->
‍

<!-- para:0006 -->
## **What this integration provides**

<!-- para:0007 -->
This integration connects Claude to the most recent version of ChEMBL, Europe's leading open-access drug discovery database maintained by the European Bioinformatics Institute (EMBL-EBI). ChEMBL contains over 2 million bioactive compounds, 15+ million activity measurements, and data from 76,000+ scientific publications, making it an essential resource for computational drug discovery, target identification, and pharmaceutical research.

<!-- para:0008 -->
This connector provides six primary tool calls that access different facets of the ChEMBL database.

<!-- para:0009 -->
- **compound_search** enables users to find molecules by name, ChEMBL ID, or chemical structure (SMILES), returning comprehensive data including molecular properties, synonyms, approval status, and ATC classifications.
- **target_search**queries biological targets (proteins, enzymes, receptors) by name, gene symbol, or organism, providing protein accessions, Gene Ontology annotations, and cross-references to Uni Prot and other databases.
- **get_bioactivity** retrieves quantitative activity measurements (IC50, EC50, Ki, Kd values) for compound-target interactions, including assay descriptions, p ChEMBL scores, confidence ratings, and literature references from peer-reviewed journals.
- **get_mechanism**accesses manually curated mechanism of action data for approved drugs, detailing how compounds interact with their biological targets (e.g., "Cyclooxygenase inhibitor") with action types (INHIBITOR, AGONIST, ANTAGONIST) and supporting references.
- **drug_search** finds approved drugs and clinical candidates by therapeutic indication using MeSH disease terminology, returning drugs with their development phase, approval dates, and safety warnings.
- **get_admet**provides calculated molecular properties critical for drug-likeness assessment, including lipophilicity (ALogP), polar surface area, hydrogen bond donors/acceptors, Rule of Five violations, and QED drug-likeness scores.

<!-- para:0010 -->
On the provider side, the connector queries ChEMBL's RESTful API and SQL database containing standardized, manually curated data extracted from medicinal chemistry literature, clinical trials databases, and high-throughput screening campaigns. All bioactivity data includes confidence scores, data validity flags, and full provenance tracing back to original publications.

<!-- para:0011 -->
## **Who should use the ChEMBL integration**

<!-- para:0012 -->
- **Medicinal Chemists: **Design and optimize lead compounds by analyzing structure-activity relationships (SAR), checking molecular properties against drug-likeness criteria, and identifying structural analogs with improved potency or selectivity.
- **Pharmacologists: **Research drug mechanisms of action, identify polypharmacology risks, discover off-target effects, and validate therapeutic targets by examining bioactivity profiles across protein families.
- **Computational Biologists & Cheminformaticians: **Build machine learning models for activity prediction, perform virtual screening campaigns, train QSAR models, and conduct large-scale data mining across chemical space.
- **Drug Discovery Scientists: **Identify validated drug targets, find chemical starting points for hit-to-lead optimization, benchmark competitor compounds, and assess freedom-to-operate by analyzing approved drugs in therapeutic areas.
- **Academic Researchers: **Investigate drug repurposing opportunities, study evolutionary relationships between drug targets, analyze clinical development success rates, and validate findings against established bioactivity data.
- **Pharmaceutical Project Teams: ** Conduct competitive intelligence on drug pipelines, analyze endpoints for clinical trial design, assess target tractability, and evaluate ADMET liabilities early in development.

<!-- para:0013 -->
## **Setting up the ChEMBL integration**

<!-- para:0014 -->
**For Organization Owners (Team and Enterprise)**

<!-- para:0015 -->
1. Navigate to Admin settings > Connectors
2. Click "Browse connectors"
3. Click “**ChEMBL**”
4. Click “Add to your team”

<!-- para:0016 -->
**For Individual Claude Users**

<!-- para:0017 -->
1. Navigate to Settings > Connectors
2. Find “**ChEMBL**”
3. Click “Connect”

<!-- para:0018 -->
Learn about [finding and connecting tools](https://support.claude.com/en/articles/11724452-browsing-and-connecting-to-tools-from-the-directory) in Claude.

<!-- para:0019 -->
‍**For Claude Code Users**

<!-- para:0020 -->
1. Command: `/plugin marketplace add anthropics/life-sciences`
2. Command: `/plugin install chembl@life-sciences`
3. Restart Claude Code
4. Verify that the server is connected with /mcp

<!-- para:0021 -->
Technical details of the ChEMBL integration can be found in the [ChEMBL MCP Server Documentation](https://docs.mcp.deepsense.ai/guides/chembl.html).

<!-- para:0022 -->
## **Example use cases**

<!-- para:0023 -->
**Target-Based Drug Discovery**

<!-- para:0024 -->
- *Scenario: Identifying validated compounds for a therapeutic target of interest*
- *Sample Prompts:* *“Find all approved kinase inhibitors that target EGFR with IC50 less than 100 nM”**“What compounds have been tested against the BCL2 protein? Show me the most potent ones with their bioactivity data”**“Search for GPCR agonists targeting the adenosine A2A receptor and show their mechanism of action”*

<!-- para:0025 -->
**Compound Optimization & SAR Analysis**

<!-- para:0026 -->
- Scenario: Improving lead compound properties by studying structure-activity relationships
- Sample Prompts:

<!-- para:0027 -->
- *“Find structural analogs of imatinib with similarity > 85% and compare their target selectivity profiles”*
- *“What are the ADMET properties for aspirin? Does it pass Lipinski's Rule of Five?” “Show me compounds similar to this SMILES structure: CC(=O)Oc1ccccc1C(=O)O, and compare their bioactivity against cyclooxygenase”*

<!-- para:0028 -->
**Competitive Intelligence & Drug Repurposing**

<!-- para:0029 -->
- Scenario: Analyzing therapeutic landscapes and identifying repositioning opportunities
- Sample Prompts: *“What are all the approved drugs for treating hypertension? Show their mechanisms of action”**“Find the mechanism of action for pembrolizumab and identify all other compounds targeting the same protein”**“Search for approved oncology drugs that also show bioactivity against inflammatory disease targets”*
