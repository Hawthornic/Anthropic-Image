---
source_url: https://claude.com/resources/use-cases/organize-files-in-google-drive
title: "Organize files in Google Drive"
section: resources
---

<!-- para:0001 -->
# Organize files in Google Drive

<!-- para:0002 -->
- Author Anthropic
- Category: Claude in Chrome
- Model Haiku 4.5
- Features Browser Use
- Share [Copy link](https://claude.com/resources/use-cases/organize-files-in-google-drive#)https://claude.com/resources/use-case/organize-files-in-google-drive

<!-- para:0003 -->
## Describe the task

<!-- para:0004 -->
Years of files piling up in Google Drive—downloads you never sorted, documents people shared with you, old project folders mixed with random screenshots. The task of organizing it feels endless, so it never happens. Claude in Chrome can navigate your Drive, create a folder structure, and move files where they belong while you do something else.

<!-- para:0005 -->
Tell Claude what kind of organization you want, or let it figure out a structure based on what's there. You review the results instead of doing the sorting yourself.

<!-- para:0006 -->
I need to organize my Google Drive by reviewing all files and creating a logical folder structure.

<!-- para:0007 -->
**What to do: **

<!-- para:0008 -->
- Scan through my Drive including Downloads, Shared with me, and the root level
- Create appropriately named folders based on what you find (e.g., by project, file type, or year)
- Move files into the folders you create
- Flag anything you're unsure about or think I should delete

<!-- para:0009 -->
**Before moving files: ** Show me your proposed folder structure and any files you're uncertain about. I'll review before you finalize.**

<!-- para:0010 -->
## Give Claude context

<!-- para:0011 -->
Claude works directly in your Google Drive through the browser—the same interface you'd use. It can see your files, create folders, and move things around without downloading or uploading anything.

<!-- para:0012 -->
## Required context

<!-- para:0013 -->
Log into Google Drive before starting. If you have specific folders you want to preserve or a naming convention you prefer, mention that in your prompt.

<!-- para:0014 -->
If your Drive is very large, consider asking Claude to start with one section—like just your Downloads or just files from the past year. You can expand from there.

<!-- para:0015 -->
## Optional context

<!-- para:0016 -->
## What Claude creates

<!-- para:0017 -->
Claude reports what it organized, what it moved, and what needs your decision before going further.

<!-- para:0018 -->
**Drive Organized**

<!-- para:0019 -->
847 files sorted | 12 folders created | 23 items need your review

<!-- para:0020 -->
I went through everything in your Drive and created a structure based on what I found. Here's the new layout:

<!-- para:0021 -->
**New Folder Structure**

<!-- para:0022 -->
Folder Files What's in it Work156Documents with company names, meeting notes, presentations Finance89Tax docs, receipts, bank statements, invoices Photos234Images and screenshots, organized by year Personal67Travel docs, medical records, insurance Projects145Grouped by project name where I could identify one Reference52Manuals, guides, saved articles Shared With Me73Files owned by others (can't move these, but grouped the view)Archive0Empty for now—waiting for your approval on old files

<!-- para:0023 -->
**Needs Your Review**

<!-- para:0024 -->
**Duplicates Found (8 sets)**

<!-- para:0025 -->
- Budget_2023.xlsx — 3 versions, newest is from October 2023
- Resume.pdf — 4 versions across folders
- Project_Proposal.docx — 2 identical copies

<!-- para:0026 -->
I haven't deleted anything. Say the word and I'll keep the newest version of each.

<!-- para:0027 -->
**Old Files to Consider Archiving (12 files)**

<!-- para:0028 -->
- 6 documents last opened in 2021 or earlier
- 4 spreadsheets from a project that looks finished
- 2 PDFs that appear to be outdated versions of current docs

<!-- para:0029 -->
**Couldn't Categorize (3 files)**

<!-- para:0030 -->
- Document (3).docx — Appears to be meeting notes but no clear project
- Untitled.gdoc — Blank document
- scan0042.pdf — Scanned document, can't determine content

<!-- para:0031 -->
**Everything Else**

<!-- para:0032 -->
Sorted and in place.

<!-- para:0033 -->
Want me to handle the duplicates, move the old files to Archive, or rename the unclear ones?

<!-- para:0034 -->
## Follow up prompts

<!-- para:0035 -->
### Remove the duplicates

<!-- para:0036 -->
Clean up redundant copies once you've confirmed which version to keep. Claude can delete in bulk or one at a time.

<!-- para:0037 -->
Go ahead and delete the duplicate files you found. Keep the most recent version of each.

<!-- para:0038 -->
### Archive old files

<!-- para:0039 -->
Move untouched files out of your main view without deleting them. Useful for anything you might need later but don't want cluttering your folders.

<!-- para:0040 -->
Move everything that hasn't been opened in over a year to an Archive folder. I'll look through it later but get it out of my main view.

<!-- para:0041 -->
### Rename files consistently

<!-- para:0042 -->
Replace generic names with descriptive ones based on file contents. Easier to search later.

<!-- para:0043 -->
A lot of these files have useless names like 'Document (3)' or 'Screenshot 2023-04-12'. Can you rename them based on what's actually in them?

<!-- para:0044 -->
## Tricks, tips, and troubleshooting

<!-- para:0045 -->
### Save your organization system as a shortcut

<!-- para:0046 -->
Once you've refined your folder structure preferences, save your prompt as a shortcut (type "/" and create one like /drive-organize). Include your preferred folder names and file categories so future cleanups match your system.

<!-- para:0047 -->
### Schedule monthly maintenance

<!-- para:0048 -->
Turn on the schedule toggle for the ability to schedule this workflow. Claude runs the workflow automatically and notifies you when there's something to review. This keeps a regular scan for new unsorted files and duplicates to keep your Drive organized long term.

<!-- para:0049 -->
### Claude asks before deleting anything

<!-- para:0050 -->
File deletion is a high-risk action. Even in "Act without asking" mode, Claude will pause and request approval before permanently removing files. Duplicates and old files get flagged for review—nothing disappears without your explicit confirmation.

<!-- para:0051 -->
## Ready to try for yourself?
