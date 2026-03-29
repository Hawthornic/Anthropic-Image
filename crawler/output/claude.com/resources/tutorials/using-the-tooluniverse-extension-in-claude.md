---
source_url: https://claude.com/resources/tutorials/using-the-tooluniverse-extension-in-claude
title: "Using the Tool Universe Extension in Claude"
section: resources
---

<!-- para:0001 -->
# Using the Tool Universe Extension in Claude

<!-- para:0002 -->
- Category: Life Sciences
- Product
- Reading time Watch time5minmin
- Share [Copy link](https://claude.com/resources/tutorials/using-the-tooluniverse-extension-in-claude#)https://claude.com/resources/tutorials/using-the-tooluniverse-extension-in-claude

<!-- para:0003 -->
The Tool Universe MCP gives Claude access to a library of 600+ vetted scientific tools to explore large hypothesis spaces, compare competing hypotheses, and iterate through fast-to-slow cycles of analysis. This article explains how to set up and use the Tool Universe integration with Claude.

<!-- para:0004 -->
The Tool Universe integration is available as a desktop extension in the Claude Desktop App ([download here](https://claude.ai/download)), and it relies upon Claude's ability to use [local connectors via a desktop extension](https://support.claude.com/en/articles/10949351-getting-started-with-local-mcp-servers-on-claude-desktop).

<!-- para:0005 -->
## **About the Tool Universe integration**

<!-- para:0006 -->
Tool Universe is an ecosystem for building AI scientists and AI agents for science that work with researchers to generate hypotheses, turn them into executable research plans, run scientific tools, and continually update analyses. It targets research at scale to reimagine scientific discovery: AI scientists explore large hypothesis spaces, compare competing hypotheses, and iterate through fast-to-slow cycles of analysis instead of producing one-off summaries.

<!-- para:0007 -->
Tool Universe standardizes tool use. It lets AI scientists discover and execute tools via local Python functions and remote services served through MCP. This design makes every step inspectable: AI scientists compose end-to-end workflows that connect datasets, models, and analysis pipelines and record inputs and outputs before they choose the next action. In human-AI collaboration, Tool Universe supports a continuous loop of hypothesis generation, information-seeking tool calls, execution of research objectives, and refinement of internal models as new experimental data arrive and insights are generated.

<!-- para:0008 -->
## **Data sets and services available in this integration**

<!-- para:0009 -->
**Disclaimer from Tool Universe: **Tool Universe provides access to third-party scientific databases and services. All copyrights and intellectual property rights for the data, content, and services listed below belong to their respective original sources and owners. Tool Universe acts solely as an integration platform and bears no responsibility for the accuracy, completeness, or continued availability of these external resources.**

<!-- para:0010 -->
Tool Universe provides access to a comprehensive ecosystem of scientific resources:

<!-- para:0011 -->
**Biological Databases and Biological Foundation Models**

<!-- para:0012 -->
- Uni Prot - Complete protein knowledge database
- Ensembl - Genomic data and annotations
- RCSB PDB - Protein structure database
- ChEMBL - Bioactive molecules and drug discovery database
- NCBI databases - Gen Bank, Ref Seq, SNP database
- Gene Ontology - Biological process, function, and location annotations
- ESM - Protein language models
- Transcript Former - Single-cell foundation models

<!-- para:0013 -->
**Chemical and Drug Databases**

<!-- para:0014 -->
- Pub Chem - Chemical structures and biological activities
- Drug Bank - Drug and drug target database
- ChEMBL - Bioactive drug-like small molecules
- FDA databases - Drug approval, drug prescribing information, adverse events, drug indications and contraindications, drug interactions
- Clinical Trials.gov - Clinical trial information

<!-- para:0015 -->
**Literature and Knowledge Bases**

<!-- para:0016 -->
- Pub Med - Biomedical literature database
- Semantic Scholar - AI-powered literature analysis
- Europe PMC - Open access biomedical literature
- Open Alex - Comprehensive scholarly works database
- Crossref - DOI registration and metadata
- Open Targets - Insights for systematic drug target selection

<!-- para:0017 -->
**Genomic and Health Data**

<!-- para:0018 -->
- GTEx - Tissue-specific gene expression
- GWAS Catalog - Genome-wide association studies
- Clin Var - Genetic variation and disease relationships
- OMIM - Online Mendelian Inheritance in Man
- TCGA - Cancer genomics data

<!-- para:0019 -->
**Research Tools and APIs**

<!-- para:0020 -->
- Open Targets - Target-disease associations
- STRING - Protein-protein interaction networks
- KEGG - Pathway and disease information
- Reactome - Biological pathway database
- Inter Pro - Protein families and domains

<!-- para:0021 -->
**AI Models, AI agents, Foundation and Generative Models, Visualizations and Scientific Workflows**

<!-- para:0022 -->
- Alpha Fold - Protein structure prediction
- BLAST - Sequence similarity searching
- ADMET-AI - Drug property prediction models
- Chem Tools - Chemical informatics utilities
- Visualization tools - Molecular and data visualization

<!-- para:0023 -->
‍

<!-- para:0024 -->
## **Who should use the Tool Universe integration**

<!-- para:0025 -->
**Research Scientists and Academics**

<!-- para:0026 -->
Accelerate hypothesis generation, automate literature reviews, perform complex multi-database analyses, and scale research capabilities to emerging experimental and AI-human collaboration platforms.

<!-- para:0027 -->
**Pharmaceutical and Biotech Companies**

<!-- para:0028 -->
Streamline drug development pipelines, enhance target identification, improve compound design and optimization, virtual drug screening, and accelerate report generation and target assessment, de-risking and validation.

<!-- para:0029 -->
**Healthcare Organizations**

<!-- para:0030 -->
Power precision medicine initiatives, support clinical trial design and optimization with patient selection, facilitate pharmacogenomics research, and improve patient stratification strategies, extract prognostic and predictive biomarkers from multimodal healthcare datasets.

<!-- para:0031 -->
**Data Scientists, ML Engineers, Platform and Infrastructure Engineers**

<!-- para:0032 -->
Access to domain-specific tools without custom development, rapid prototyping of AI agents for science, and integration of scientific data into ML workflows.

<!-- para:0033 -->
**Government and Regulatory Agencies**

<!-- para:0034 -->
Enhanced regulatory decision-making, improved adverse event analysis, accelerated drug approval processes, and comprehensive safety monitoring.

<!-- para:0035 -->
## **Who can access the Tool Universe integration**

<!-- para:0036 -->
Tool Universe is open source under the Apache License 2.0, allowing free access to all features in Tool Universe. The source code is available on [Git Hub](https://github.com/mims-harvard/Tool Universe).

<!-- para:0037 -->
More details on accessing the integration can be found in [Tool Universe’s MCP Server Documentation](https://github.com/mims-harvard/Tool Universe).

<!-- para:0038 -->
## **Setting up the Tool Universe integration**

<!-- para:0039 -->
The Tool Universe integration is available as a desktop extension in the Claude Desktop App ([download here](https://claude.ai/download)). For Organization Owners (Team and Enterprise), setting up the integration involves making the extension available to your organization. For individual users, setting up the integration involves installing the extension from inside the Claude Desktop App.

<!-- para:0040 -->
**For Organization Owners (Team and Enterprise)**

<!-- para:0041 -->
*If your organization uses the Desktop Extension Allowlist (i.e., restricts which Desktop Extensions users can access)…*

<!-- para:0042 -->
1. Navigate to Admin settings > Connectors
2. Click “Desktop” tab at the top
3. Confirm that “Allowlist” it toggled **on**
4. Click the “Browse” button
5. In the search field, type “**Tool Universe**”
6. Click on Tool Universe
7. Click “Add to your team”
8. Instruct your team to download the [Claude Desktop App](https://claude.ai/download) to access the integration by following the instructions below for Individual Claude Users

<!-- para:0043 -->
*If your organization does not use the Desktop Extension Allowlist (i.e., does not restrict which Desktop Extensions users can access)…*

<!-- para:0044 -->
1. Navigate to Admin settings > Connectors
2. Click “Desktop” tab at the top
3. Confirm that “Allowlist” it toggled **off**
4. If the Allowlist is toggled off, all users in your organization will already be able to access the Desktop Extension directory using the instructions below for Individual Claude Users

<!-- para:0045 -->
**For Individual Claude Users**

<!-- para:0046 -->
1. Download the [Claude Desktop App](https://claude.ai/download)
2. In the Claude Desktop App, navigate to Settings > Extensions
3. Click “Browse extensions”
4. Click “**Tool Universe**”
5. Click “Install”

<!-- para:0047 -->
Learn about [installing desktop extensions from the directory](https://support.claude.com/en/articles/10949351-getting-started-with-local-mcp-servers-on-claude-desktop).

<!-- para:0048 -->
**For Claude Code Users**

<!-- para:0049 -->
1. Command: /plugin marketplace add anthropics/life-sciences
2. Command: /plugin install tool-universe@life-sciences
3. Restart Claude Code
4. Verify that the server is connected with /mcp

<!-- para:0050 -->
Technical details of the Tool Universe integration can be found in [Tool Universe’s MCP Server Documentation](https://github.com/mims-harvard/Tool Universe).

<!-- para:0051 -->
## **Example use cases**

<!-- para:0052 -->
**Drug Discovery and Therapeutic Development**

<!-- para:0053 -->
- Therapeutic discovery and target-to-candidate workflows
- **Sample Prompt: **“*Identify targets for hypercholesterolemia, prioritize one using evidence from Open Targets and literature, then screen known drugs and close analogs, and rank candidates by predicted binding and ADMET tradeoffs. Provide intermediate evidence and a final shortlist.*”
- **Workflow: **Tool Universe-powered AI scientists: Query disease-target associations using Open Targets APIRetrieve protein structures from RCSB PDBAnalyze molecular interactions with ChEMBL compound data Predict binding affinities using integrated ML models Generate research hypotheses for therapeutic development

<!-- para:0054 -->
**Human Genetics and Genomic Research**

<!-- para:0055 -->
- Human genetics to mechanism (variant-to-gene-to-pathway)
- **Sample Prompt: **“*From GWAS hits for type 2 diabetes, map variants to candidate genes, summarize functional annotations and tissue expression, and return enriched pathways with supporting references and links to primary sources.*”
- **Workflow: ** Tool Universe-powered AI scientists: Search GWAS catalog for disease-associated genetic variants Map SNPs to genes using Ensembl and NCBI databases Retrieve functional annotations from Gene Ontology Analyze tissue-specific expression using GTEx data Identify biological pathways using KEGG and Reactome

<!-- para:0056 -->
**Literature and Multimodal Evidence Synthesis**

<!-- para:0057 -->
- **Sample Prompt: ** “*Search Pub Med and Europe PMC for recent CRISPR off-target detection methods, extract key experimental settings and reported failure modes, and produce a structured comparison table with citations.*”
- **Workflow: **Tool Universe-powered AI scientists: Multi-database literature searches (Pub Med, Europe PMC, bio Rxiv)Automated paper summarization and key finding extraction Citation network analysis using Semantic Scholar Trend identification through temporal analysis Cross-referencing with clinical trial data from Clinical Trials.gov

<!-- para:0058 -->
**Chemical and Molecular Analysis**

<!-- para:0059 -->
- **Sample Prompt: ** "*Using Tool Universe's OpenFDA and ADMET-AI tools, analyze the molecular properties of FDA-approved drugs for hypertension, predict their ADMET profiles, and identify potential side effect patterns.*"
- Workflow: Tool Universe-powered AI scientists: Query FDA drug databases for approved medications Calculate molecular descriptors and properties Predict pharmacokinetic profiles using ADMET-AI models Analyze structure-activity relationships Identify potential drug repurposing opportunities

<!-- para:0060 -->
**Scientific Discovery and Automation for Multi-Tool Studies**

<!-- para:0061 -->
- **Sample Prompt: **"*Build a reusable workflow that runs multiple literature searches in parallel, consolidates results, and produces a reproducible report. Return the workflow as a composed tool with clear inputs and outputs. Using Tool Universe's Uni Prot, PRIDE, and KEGG pathway tools, design a complete proteomics workflow: from protein identification using mass spectrometry data to functional analysis and pathway mapping.*"
- **Workflow: **Tool Universe-powered AI scientists: Integrate multimodal proteomics databases (Uni Prot, PRIDE)Automate data processing and quality control of proteomics readouts Annotate protein functions and perform pathway analysis Complete statistical analyses and generate interactive visualizations Generate reports with summaries

<!-- para:0062 -->
## **Demos and Documentation**

<!-- para:0063 -->
**Live Demonstrations**

<!-- para:0064 -->
- **Interactive Web Platform: ** [AIScientist.Tools](https://aiscientist.tools/) - Live tool discovery and execution interface for exploring 700+ scientific tools
- **Video Demonstrations: **Available on [You Tube](https://www.youtube.com/watch?v=f ManSJl Ss60)
- **Git Hub Repository: ** [Tool Universe on Git Hub](https://github.com/mims-harvard/Tool Universe) - Complete source code, documentation, and community with 797+ stars

<!-- para:0065 -->
**Documentation and Tutorials**

<!-- para:0066 -->
Documentation is available at [Tool Universe Documentation](https://zitniklab.hms.harvard.edu/Tool Universe/) covering installation, usage, and advanced features, including a quick start tutorial for 5-minute setup and immediate experimentation with scientific tools, and guides for integration with large language models, AI agents, and reasoning models.

<!-- para:0067 -->
**Community Resources**

<!-- para:0068 -->
Access community resources through our [Slack Community](https://join.slack.com/t/tooluniversehq/shared_invite/zt-3dic3eoio-5xxo Jch7TLNibNQn5_AREQ) for peer support and collaboration, and [Git Hub Issues](https://github.com/mims-harvard/Tool Universe/issues) for reporting bugs and requesting features.
