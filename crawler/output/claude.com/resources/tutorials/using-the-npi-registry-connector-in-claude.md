---
source_url: https://claude.com/resources/tutorials/using-the-npi-registry-connector-in-claude
title: "Using the NPI Registry Connector in Claude"
section: resources
---

<!-- para:0001 -->
# Using the NPI Registry Connector in Claude

<!-- para:0002 -->
- Category: Healthcare
- Product
- Reading time Watch time5minmin
- Share [Copy link](https://claude.com/resources/tutorials/using-the-npi-registry-connector-in-claude#)https://claude.com/resources/tutorials/using-the-npi-registry-connector-in-claude

<!-- para:0003 -->
The NPI Registry connector gives Claude access to the CMS National Plan and Provider Enumeration System (NPPES) to validate, look up, and search healthcare providers in the United States by their National Provider Identifier (NPI). This article explains how to set up and use the NPI Registry integration with Claude to search and verify US healthcare provider credentials.

<!-- para:0004 -->
The NPI Registry integration relies upon Claude's ability to [use remote connectors](https://support.claude.com/en/articles/11724452-browsing-and-connecting-to-tools-from-the-directory).

<!-- para:0005 -->
## **What this integration provides**

<!-- para:0006 -->
The NPI Registry connector provides programmatic access to the Centers for Medicare & Medicaid Services (CMS) NPPES NPI Registry API v2.1. The National Provider Identifier (NPI) is a unique 10-digit identification number required under HIPAA for covered healthcare providers in the United States. This connector enables users to validate NPI numbers, retrieve comprehensive provider information, and search the registry containing millions of individual providers (NPI-1) and organizations (NPI-2) including physicians, nurses, therapists, hospitals, clinics, and pharmacies.

<!-- para:0007 -->
The connector provides three core tools that access different NPPES endpoints:

<!-- para:0008 -->
- **npi_validate**performs instant local validation of NPI format and Luhn check digit without making an API call
- **npi_lookup**retrieves complete provider records by NPI number including credentials (MD, DO, RN, PA-C, etc.), primary specialty/taxonomy codes, state license numbers, practice addresses, phone numbers, and enumeration status
- **npi_search** enables discovery of providers through flexible queries combining first/last name, organization name, location (city/state/ZIP), specialty/taxonomy descriptions, and supports wildcards and name alias expansion. The provider-side data accessed includes self-reported information from NPPES enrollment records such as legal business names, practice locations, NUCC healthcare provider taxonomy classifications, state licensing information, mailing addresses, and optional health information exchange endpoints.

<!-- para:0009 -->
## **Who should use the NPI Registry integration**

<!-- para:0010 -->
- **Healthcare Administrators: **Verify provider credentials, validate billing information, and maintain accurate provider directories for insurance networks and health systems
- **Clinical Research Coordinators: **Validate US-based clinical trial investigators' credentials and verify their medical specialties and practice locations
- **Healthcare IT Developers: **Build provider lookup features, validate NPI numbers in EHR systems, and integrate provider verification into healthcare applications
- **Medical Affairs Teams: **Identify and locate key opinion leaders, build physician networks, and conduct competitive intelligence on provider affiliations
- **Compliance Officers: **Verify provider licensing status, validate NPIs for regulatory submissions, and audit provider enrollment data
- **Healthcare Recruiters: **Find providers by specialty and location, identify practice affiliations, and verify credentials during candidate screening
- **Health Services Researchers: **Analyze provider distribution patterns, study specialty availability by geographic region, and access provider taxonomy data

<!-- para:0011 -->
## **Setting up the NPI Registry integration**

<!-- para:0012 -->
**For Organization Owners (Team and Enterprise)**

<!-- para:0013 -->
1. Navigate to Admin settings > Connectors
2. Click "Browse connectors"
3. Click “**NPI Registry**”
4. Click “Add to your team”
5. ‍

<!-- para:0014 -->
**For Individual Claude Users**

<!-- para:0015 -->
1. Navigate to Settings > Connectors
2. Find “**NPI Registry**”
3. Click “Connect”

<!-- para:0016 -->
Learn about [finding and connecting tools](https://support.claude.com/en/articles/11724452-browsing-and-connecting-to-tools-from-the-directory) in Claude.

<!-- para:0017 -->
**For Claude Code Users**

<!-- para:0018 -->
1. Command: /plugin marketplace add anthropics/healthcare
2. Command: /plugin install npi-registry@healthcare
3. Restart Claude Code
4. Verify that the server is connected with /mcp

<!-- para:0019 -->
Technical details of the NPI Registry integration can be found in the [NPI Registry MCP Server Documentation](https://docs.mcp.deepsense.ai/guides/npi_registry.html#).

<!-- para:0020 -->
## **Example use cases**

<!-- para:0021 -->
**Provider Credential Verification**

<!-- para:0022 -->
- Validate the credentials, specialty, and practice location of a healthcare provider before onboarding, contracting, or referral.
- Sample Prompts: *"Validate NPI 1043248818 and show me their credentials and specialty"**"Look up the provider with NPI 1679576722 and tell me if they're actively licensed"**"Check if NPI 1234567893 is valid and what type of provider it belongs to"*

<!-- para:0023 -->
**Provider Discovery by Specialty and Location**

<!-- para:0024 -->
- Find healthcare providers in specific geographic areas by their medical specialty to build networks, identify referral partners, or analyze provider availability.
- Sample Prompts: *"Find all cardiologists practicing in Boston, Massachusetts"**"Search for nurse practitioners in ZIP code 90210"**"Show me orthopedic surgeons in California with their practice addresses"**"Find all general acute care hospitals in New York"*

<!-- para:0025 -->
**Clinical Trial Investigator Verification**

<!-- para:0026 -->
- Verify that clinical trial investigators are legitimate US healthcare providers with appropriate credentials and active status.
- Sample Prompts: *"I have a clinical trial investigator named Dr. Sarah Johnson in Minnesota. Can you find her NPI and verify her credentials?"**"Verify that the principal investigator John Smith, MD is a licensed oncologist in Texas"**"Find the NPI and specialty for Dr. Robert Chen who lists Mayo Clinic as his affiliation"*
