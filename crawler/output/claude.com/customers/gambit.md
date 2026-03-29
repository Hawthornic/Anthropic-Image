---
source_url: https://claude.com/customers/gambit
title: "Gambit Robotics builds a real-time sous-chef with Claude"
section: customers
---

<!-- para:0001 -->
# Gambit Robotics builds a real-time sous-chef with Claude

<!-- para:0002 -->
See Claude Code in action—from concept to commit in one seamless workflow.

<!-- para:0003 -->
[Gambit Robotics](https://www.gambitrobotics.ai/) uses Claude to power an AI kitchen device that guides home cooks through any recipe in real time, combining camera, thermal sensors, and voice to deliver step-by-step coaching while people cook.

<!-- para:0004 -->
## With Claude, Gambit:

<!-- para:0005 -->
- Achieves ~97%+ successful recipe parses across their pipeline
- Writes 90% of their code with Claude Code
- Built a working prototype within days of first integrating Claude

<!-- para:0006 -->
## Better food. Less time. Less stress.

<!-- para:0007 -->
**‍**Cooking is one of those daily tasks that's easy to underestimate. Recipes are hard to follow with busy hands, timing multiple dishes takes real coordination, and the consequences of getting distracted range from a burned dinner to a safety hazard like leaving a burner on.**

<!-- para:0008 -->
Nicole Maffeo and Eliot Horowitz founded Gambit Robotics in January of 2025 to tackle exactly this. Maffeo's background spans finance, computer vision, and ML infrastructure at Google AI research, and Horowitz is the founder and former CTO of MongoDB ($MDB) and the CEO of Viam. The co-founders picked the kitchen because it cuts across demographics, cultures, and income levels — making it both a good environment to train models and a problem worth solving for nearly everyone.

<!-- para:0009 -->
Long term, they believe the future of the home is specialized, distributed robotics—including robotic arms capable of end-to-end cooking. But while full [automation is the long-term vision](https://www.kickstarter.com/projects/gambitcooking/gambit-robotics-never-burn-dinner-again), they believe there is massive near-term opportunity in augmentation and assistance. "People primarily want assistance to make cooking easier, quicker, and to get better results, not end-to-end automation," said Maffeo, Co-founder of Gambit Robotics. For Gambit, success means better food in less time.

<!-- para:0010 -->
## Why Gambit chose Claude

<!-- para:0011 -->
Gambit evaluated several AI models before choosing Claude for their core product. The deciding factors were reasoning, context, and tone.

<!-- para:0012 -->
Cooking involves partial camera views, occlusions, heat changes, and users talking mid-action. Gambit needed a model that could reason through that ambiguity without hallucinating or over-correcting, while holding an entire cooking session in memory. "OCR matters, but reasoning and extended context matter more," said Maffeo. Claude uses optical character recognition to read recipe text from photos, including handwritten ones, but where it really stands apart is in what happens next. "Claude's real differentiator is its ability to reason through complex, real-world situations while maintaining long-running context and natural conversation."

<!-- para:0013 -->
Claude also follows 10–15% more prompt rules than other models Gambit tested, while keeping response times fast. That means fewer hallucinated steps, more consistent output, and less manual correction. And the tone matters too. "Claude's responses feel like a calm, competent sous-chef next to you, not a robotic checklist or a verbose explainer," said Maffeo. "That trust and clarity are critical when AI is guiding people in a physical environment."

<!-- para:0014 -->
## How Claude powers real-time cooking guidance

<!-- para:0015 -->
Gambit’s device combines a custom hardware platform with an RGB camera, a thermal camera, and a microphone and speaker. Claude processes all of this to guide users through any recipe, from any source, in real time.

<!-- para:0016 -->
Here's what happens during a typical session:

<!-- para:0017 -->
- Claude reads a recipe from a photo, a URL, or voice input, pulling out ingredients, steps, times, and temperatures
- It structures the recipe into prep steps, cooking steps, and components like protein, sauce, and sides
- It builds a live timeline of actions (add, stir, flip, reduce heat, remove), sequenced across burners
- It keeps the full session in context throughout: the recipe, prior steps, elapsed time, user preferences, and what just happened
- It watches the stove using vision and thermal data and adjusts guidance based on what's actually happening
- When something is unclear, Claude pauses or asks instead of guessing
- When users swap ingredients, change doneness preferences, or go out of order, Claude updates the plan without restarting

<!-- para:0018 -->
Users can also show prep work to the device, like chopped vegetables, and Claude evaluates whether they're ready for the next step. Over time, the system personalizes recipes to how a user actually cooks.

<!-- para:0019 -->
## How Claude Code accelerates Gambit's development

<!-- para:0020 -->
Claude Code writes 90% of Gambit's codebase. Most of their engineering work involves complex, stateful logic, and keeping context straight across workstreams is the hardest part. The team runs multiple context windows for different tickets in parallel, and Claude keeps each thread coherent while they review output with custom checks and tooling.

<!-- para:0021 -->
"Claude Code has turbo-boosted our development velocity," said Maffeo. Plan mode has been especially useful, helping re-establish context when returning to a task, cutting ramp-up time and making it easier to ship features and fix bugs.

<!-- para:0022 -->
The speed showed up early. Gambit had a working prototype within days of integrating Claude. "Claude made it possible to go from idea to working behavior remarkably fast," said Maffeo. "That speed of iteration let us test, adjust, and validate assumptions almost immediately, which is critical when building an embodied, real-time system."

<!-- para:0023 -->
## What users and testers are seeing

<!-- para:0024 -->
After six months of testing across multiple prototypes, the most consistent user feedback is that Gambit's real-time, recipe-specific guidance is what sets it apart. The system adapts naturally as people cook, whether they move faster, slower, or out of order. When personalization is combined with long-running context, it becomes a powerful engine for adaptive cooking guidance.

<!-- para:0025 -->
## What's ahead for Gambit

<!-- para:0026 -->
Gambit already goes beyond simple step-by-step instructions, handling timing, heat, and coordination in the background while engaging with the user naturally. As Claude’s vision, context windows, and speed continue to improve, that background orchestration becomes increasingly seamless — allowing Gambit to anticipate needs, adapt to changing conditions, and stay in sync with how people actually cook.

<!-- para:0027 -->
"Better vision and longer context windows let us understand not just what's happening in the moment, but how a user cooks over time," said Maffeo. "Improvements in speed make interactions feel more natural, so Gambit can stay in sync with the user while they cook."

<!-- para:0028 -->
Gambit sees hardware as the next big wave for AI. As models get cheaper and more capable, the physical devices around them matter more. "If you're building hardware that operates in the real world, you need a model that can reason under uncertainty, maintain long-running context, and communicate clearly with humans," said Maffeo. "That's where Claude stands out."

<!-- para:0029 -->
‍
