---
source_url: https://claude.com/resources/use-cases/verify-statistics-from-raw-data
title: "Verify statistics from raw data"
section: resources
---

<!-- para:0001 -->
# Verify statistics from raw data

<!-- para:0002 -->
- Author Anthropic
- Category: Research
- Model Sonnet 4.5
- Features Extended Thinking
- Share [Copy link](https://claude.com/resources/use-cases/verify-statistics-from-raw-data#)https://claude.com/resources/use-case/verify-statistics-from-raw-data

<!-- para:0003 -->
## Describe the task

<!-- para:0004 -->
Claude's ability to parse manuscripts while simultaneously running statistical analyses on raw data helps you develop a deeper understanding of how to assess research methods and build critical reading skills you'll use throughout your career.

<!-- para:0005 -->
Ask Claude to examine a paper by extracting every statistical claim and rerunning each analysis on the provided data files. This hands-on verification teaches you what to watch for and helps you understand whether the study's conclusions are supported by its data.

<!-- para:0006 -->
I'm reading this paper that's central to my literature review, and I want to understand it more deeply before citing it extensively. I've got the published manuscript and their supplementary data files.

<!-- para:0007 -->
Can you help me verify their statistical claims? Go through the paper systematically and pull out every p-value, mean, standard error, sample size, and test result they report. Then run each analysis yourself using their actual data.

<!-- para:0008 -->
For each statistical claim, show me three things: what the paper states, what you calculated from their data, and whether these match. Flag any problems you notice - things like using wrong tests for the data type, sample sizes that don't add up, or p-values that seem mathematically questionable.

<!-- para:0009 -->
Then build me a detailed Excel workbook where I can see your complete verification. Create separate sheets for each analysis showing your calculations step by step, plus a summary sheet highlighting any issues I should understand before relying on this work.

<!-- para:0010 -->
Make the spreadsheet well-designed and easy to navigate - professional formatting, frozen headers, filtered columns, and clear notes explaining what you found.

<!-- para:0011 -->
## Give Claude context

<!-- para:0012 -->
Provide the published manuscript and its underlying raw data so Claude can verify every statistical claim and help you understand how thoroughly the analysis supports the conclusions.

<!-- para:0013 -->
## Required context

<!-- para:0014 -->
Click the (+) button in the chat bar to browse through your files or, alternatively, drag and drop the manuscript and any additional data files you want to analyze into the chat box area.

<!-- para:0015 -->
## Optional context

<!-- para:0016 -->
For more thorough statistical verification and high quality outputs, enable [Extended Thinking](https://support.claude.com/en/articles/10574485-using-extended-thinking)**.**

<!-- para:0017 -->
‍

<!-- para:0018 -->
## What Claude creates

<!-- para:0019 -->
Claude creates a comprehensive audit workbook documenting every statistical check, showing you exactly what to watch for and building your ability to critically evaluate research methods.

<!-- para:0020 -->
**Statistical Reproducibility Check Complete**

<!-- para:0021 -->
I've verified the statistical claims in "Effects of Chronic Sleep Deprivation on Spatial Memory and Anxiety-like Behavior in C57BL/6 Mice" against the experimental data. Here's what I found:

<!-- para:0022 -->
**Verification Summary: **

<!-- para:0023 -->
- 31 statistical claims checked
- ✓ 22 verified correctly
- ⚠ 3 minor discrepancies
- ✗ 6 require attention

<!-- para:0024 -->
**Critical Issues to Understand: **

<!-- para:0025 -->
**1. Sample Size Discrepancy (throughout manuscript)**

<!-- para:0026 -->
- Manuscript states: n=12 per group
- Data shows: n=11 for control group
- Implication: This affects the statistical power and validity of all control group comparisons. The paper should have explained any subject exclusions.

<!-- para:0027 -->
**2. Unit Conversion Error (Open Field - Total Distance)**

<!-- para:0028 -->
- Manuscript reports: 2456 ± 234 cm (control), 1834 ± 187 cm (SD)
- Data shows: 24.43 ± 1.8 meters (control), 18.38 ± 1.1 meters (SD)
- Issue: Values off by factor of 100 - data stored in meters but reported as centimeters
- Why this matters: This type of error suggests inadequate data checking, which raises questions about other results

<!-- para:0029 -->
**3. Inappropriate Statistical Test (Corticosterone)**

<!-- para:0030 -->
- Issue: Used unpaired t-test for before/after measurements from same mice
- Should use: Paired t-test accounting for baseline values
- Manuscript p-value: 0.003
- Correct paired test: p<0.001
- Implication: The effect is actually stronger than reported, but the methodological choice shows limited statistical understanding

<!-- para:0031 -->
**4. P-value Precision Errors**

<!-- para:0032 -->
- Target quadrant time: Reports p=0.004, actual p=0.0001
- Day 5 latency: Reports p=0.02, actual p=0.026
- Why this matters: Exact p-values matter for meta-analyses and understanding effect strength

<!-- para:0033 -->
**5. Methods Description Inconsistency**

<!-- para:0034 -->
- Methods state "unpaired t-tests for between-group comparisons"
- Problem: Corticosterone data are paired samples (baseline and final from same mice)
- This suggests either unclear writing or misunderstanding of their own analysis

<!-- para:0035 -->
**View your statistical audit workbook**

<!-- para:0036 -->
## Follow up prompts

<!-- para:0037 -->
### Go beyond numbers and check the figures

<!-- para:0038 -->
Verify that visual representations match the underlying data. Claude compares graphs, charts, and tables to raw data values to catch misrepresentations or errors.

<!-- para:0039 -->
Check that all bar heights, error bars, and data points in Figure 2 match the actual data values. Show me any discrepancies.

<!-- para:0040 -->
### Learn what to watch for next time

<!-- para:0041 -->
Claude can explain which red flags are worth investigating when you're reading papers without access to raw data - like methodological inconsistencies, suspiciously round numbers, or statistical choices that don't match study designs.

<!-- para:0042 -->
Based on what we found here, teach me what warning signs I should look for when reading other papers in my field. What patterns suggest I should be skeptical, even when I can't verify the raw data?

<!-- para:0043 -->
### Draft reviewer comments

<!-- para:0044 -->
Frame statistical or methodological issues constructively so authors understand what needs fixing without getting defensive. Claude can help balance specificity with encouragement.

<!-- para:0045 -->
Turn these statistical problems into helpful reviewer comments that are clear about what needs correcting but encouraging about how to fix it.

<!-- para:0046 -->
## Tricks, tips, and troubleshooting

<!-- para:0047 -->
### Start where you already have domain expertise

<!-- para:0048 -->
You'll quickly grasp the best practices for working with Claude by verifying papers in your field, as your expertise will help you discern what is plausible. When Claude flags an issue, your domain knowledge helps you judge whether it's a real error or a misunderstanding of field-specific practice. Conversely, when Claude says everything checks out, you can assess whether it tested the right assumptions.

<!-- para:0049 -->
### Open the actual Excel file

<!-- para:0050 -->
The preview in chat shows structure, but the real workbook contains working formulas, conditional formatting that highlights issues, dropdown filters for exploring results, and detailed calculation notes. Download and open the file to see how verification works and to learn techniques you can apply when checking other papers.

<!-- para:0051 -->
## Ready to try for yourself?
