---
source_url: https://platform.claude.com/docs/en/about-claude/models/choosing-a-model
title: "Choosing the right model"
section: docs
---

<!-- para:0001 -->
# Choosing the right model

<!-- para:0002 -->
## Establish key criteria

<!-- para:0003 -->
When choosing a Claude model, consider first evaluating these factors:

<!-- para:0004 -->
- **Capabilities:** What specific features or capabilities will you need the model to have in order to meet your needs?
- **Speed:** How quickly does the model need to respond in your application? For Claude Opus 4.6, [fast mode](https://platform.claude.com/docs/en/build-with-claude/fast-mode) (beta: research preview) can provide up to 2.5x higher output speed at premium pricing.
- **Cost:** What's your budget for both development and production usage?

<!-- para:0005 -->
Knowing these answers in advance will make narrowing down and deciding which model to use much easier.

---

<!-- para:0006 -->
## Choose the best model to start with

<!-- para:0007 -->
There are two general approaches you can use to start testing which Claude model best works for your needs.

<!-- para:0008 -->
### Option 1: Start with a fast, cost-effective model

<!-- para:0009 -->
For many applications, starting with a faster, more cost-effective model like Claude Haiku 4.5 can be the optimal approach:

<!-- para:0010 -->
1. Begin implementation with Claude Haiku 4.5
2. Test your use case thoroughly
3. Evaluate if performance meets your requirements
4. Upgrade only if necessary for specific capability gaps

<!-- para:0011 -->
This approach allows for quick iteration, lower development costs, and is often sufficient for many common applications. This approach is best for:

<!-- para:0012 -->
- Initial prototyping and development
- Applications with tight latency requirements
- Cost-sensitive implementations
- High-volume, straightforward tasks

<!-- para:0013 -->
### Option 2: Start with the most capable model

<!-- para:0014 -->
For complex tasks where intelligence and advanced capabilities are paramount, you may want to start with the most capable model and then consider optimizing to more efficient models down the line:

<!-- para:0015 -->
1. Implement with Claude Opus 4.6
2. Optimize your prompts for these models
3. Evaluate if performance meets your requirements
4. Consider increasing efficiency by downgrading intelligence over time with greater workflow optimization

<!-- para:0016 -->
This approach is best for:

<!-- para:0017 -->
- Complex reasoning tasks
- Scientific or mathematical applications
- Tasks requiring nuanced understanding
- Applications where accuracy outweighs cost considerations
- Advanced coding

<!-- para:0018 -->
## Model selection matrix

---

<!-- para:0019 -->
## Decide whether to upgrade or change models

<!-- para:0020 -->
To determine if you need to upgrade or change models, you should:

<!-- para:0021 -->
1. [Create benchmark tests](https://platform.claude.com/docs/en/test-and-evaluate/develop-tests) specific to your use case - having a good evaluation set is the most important step in the process
2. Test with your actual prompts and data
3. Compare performance across models for: Accuracy of responses Response quality Handling of edge cases
4. Weigh performance and cost tradeoffs

<!-- para:0022 -->
## Next steps

<!-- para:0023 -->
See detailed specifications and pricing for the latest Claude models

<!-- para:0024 -->
Explore the latest improvements in Claude 4.6 models

<!-- para:0025 -->
Get started with your first API call

<!-- para:0026 -->
Was this page helpful?
