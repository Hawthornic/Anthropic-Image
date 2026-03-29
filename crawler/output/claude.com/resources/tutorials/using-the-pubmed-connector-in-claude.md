---
source_url: https://claude.com/resources/tutorials/using-the-pubmed-connector-in-claude
title: "Using the Pub Med Connector in Claude"
section: resources
---

<!-- para:0001 -->
# Using the Pub Med Connector in Claude

<!-- para:0002 -->
- Category: Life Sciences
- Product Claude.ai
- Reading time Watch time5minmin
- Share [Copy link](https://claude.com/resources/tutorials/using-the-pubmed-connector-in-claude#)https://claude.com/resources/tutorials/using-the-pubmed-connector-in-claude

<!-- para:0003 -->
The Pub Med integration provides access to millions of biomedical research articles and clinical studies, allowing Claude to access abstracts and full papers to clarify experimental approaches, identify key findings, determine novelty and applicability, and surface specific papers for deeper exploration. This article explains how to set up and use the Pub Med integration with Claude to accelerate your research workflows.

<!-- para:0004 -->
The Pub Med integration relies upon Claude's ability to [use remote connectors](https://support.claude.com/en/articles/11724452-browsing-and-connecting-to-tools-from-the-directory).

<!-- para:0005 -->
## What this integration provides

<!-- para:0006 -->
The Pub Med integration connects Claude directly to the Pub Med database maintained by the U.S. National Library of Medicine. With over 36 million citations for biomedical literature, Pub Med is the premier resource for medical research, scientific studies, and health information.

<!-- para:0007 -->
This integration allows you to:

<!-- para:0008 -->
- Search for research articles using keywords, authors, journals, or advanced query syntax
- Get complete article metadata including abstracts, authors, publication dates, citations, and links to the full article
- Access full-text articles from Pub Med Central (PMC) when available
- Find related articles across NCBI databases
- Match citations to Pub Med IDs for verification and referencing
- Convert between ID formats (PMID, PMC ID, DOI)

<!-- para:0009 -->
## Setting up the Pub Med integration

<!-- para:0010 -->
**For Organization Owners (Team and Enterprise)**

<!-- para:0011 -->
1. Navigate to Admin settings > Connectors
2. Click "Browse connectors"
3. Click "**Pub Med**"
4. Click "Add to your team"

<!-- para:0012 -->
**For Individual Claude Users**

<!-- para:0013 -->
1. Navigate to Settings > Connectors
2. Find "Pub Med"
3. Click "Connect"

<!-- para:0014 -->
Learn about [finding and connecting tools](https://support.claude.com/en/articles/11724452-browsing-and-connecting-to-tools-from-the-directory) in Claude.

<!-- para:0015 -->
**For Claude Code Users**

<!-- para:0016 -->
1. Command: `/plugin marketplace add anthropics/life-sciences`
2. Command: `/plugin install pubmed@life-sciences`
3. Restart Claude Code
4. Verify that the server is connected with `/mcp`

<!-- para:0017 -->
## Using the Pub Med MCP with the Messages API

<!-- para:0018 -->
Developers can connect to the Pub Med integration directly through Claude's Messages API using the MCP connector. This allows you to build applications that leverage Pub Med search capabilities programmatically.

<!-- para:0019 -->
### Requirements

<!-- para:0020 -->
**An Anthropic API key**

<!-- para:0021 -->
The beta header: `anthropic-beta: mcp-client-2025-11-20`

<!-- para:0022 -->
### Setup

<!-- para:0023 -->
> 1. Add the Pub Med MCP server to your API request's `mcp_servers` array 2. Reference the server in your `tools` array using an `mcp_toolset` entry 3. Include the required beta header

<!-- para:0024 -->
### Example Request

<!-- para:0025 -->
`import anthropic client = anthropic.Anthropic() response = client.beta.messages.create( model="claude-sonnet-4-5", max_tokens=1000, messages=[{"role": "user", "content": "Find recent papers on CRISPR gene editing in cancer treatment"}], mcp_servers=[{"type": "url", "url": "https://pubmed.mcp.claude.com/mcp", "name": "pubmed"}], tools=[{"type": "mcp_toolset", "mcp_server_name": "pubmed"}], betas=["mcp-client-2025-11-20"] )`

<!-- para:0026 -->
## Common use cases

<!-- para:0027 -->
**Search for Research Articles**

<!-- para:0028 -->
Ask Claude to find articles on biomedical or scientific topics of interest. Example prompts:

<!-- para:0029 -->
- `"Find recent studies about immunotherapy for melanoma"`
- `"Show me research on CRISPR gene editing from the last month"`
- `"Find literature related to a proposal or gene that I am working on"`

<!-- para:0030 -->
**Get Article Details and Metadata**

<!-- para:0031 -->
Retrieve comprehensive information about specific articles. Example prompts:

<!-- para:0032 -->
- `"What are the most cited papers on this topic?"`
- `"Find the most recent papers on this topic and summarize new contributions to the field?"`
- `"Who were the authors for that study?"`
- `"When was that paper published?"`

<!-- para:0033 -->
**Access Full-Text Articles**

<!-- para:0034 -->
For articles available in Pub Med Central, retrieve the complete text of the articles to help with your research. Example prompts:

<!-- para:0035 -->
- `"Compare the methods of these two papers"`
- `"What were the shared conclusions across these papers, and where did they differ?"`
- `"Read these papers and help me identify the most important conclusions for my hypothesis"`

<!-- para:0036 -->
**Note: ** Only articles in Pub Med Central (PMC) have full text available. Pub Med might only have access to abstracts of other articles.**

<!-- para:0037 -->
**Find Related Articles**

<!-- para:0038 -->
Discover similar research across NCBI databases. Example prompts:

<!-- para:0039 -->
- `"Find similar studies to this one"`
- `"Compare the findings of this study to others in the field"`

<!-- para:0040 -->
**Match Citations to Pub Med IDs**

<!-- para:0041 -->
Verify citations and find Pub Med IDs from journal references. Example prompts:

<!-- para:0042 -->
- `"Look up this citation: Smith J, Nature 2020, vol 52, page 811"`
- `"Find the Pub Med entry for this reference from my bibliography"`
- `"I have a citation from a paper, can you find it in Pub Med?"`
- `"I would like to have a discussion about the paper associated with this PMID"`

<!-- para:0043 -->
## Frequently asked questions

<!-- para:0044 -->
**Is the Pub Med integration free to use?**

<!-- para:0045 -->
Yes! The integration is free for all Claude users. Pub Med is a free public resource provided by the U.S. National Library of Medicine.

<!-- para:0046 -->
**Can I access full-text articles for any paper?**

<!-- para:0047 -->
Pub Med only makes the full text of articles available if they are in Pub Med Central (PMC). Pub Med contains over 36 million citations with abstracts, but PMC contains approximately 8 million full-text articles. Where the full text of an article is not available, Claude can provide relevant metadata (title, authors, abstract) if available, and can also supply a link to the full article for your review.

<!-- para:0048 -->
**How current is the data?**

<!-- para:0049 -->
Pub Med is updated daily with new research. The integration provides real-time access to the latest available data from the NCBI databases.

<!-- para:0050 -->
**Does this work with other NCBI databases?**

<!-- para:0051 -->
The integration primarily accesses Pub Med and Pub Med Central. However, you can discover related data from other NCBI databases (like Gene, Protein, and Nucleotide databases) by asking Claude to find connections. For example:

<!-- para:0052 -->
- `"Find genes associated with this article"`
- `"Show me protein sequences referenced in this paper"`
- `"Are there any nucleotide sequences linked to this study?"`

<!-- para:0053 -->
**Are there any rate limits I should know about?**

<!-- para:0054 -->
Yes, the server has rate limits to comply with NCBI guidelines. If you receive a rate limit message, wait briefly and try again.

<!-- para:0055 -->
**Where does the data come from?**

<!-- para:0056 -->
All data comes from official NCBI sources, but may not reflect the most current/accurate data available from NLM: Pub Med (the National Library of Medicine's MEDLINE database), Pub Med Central (free full-text archive of biomedical literature), and the NCBI E-utilities API (official programmatic access to NCBI databases).

<!-- para:0057 -->
## Privacy and Data Usage

<!-- para:0058 -->
- The Pub Med integration only accesses publicly available research articles
- No personal health information or patient data is accessible through the integration
- Your search queries are used only to retrieve relevant articles
- All data comes from official NCBI sources

<!-- para:0059 -->
## Additional Resources

<!-- para:0060 -->
- Pub Med Advanced Search Builder: [https://pubmed.ncbi.nlm.nih.gov/advanced/](https://pubmed.ncbi.nlm.nih.gov/advanced/)
- MeSH Database: [https://www.ncbi.nlm.nih.gov/mesh](https://www.ncbi.nlm.nih.gov/mesh)
- NCBI E-utilities Documentation: [https://www.ncbi.nlm.nih.gov/books/NBK25501/](https://www.ncbi.nlm.nih.gov/books/NBK25501/)

<!-- para:0061 -->
## Need More Help?

<!-- para:0062 -->
If you're experiencing issues with the Pub Med integration or have questions not covered here, please [contact Claude support](https://support.claude.com/en/articles/9015913-how-to-get-support) or visit our help center for additional troubleshooting guides.
