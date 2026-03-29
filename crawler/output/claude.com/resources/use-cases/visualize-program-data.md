---
source_url: https://claude.com/resources/use-cases/visualize-program-data
title: "Visualize program data"
section: resources
---

<!-- para:0001 -->
# Visualize program data

<!-- para:0002 -->
- Author Giving Tuesday
- Category: Nonprofits
- Model Sonnet 4.5
- Features Extended Thinking
- Share [Copy link](https://claude.com/resources/use-cases/visualize-program-data#)https://claude.com/resources/use-case/visualize-program-data

<!-- para:0003 -->
## Describe the task

<!-- para:0004 -->
Bring your data to life. Claude's ability to analyze patterns in your program data, combined with professional file creation tools, lets you transform raw statistics into visual stories that move stakeholders to action. Instead of presenting numbers in static spreadsheets, you can generate sophisticated dashboards, trend analyses, and impact visualizations that communicate program satisfaction and organizational performance at a glance.

<!-- para:0005 -->
The uploaded CSV contains quarterly metrics for six programs: Youth Nutrition Workshop, Adult Wellness Seminar, Senior Health Education, Community CPR Training, Mental Health First Aid, and Diabetes Prevention Program.

<!-- para:0006 -->
**The data includes: **participants enrolled and completed, completion rates, satisfaction scores (1-5 scale), Net Promoter Scores, pre/post-test averages, knowledge gains, repeat participants, referrals, volunteer hours, and cost per participant.**

<!-- para:0007 -->
I need to create a **comprehensive visualization suite** for our board meeting next week. Create:

<!-- para:0008 -->
1. An Excel dashboard with multiple analysis sheets showing program satisfaction trends, learning outcomes, and quarterly comparisons. Use sophisticated formatting with professional color schemes, frozen headers, and clear data hierarchies. Include summary metrics and trend indicators.
2. A Power Point presentation (8-10 slides) that tells our impact story visually. Show satisfaction rankings, participation trends, knowledge gains by program, and key insights. Use premium design with charts that are immediately readable.

<!-- para:0009 -->
The board cares most about program satisfaction, completion rates, and demonstrable learning outcomes. They want to see which programs perform best and where we're improving quarter over quarter. Make the visualizations clear enough for quick comprehension but detailed enough to support strategic decisions.

<!-- para:0010 -->
Design these with consulting-firm quality and use colors that feel professional but warm (we're a health nonprofit, not a corporate consultancy).

<!-- para:0011 -->
## Give Claude context

<!-- para:0012 -->
Connect your data sources and enable key features. Provide your program data so Claude can identify patterns, calculate key metrics, and create visualizations that highlight your most important outcomes. Claude will identify missing values, inconsistent formats, and outliers, then suggest fixes before visualization.

<!-- para:0013 -->
Upload your program data as a XLSX or CSV file with columns for metrics you track. Include time periods (quarters, months, years), program names, and the specific measurements that matter to your stakeholders. The more complete your data, the richer Claude's analysis and visualizations.

<!-- para:0014 -->
## Required context

<!-- para:0015 -->
In addition to the raw data files containing the information you are looking to analyze and discuss, enable the [Google Drive integration](https://support.claude.com/en/articles/10166901-using-the-google-drive-integrationhttps://support.claude.com/en/articles/10166901-using-the-google-drive-integrationhttps://support.claude.com/en/articles/10166901-using-the-google-drive-integrationhttps://support.claude.com/en/articles/10166901-using-the-google-drive-integration) to provide Claude with more information. ‍ Click the (+) button in the chat bar to browse files that contain additional information you may want to include:

<!-- para:0016 -->
- Context about your audience Board members? Funders? Staff? This shapes visualization complexity and emphasis
- Your key questions: What decisions will these visualizations inform? What patterns do you want to surface?

<!-- para:0017 -->
Enable [Extended Thinking](https://www.anthropic.com/news/visible-extended-thinking) to improves how Claude analyzes patterns across multiple programs and time periods, resulting in more sophisticated dashboard designs

<!-- para:0018 -->
Make sure code execution and file creation is enabled in [settings](https://claude.ai/settings/capabilities). This is essential for creating working Excel dashboards with formulas, charts, conditional formatting, and interactive elements.

<!-- para:0019 -->
## Optional context

<!-- para:0020 -->
Think about what supplementary context would help Claude understand your organization's story: previous annual reports showing historical performance, grant proposals with promised outcomes you're now measuring, or board presentation slides demonstrating your current visualization style. These reference materials help Claude match your organization's voice and adapt visualizations to your existing reporting rhythms.

<!-- para:0021 -->
Recommended tools and features:

<!-- para:0022 -->
- Google Drive Connector (optional): Access master files, templates, and historical reports without manual uploads through the drive document upload
- Gmail Connector (optional): Pull campaign metrics from automated reporting emails● Slack Connector (optional): Retrieve team feedback and internal program assessments

<!-- para:0023 -->
## What Claude creates

<!-- para:0024 -->
Claude analyzes your program data to identify trends, calculate performance metrics, and create a comprehensive visualization suite tailored to your stakeholder needs.

<!-- para:0025 -->
Here's what I've created for your board presentation:

<!-- para:0026 -->
1.**Excel Dashboard: **Wellness_Reach_Program_Visualization_Suite.xlsx

<!-- para:0027 -->
- Executive Dashboard with annual key metrics and top performers
- Program Data sheet with all source data, frozen headers, and filters
- Satisfaction Analysis showing trends by program and quarter
- Learning Outcomes with pre/post test comparisons and effectiveness scores
- Quarterly Comparison with growth indicators and trend analysis

<!-- para:0028 -->
2. **Power Point Presentation: **Wellness_Reach_Impact_Presentation.pptx

<!-- para:0029 -->
- Title slide and 2024 overview with key metrics
- Program satisfaction rankings (horizontal bar chart)
- Quarterly participation trends (line chart)
- Knowledge gains by program (clustered column chart)
- Top performers showcase with detailed metrics
- Key insights and recommendations slide

<!-- para:0030 -->
Key findings: Your programs achieved a 94% completion rate and 4.7/5.0 satisfaction score across 2,600+ participants. Senior Health Education and Diabetes Prevention Program lead in satisfaction (4.9/5.0). Community CPR Training shows the strongest growth trajectory with 24% enrollment increase from Q1 to Q3. Knowledge gains average 25+ points across all programs, demonstrating measurable learning impact.

<!-- para:0031 -->
## Follow up prompts

<!-- para:0032 -->
### Add demographic breakdowns

<!-- para:0033 -->
Understand which communities you're serving most effectively.

<!-- para:0034 -->
Create an additional analysis sheet showing how satisfaction and completion rates vary by participant age group and zip code. This will help us understand which communities we're serving most effectively.

<!-- para:0035 -->
### Focus on specific programs

<!-- para:0036 -->
Generate a deep-dive analysis for a specific program.

<!-- para:0037 -->
Generate a deep-dive Power Point specifically for our Mental Health First Aid program. Show quarterly trends, participant testimonial themes, and compare our results to national certification standards.

<!-- para:0038 -->
### Leverage Research to Understand Benchmarks

<!-- para:0039 -->
Use Research mode to find nonprofit sector benchmarks for comparison.

<!-- para:0040 -->
Use Research mode to find nonprofit sector benchmarks for our key metrics. I need comparison points for: donor retention rates for organizations in our budget range ($500K-$1M annual), average gift sizes for similar mission areas, and program satisfaction scores for workforce development nonprofits. Then add these benchmarks as reference lines on our existing charts.

<!-- para:0041 -->
## Tricks, tips, and troubleshooting

<!-- para:0042 -->
### Open the actual files to see full design quality

<!-- para:0043 -->
File previews in chat show basic structure but miss the details that make these outputs impressive. The Excel dashboard contains working formulas, conditional formatting with color scales, frozen header rows for easy navigation, and carefully selected typography that doesn't appear in previews. Download and open both files to experience the full professional quality and continue editing with complete fidelity.

<!-- para:0044 -->
### Treat your first version as a strong foundation, then refine iteratively

<!-- para:0045 -->
Claude's initial outputs establish excellent structure and professional design, but you'll spot opportunities for enhancement once you work with the real files. Request specific improvements: "Tighten the spacing on the trend analysis tab," "Add a chart showing donor acquisition cost over time," or "Include margin notes explaining what each metric means." Each round of targeted feedback produces increasingly polished results.

<!-- para:0046 -->
### Push beyond defaults with specific design direction

<!-- para:0047 -->
Claude defaults to professional but conservative aesthetics. When visual impact matters, request elevated design: "Choose a sophisticated color palette with unexpected combinations that still feel trustworthy," "Use premium typography with strong hierarchy—this should look expensive," or "Design like you're preparing this for a major foundation's investment committee." Including phrases like "consulting-grade quality" or "portfolio-worthy execution" in your prompts activates higher design standards.

<!-- para:0048 -->
### Consider which data stories matter most to different stakeholders

<!-- para:0049 -->
Board members want financial health and risk indicators. Major donors seek impact narratives and return on investment. Grant officers need evaluation data and sustainability metrics. Staff and volunteers respond to program performance and participant feedback. Before finalizing your visualizations, identify your primary audience and emphasize the metrics that resonate with their priorities.

<!-- para:0050 -->
### Build incremental visualization capacity rather than attempting everything at once

<!-- para:0051 -->
Start with a single dashboard covering your most important program or campaign. Get comfortable with regular updates. Let it become part of your quarterly routine. Once that feels effortless, expand to additional programs, more sophisticated analysis, or audience-specific reports. Organizations that try to visualize everything simultaneously often abandon the effort when it becomes overwhelming.

<!-- para:0052 -->
## Ready to try for yourself?
