---
source_url: https://support.claude.com/en/articles/13703965-claude-enterprise-analytics-api-reference-guide
title: "Claude Enterprise Analytics API reference guide"
section: articles
date: 2026-03-18
---

<!-- para:0001 -->
The Claude Enterprise Analytics API gives your organization programmatic access to engagement data for Claude and Claude Code usage within your Enterprise organization. Whether you're building internal dashboards for user activity or tracking adoption of projects, this API provides the aggregated metrics you need.

<!-- para:0002 -->
All data is aggregated **per organization, per day**. Each endpoint returns a snapshot for a single date that you specify. **Data for day (N-1) is run at 10:00:00 UTC time on day N**, and is available for querying three days after aggregation, to ensure accuracy of data.

<!-- para:0003 -->
If data is not available within the timeline above, this usually indicates a data pipeline failure that our team will need to investigate internally. We are usually aware of such problems, but please raise this to your CSM if you want a gut check, or suspect something else.

<!-- para:0004 -->
In order to mint new analytics API keys, you must be a Primary Owner within your Enterprise organization. You can do so by navigating to **[claude.ai/analytics/api-keys](http://claude.ai/analytics/api-keys)**.

<!-- para:0005 -->
Some more details that might be helpful:

<!-- para:0006 -->
All requests are sent to:

<!-- para:0007 -->
Every request requires an API key passed in the `x-api-key` header. Your API key must have the `read:analytics` scope. You can create and manage API keys from the claude.ai admin settings under the API Keys section.

<!-- para:0008 -->
**Example request headers:**

<!-- para:0009 -->
Several endpoints return paginated results. Pagination uses a cursor-based approach, where the response includes a `next_page` token you pass back in your next request to retrieve the following page of results.

<!-- para:0010 -->
Two optional parameters control pagination:

<!-- para:0011 -->
**limit** (integer): Number of records per page. Defaults to 20 for the /users endpoint and 100 for all other endpoints. The maximum is 1000.**

<!-- para:0012 -->
**page** (string): The opaque cursor token from the previous response's `next_page` field. Omit this on your first request.**

<!-- para:0013 -->
When there are no more results, `next_page` will be `null` in the response.

<!-- para:0014 -->
All endpoints return standard HTTP error codes:

<!-- para:0015 -->
We do have default rate limits in place. If that isn’t sufficient for your use case, we’d love to understand why. If necessary, we can adjust the rate limits for your organization—please reach out to your CSM.

<!-- para:0016 -->
`GET /v1/organizations/analytics/users`

<!-- para:0017 -->
Returns per-user engagement metrics for a single day. Each item in the response represents one user and includes their activity counts across Claude (chat) and Claude Code.

<!-- para:0018 -->
**Query parameters**

<!-- para:0019 -->
**Response fields (per user)**

<!-- para:0020 -->
**Example request**

<!-- para:0021 -->
`GET /v1/organizations/analytics/summaries`

<!-- para:0022 -->
Returns a high-level summary of engagement and seat utilization **per-day** for your organization for a given date range. The response is a list of days with aggregated counts within the date range. Note that the maximum difference between `ending_date` and `starting_date` must be **31 days**, and there is a three-day delay in data availability. This is useful for tracking daily active users, weekly and monthly trends, and seat allocation at a glance.

<!-- para:0023 -->
**We define “active”** if any one of the following is true:**

<!-- para:0024 -->
**Query parameters**

<!-- para:0025 -->
**Response fields**

<!-- para:0026 -->
**Example request**

<!-- para:0027 -->
`GET /v1/organizations/analytics/apps/chat/projects`

<!-- para:0028 -->
Returns usage data broken down by chat project for a given date. Projects are specific to Claude (chat), so this endpoint focuses on that surface. Each item shows the project name, how many unique users interacted with it, and the total number of conversations held in that project.

<!-- para:0029 -->
**Query parameters**

<!-- para:0030 -->
**Response fields (per project)**

<!-- para:0031 -->
**Example request**

<!-- para:0032 -->
`GET /v1/organizations/analytics/skills`

<!-- para:0033 -->
Returns skill usage data across both Claude (chat) and Claude Code within your organization for a given date. Each item represents a skill and shows how many unique users used it.

<!-- para:0034 -->
**Query parameters**

<!-- para:0035 -->
**Response fields (per skill)**

<!-- para:0036 -->
**Example request**

<!-- para:0037 -->
`GET /v1/organizations/analytics/connectors`

<!-- para:0038 -->
Returns MCP/connector usage data across both Claude (chat) and Claude Code within your organization for a given date. Each item represents a connector and shows how many unique users used it. Connector names are normalized from various sources — for example, "Atlassian MCP server," "mcp-atlassian," and "atlassian_MCP" would all appear as "atlassian."

<!-- para:0039 -->
**Query parameters**

<!-- para:0040 -->
**Response fields (per connector)**

<!-- para:0041 -->
**Example request**
