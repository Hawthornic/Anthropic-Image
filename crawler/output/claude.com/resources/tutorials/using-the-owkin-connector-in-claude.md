---
source_url: https://claude.com/resources/tutorials/using-the-owkin-connector-in-claude
title: "Using the Owkin Connector in Claude"
section: resources
---

<!-- para:0001 -->
# Using the Owkin Connector in Claude

<!-- para:0002 -->
- Category: Life Sciences
- Product
- Reading time Watch time5minmin
- Share [Copy link](https://claude.com/resources/tutorials/using-the-owkin-connector-in-claude#)https://claude.com/resources/tutorials/using-the-owkin-connector-in-claude

<!-- para:0003 -->
The Owkin connector powers Pathology Explorer, an Owkin AI agent that transforms H&E pathology slides into queryable insights for drug discovery and development and clinical research. This article explains how to set up and use the Owkin integration with Claude to accelerate pathology-driven research.

<!-- para:0004 -->
The Owkin integration relies upon Claude's ability to [use remote connectors](https://support.claude.com/en/articles/11724452-browsing-and-connecting-to-tools-from-the-directory).

<!-- para:0005 -->
‍

<!-- para:0006 -->
## **What this integration provides**

<!-- para:0007 -->
Owkin builds AI agents for biology to accelerate drug discovery, de-risk and accelerate clinical trials. The Owkin connector gives Claude access to Pathology Explorer, an Owkin agent that transforms H&E slides from the TCGA database into granular, queryable insights. Researchers can use it to automatically detect cell types from pathology images, spatially analyze tumor micro-environments, and validate hypotheses through cohort-level survival analysis, accelerating and de-risking drug discovery and development.

<!-- para:0008 -->
The Pathology Explorer offers a range of capabilities, allowing Claude to analyze histopathological slides. Below is an extended description of the slide-level features provided by the model.

<!-- para:0009 -->
**Count and density features**

<!-- para:0010 -->
For each cell type (lymphocytes, neutrophils, plasmocytes, fibroblasts, eosinophils, cancer cell), the model provides:

<!-- para:0011 -->
- count_{cell_type}: The total number of cells of the specified type detected in the slide.
- global_density_{cell_type}: The density of the specified cell type per unit area of the tissue.

<!-- para:0012 -->
**Morphological features of the nucleus**

<!-- para:0013 -->
For each cell type, the model provides:

<!-- para:0014 -->
- mean_area_{cell_type}: The average area of the nuclei of the specified cell type in the slides.
- mean_circularity_{cell_type}: The average circularity of the nuclei of the specified cell type in the slides.
- mean_perimeter_{cell_type}: The average perimeter of the nuclei of the specified cell type in the slides.

<!-- para:0015 -->
**Spatial organization features**

<!-- para:0016 -->
For three types of regions (tumor, tumor core and tumor core stroma), the model provides for each cell type:

<!-- para:0017 -->
- density_{cell_type}_in_{region}: The density of the specified cell type within the specified region.

<!-- para:0018 -->
For each region, the model also provides:

<!-- para:0019 -->
- area_{region}: The area of the specified region in the slide.

<!-- para:0020 -->
In addition, for a selection of biologically relevant cell-cell interactions, the model provides:

<!-- para:0021 -->
- average_co_occurrence_{cell_type}_{cell_type2}_rad_20.0um: The average co-occurrence of the two specified cell types nuclei within a radius of 20 micrometers.

<!-- para:0022 -->
The model also computes the tils_diffusivity, a metric for quantifying the tumor-infiltrating lymphocytes diffusivity for the slide.

<!-- para:0023 -->
**Available cohorts from the dataset**

<!-- para:0024 -->
The features are available on the following TCGA cohorts:

<!-- para:0025 -->
- TCGA_ACC
- TCGA_BLCA
- TCGA_BRCA
- TCGA_CESC
- TCGA_CHOL
- TCGA_COAD
- TCGA_DLBC
- TCGA_ESCA
- TCGA_HNSC
- TCGA_KICH
- TCGA_KIRC
- TCGA_KIRP
- TCGA_LIHC
- TCGA_LUAD
- TCGA_LUSC
- TCGA_MESO
- TCGA_OV
- TCGA_PAAD
- TCGA_PRAD
- TCGA_READ
- TCGA_SARC
- TCGA_STAD
- TCGA_THCA
- TCGA_THYM
- TCGA_UCEC
- TCGA_UCS

<!-- para:0026 -->
## **Who should use the Owkin integration**

<!-- para:0027 -->
Pharma researchers and healthcare providers (Research Use Only), for example:

<!-- para:0028 -->
- Translational and immuno-oncology researchers
- Novel drug discovery teams
- Drug development and biomarker discovery teams
- Digital pathology research groups
- Companion diagnostic development groups

<!-- para:0029 -->
## **Who can access the Owkin integration**

<!-- para:0030 -->
Prerequisites to access the connector are:

<!-- para:0031 -->
- An account with access to the K Pro platform ([product page](https://www.owkin.com/k-os/k-pro), [signup page](https://k.owkin.com/auth/signin?utm_source=k-nav-page&utm_medium=owkin-website&utm_campaign=k-nav-acquisition&next=%2Fchat))
- Access to Claude.ai or Claude Desktop

<!-- para:0032 -->
More details on accessing the integration can be found in [Owkin’s MCP Server Documentation](https://docs.owkin.com/mcp-tools-documentation/introduction).

<!-- para:0033 -->
## **Setting up the Owkin integration**

<!-- para:0034 -->
**For Organization Owners (Team and Enterprise)**

<!-- para:0035 -->
1. Navigate to Admin settings > Connectors
2. Click "Browse connectors"
3. Click “**Owkin**”
4. Click “Add to your team”

<!-- para:0036 -->
**For Individual Claude Users**

<!-- para:0037 -->
1. Navigate to Settings > Connectors
2. Find “**Owkin**”
3. Click “Connect”
4. Follow the instructions to enter your Owkin credentials to authenticate

<!-- para:0038 -->
Learn about [finding and connecting tools](https://support.claude.com/en/articles/11724452-browsing-and-connecting-to-tools-from-the-directory) in Claude.

<!-- para:0039 -->
**For Claude Code Users**

<!-- para:0040 -->
1. Command: `/plugin marketplace add anthropics/life-sciences`
2. Command: `/plugin install owkin@life-sciences`
3. Restart Claude Code
4. Verify that the server is connected with /mcp

<!-- para:0041 -->
Technical details of the Owkin integration can be found in [Owkin’s MCP Server Documentation](https://docs.owkin.com/mcp-tools-documentation/introduction).

<!-- para:0042 -->
## **Example use cases**

<!-- para:0043 -->
- **Refine patient stratification.** Identify patient subgroups that generalist models miss through granular profiling of 6 distinct cell types (including understudied populations like neutrophils and eosinophils). Leverage spatial organization analysis to characterize TME structures and phenotypes beyond simple counts. Example prompt: *"I'm looking for Lung Adenocarcinoma patients that might be resistant to immunotherapy. Are there cases with low immune infiltration in the TCGA cohort?"*
- **Visualize whole-slide images.** Build confidence in the model output by retrieving whole-slide images directly within the chat interface. Example prompt: *"Find the slide the most enriched in eosinophils from cohort TCGA_BRCA and plot it."*
- **Assess prognostic value of H&E based markers.**Test clinical hypotheses by performing survival analysis on your cohorts, by splitting patients based on features such as specific cell densities or spatial scores. Example prompt:*"Is the density of plasmocytes associated with overall survival in bladder carcinoma?"*
- **Extract quantitative evidence for reproducibility.** Build trust in AI-generated insights by retrieving the underlying raw data for independent verification or downstream analysis. Example prompt:*"Export the breakdown of all cell types for patient TCGA-A2-A0YI-01Z-00-DX1.1CF2EC2D-C722-467F-8832-409B823E8D8F.svs in parquet format, so I can reproduce this analysis."*
- **Understand Owkin’s Pathology Explorer capabilities and context.** Gain transparency into the model by querying its technical specifications directly. Learn about the supported cell types, the pan-cancer training dataset and more, to ensure the model is appropriate for your research question.

<!-- para:0044 -->
Example prompt:*"Can you provide an overview of Owkin’s Pathology Explorer model and its capabilities?"*
