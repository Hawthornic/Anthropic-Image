---
source_url: https://claude.com/resources/tutorials/how-to-use-claude-in-excel-for-hr-headcount-planning
title: "How to use Claude in Excel for HR: Headcount planning"
section: resources
---

<!-- para:0001 -->
# How to use Claude in Excel for HR: Headcount planning

<!-- para:0002 -->
- Category: Finance
- Product
- Reading time Watch time5min6min
- Share [Copy link](https://claude.com/resources/tutorials/how-to-use-claude-in-excel-for-hr-headcount-planning#)https://claude.com/resources/tutorials/how-to-use-claude-in-excel-for-hr-headcount-planning

<!-- para:0003 -->
[Claude in Excel](https://support.claude.com/en/articles/12650343-claude-in-excel) brings Claude directly into your spreadsheet workflow. It appears as a sidebar that can read your entire workbook—every tab, every formula, every relationship between cells—and help you understand, fix, and extend what's there.

<!-- para:0004 -->
This tutorial walks through an HR headcount planning model: four tabs, formulas linking everywhere, and errors that need fixing. You'll see how to use plain language to get Claude to map a workbook you've inherited, trace and fix formula errors, run what-if scenarios, and build new calculations that reference data across sheets.

<!-- para:0005 -->
## What you can do

<!-- para:0006 -->
**Understand workbooks you didn't build**

<!-- para:0007 -->
Ask Claude to explain how tabs connect. It reads everything first, then maps the data flow—which cells feed into which sheets, where assumptions live, how totals roll up.

<!-- para:0008 -->
**Find and fix formula errors**

<!-- para:0009 -->
Claude catches broken references and traces where they cascade. Instead of hunting through tabs, you see every affected cell at once—and choose how to fix it.

<!-- para:0010 -->
**Run scenarios instantly**

<!-- para:0011 -->
Change an assumption and see the impact across departments, totals, and downstream calculations. Claude recalculates and summarizes what shifted.

<!-- para:0012 -->
**Build formulas with business logic**

<!-- para:0013 -->
Describe what you want calculated. Claude writes formulas that reference the right cells, apply conditional logic based on job levels or departments, and stay connected to your assumptions—not static values you'd have to update manually.

<!-- para:0014 -->
**Create visualizations from plain language**

<!-- para:0015 -->
Ask for a pivot table or chart. Claude builds it from your data and tells you what stands out.

<!-- para:0016 -->
## In this video

<!-- para:0017 -->
Follow along with the video, or copy these prompts to try in your own workbook.

<!-- para:0018 -->
#### 0:51 — Get oriented in an inherited model

<!-- para:0019 -->
The spreadsheet has four tabs—Assumptions, Headcount, Compensation, Summary—with formulas linking everywhere. Ask Claude to explain how it all connects before you start making changes.

<!-- para:0020 -->
> *"Walk me through this workbook—what's on each tab and how do they connect?"*

<!-- para:0021 -->
#### 1:18 — Claude maps data flow and finds errors

<!-- para:0022 -->
Claude reads all four sheets, then returns a visual diagram showing how data flows from Assumptions through to Summary. It also catches #REF! errors you didn't ask about—and maps every cell they affect across three sheets.

<!-- para:0023 -->
#### 1:57 — Investigate a broken formula

<!-- para:0024 -->
A #REF! error is cascading through the model. Claude traces it to a deleted cell reference, analyzes the pattern in nearby cells, and figures out what the value should be.

<!-- para:0025 -->
> *"There's a #REF! error in cell E15 on the Headcount tab. What's causing it and can you fix it?"*

<!-- para:0026 -->
#### 2:33 — Choose how to fix it

<!-- para:0027 -->
Claude doesn't just fix the error—it explains the root cause, shows you the options (0, 1, or a custom value), and lets you decide. You stay in control of what changes.

<!-- para:0028 -->
#### 3:18 — Run a what-if scenario

<!-- para:0029 -->
Change one assumption and see the impact everywhere. Claude updates the model, then returns a before/after comparison by department so you can see which teams are hit hardest.

<!-- para:0030 -->
> *"Update the plan to assume 15% attrition instead of 10%. Show me what changes across departments."*

<!-- para:0031 -->
#### 4:26 — Create a pivot table and chart

<!-- para:0032 -->
Describe the visualization you need. Claude builds a pivot table from your headcount data, adds a stacked bar chart, and surfaces insights—like which job level has the most people and where they're concentrated.

<!-- para:0033 -->
> *"Create a pivot table showing headcount by department and level, then add a stacked bar chart to visualize it."*

<!-- para:0034 -->
#### 5:33 — Build a calculated column with business logic

<!-- para:0035 -->
Ask for a new column and Claude writes actual formulas—not static values. Here, it pulls benefit rates from the Assumptions tab and applies different bonus percentages based on job level (10% for ICs, 15% for managers, 20% for directors).

<!-- para:0036 -->
> *"Add a column that calculates the fully-loaded cost per employee using the rates on the Assumptions tab."*

<!-- para:0037 -->
## What to notice

<!-- para:0038 -->
**Claude reads before it answers.**

<!-- para:0039 -->
When you ask about the workbook, Claude doesn't guess—it reads all four sheets first, then explains how they connect. This prevents errors from incomplete context.

<!-- para:0040 -->
**Errors surface with their full impact.**

<!-- para:0041 -->
A single broken reference can cascade across multiple sheets. Claude shows you every affected cell so you understand the scope before you fix anything.

<!-- para:0042 -->
**Claude values your input**

<!-- para:0043 -->
For deeper understanding, ask Claude to explain its reasoning before making changes. You can always request that Claude walk through its thinking, and if something doesn't look right, undo (Cmd+Z or Ctrl+Z) reverses most actions.

<!-- para:0044 -->
**Formulas stay formulas.**

<!-- para:0045 -->
When Claude builds a new calculated column, it writes actual Excel formulas that reference your Assumptions tab and apply conditional logic. If your assumptions change later, the calculations update automatically.

<!-- para:0046 -->
## Get started

<!-- para:0047 -->
- Install [Claude in Excel](https://appsource.microsoft.com/en-us/product/office/WA200009404) from the Microsoft App Source
- Open it with **Ctrl+Option+C** (Mac) or **Ctrl+Alt+C** (Windows)
- Start with "Walk me through this workbook" on any spreadsheet you've inherited

<!-- para:0048 -->
Claude in Excel is available in beta on Max, Team, and Enterprise plans.

<!-- para:0049 -->
**Learn more: **

<!-- para:0050 -->
- [Claude in Excel help article](https://support.claude.com/en/articles/12650343-claude-in-excel)
- [What is the Max plan?](https://support.claude.com/en/articles/11049741-what-is-the-max-plan)
