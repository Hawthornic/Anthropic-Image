# Anthropic 全站双语对照镜像站建设计划

> 参考：冯若航将 postgresql.org 整站 Fork 为中文版 pg.center 的做法
> 目标：构建 Anthropic 全站资料的**双语对照**镜像网站（英文-繁体中文 / 英文-日文）
> 核心差异：**不是替换式翻译，而是段落级英文原文+译文交替对照排版**

---

## 一、项目概述

### 1.1 做什么

将 Anthropic 旗下**所有公开站点**的全部内容，爬取、翻译、构建为一个**双语对照**静态网站。每个页面保留英文原文，在每段原文下方紧跟对应译文，形成类似双语对照书籍的阅读体验。

### 1.2 对照排版效果示例

最终页面的渲染效果如下（以一段 Anthropic 研究页面为例）：

```
┌──────────────────────────────────────────────────┐
│  Claude is trained using a technique we call     │  ← 英文原段（浅灰底色）
│  Constitutional AI (CAI). CAI uses a set of      │
│  principles to guide the model's behavior.       │
├──────────────────────────────────────────────────┤
│  Claude 使用一種我們稱之為「憲法式 AI」（CAI）     │  ← 繁中译段（白色底色）
│  的技術進行訓練。CAI 使用一組原則來引導模型的行為。  │
├──────────────────────────────────────────────────┤
│  Claude は、私たちが Constitutional AI（CAI）と     │  ← 日文译段（微蓝底色）
│  呼ぶ技術を使用してトレーニングされています。       │
│  CAI はモデルの動作を導く一連の原則を使用します。    │
└──────────────────────────────────────────────────┘
```

在 Markdown 源文件中，使用自定义标记存储对照关系：

```markdown
::: bilingual
::: en
Claude is trained using a technique we call Constitutional AI (CAI).
CAI uses a set of principles to guide the model's behavior.
:::
::: zh-Hant
Claude 使用一種我們稱之為「憲法式 AI」（CAI）的技術進行訓練。
CAI 使用一組原則來引導模型的行為。
:::
::: ja
Claude は、私たちが Constitutional AI（CAI）と呼ぶ技術を使用してトレーニングされています。
CAI はモデルの動作を導く一連の原則を使用します。
:::
:::
```

### 1.3 目标站点（爬取范围）

Anthropic 的内容分布在两大体系下，共 8 个站点：

#### 体系一：anthropic.com（公司/研究/工程）

| 站点 | 域名 | 内容类型 | 页面量级 |
|------|------|----------|----------|
| **主站** | www.anthropic.com | 公司介绍、新闻、研究、工程博客、法律文档 | ~500+ 页 |
| **API 文档** | docs.anthropic.com → platform.claude.com/docs | Claude API 技术文档 | ~300+ 页 |
| **对齐科学博客** | alignment.anthropic.com | 对齐研究文章 | ~50+ 页 |
| **红队博客** | red.anthropic.com | 前沿安全研究 | ~20+ 页 |

#### 体系二：claude.com（产品/用户面向）

| 站点 | 域名 | 内容类型 | 页面量级 |
|------|------|----------|----------|
| **Claude 产品站** | claude.com | 产品介绍、博客、解决方案、客户案例、定价 | ~200+ 页 |
| **Claude 帮助中心** | support.claude.com | 用户帮助文档（已有部分多语言） | ~100+ 页 |
| **Claude Code 文档** | code.claude.com → claude.com/product/claude-code | Claude Code 产品文档 | ~50+ 页 |
| **Claude 应用目录** | claude.ai/catalog | Artifacts/Prompt 模板目录 | ~30+ 页 |

**claude.com 站点结构详情：**

```
claude.com/
├── product/
│   ├── overview                # 产品概览
│   └── claude-code             # Claude Code
├── platform/
│   └── api                     # API 平台
├── solutions/
│   ├── agents                  # 智能体解决方案
│   ├── coding                  # 编码
│   ├── customer-support        # 客户支持
│   ├── education               # 教育
│   ├── financial-services      # 金融服务
│   ├── government              # 政府
│   ├── life-sciences           # 生命科学
│   └── code-modernization      # 代码现代化
├── pricing/
│   ├── max                     # Max 版本
│   ├── team                    # 团队版
│   └── enterprise              # 企业版
├── partners/
│   ├── amazon-bedrock
│   ├── google-cloud-vertex-ai
│   ├── powered-by-claude
│   └── services
├── programs/
│   ├── startups                # 初创企业计划
│   └── campus                  # 校园计划
├── customers/                  # 客户案例
├── blog/                       # 博客（大量文章）
├── resources/use-cases/        # 使用场景
├── connectors/                 # 连接器
├── download/                   # 下载页
├── claude-for-slack            # Slack 集成
├── claude-for-excel            # Excel 集成
└── newsletter/developers       # 开发者通讯
```

> 注：claude.com 已有部分多语言版本（ja-jp, de-de, fr-fr, ko-kr），但**没有繁体中文**，且现有翻译是替换式而非对照式。

### 1.4 支持语言

| 语言 | 代码 | 说明 |
|------|------|------|
| 英文（原文） | `en` | 始终保留，作为对照基准 |
| 繁体中文 | `zh-Hant` | 面向台湾、香港、澳门用户 |
| 日文 | `ja` | 面向日本用户 |

> 后续可扩展：简体中文 `zh-Hans`、韩文 `ko` 等

### 1.5 对照模式

用户可在页面上切换三种显示模式：

| 模式 | 说明 |
|------|------|
| **双语对照**（默认） | 英文原段 + 译文段交替显示 |
| **仅译文** | 隐藏英文原文，只显示译文（类似冯若航的 pg.center） |
| **仅原文** | 隐藏译文，只显示英文原文 |

通过页面顶部的切换按钮 + CSS class 控制，无需重新加载页面。

---

## 二、整体架构

```
┌──────────────────────────────────────────────────────────┐
│                       用户访问层                          │
│              域名 (待定，如 anthropic-zh.com)              │
│                 Cloudflare Pages / Vercel                 │
│          显示模式切换：双语对照 / 仅译文 / 仅原文          │
└────────────────────────────┬─────────────────────────────┘
                             │
┌────────────────────────────▼─────────────────────────────┐
│                      静态站点层                           │
│              Astro SSG 生成的 HTML 页面                   │
│     每个页面包含 en + zh-Hant + ja 三语内容（嵌入式）      │
│     /anthropic/research/...  /claude/solutions/...        │
└────────────────────────────┬─────────────────────────────┘
                             │
┌────────────────────────────▼─────────────────────────────┐
│                     内容管理层                            │
│           Markdown/MDX 文件 (Git 仓库管理)               │
│       每个 .md 文件内含 ::: bilingual 对照标记块          │
│          en 原文 + zh-Hant 译文 + ja 译文                │
└────────────────────────────┬─────────────────────────────┘
                             │
┌────────────────────────────▼─────────────────────────────┐
│                   爬虫 + 翻译管线                         │
│                                                          │
│  ┌─────────┐    ┌──────────┐    ┌──────────────────┐     │
│  │ Crawlee  │───▶│ 段落拆分  │───▶│ Claude API 逐段翻译│    │
│  │Playwright│    │ 对齐标记  │    │  + 术语表注入     │     │
│  └─────────┘    └──────────┘    └──────────────────┘     │
│                                                          │
│             定时同步 (GitHub Actions Cron)                │
└──────────────────────────────────────────────────────────┘
```

### 关键设计决策：单文件多语言 vs 多文件

**选择：单文件多语言（bilingual-in-one-file）**

```
content/
  anthropic.com/
    research/
      constitutional-ai.md      # 内含 en + zh-Hant + ja 三语对照
    news/
      claude-4-release.md
  claude.com/
    solutions/
      agents.md
    blog/
      enterprise-agents.md
  docs/
    api/
      messages.md
```

理由：
- 对照排版要求原文和译文严格段落对齐，放在同一文件中易于维护对齐关系
- 更新原文时，可以一眼看到哪些译文段落需要同步更新
- 避免多文件间的同步漂移问题

---

## 三、分阶段执行计划

### Phase 0：基础设施搭建（第 1 周）

- [ ] **项目初始化**：创建 Git monorepo，确定目录结构
- [ ] **选型确认**：
  - 静态站点框架：**Astro**（内置 i18n、内容集合、Markdown 插件生态强）
  - Markdown 插件：**remark 自定义插件**（解析 `::: bilingual` 对照标记）
  - 爬虫框架：**Crawlee + Playwright**（处理 SPA/SSR、自动队列管理）
  - 翻译引擎：**Claude API**（Sonnet 4.6 初翻 + Opus 4.6 精翻）
  - 部署平台：**Cloudflare Pages**（免费、全球 CDN）
- [ ] **域名购买**：选定并注册域名
- [ ] **开发对照 Markdown 的 remark 插件原型**

### Phase 1：爬虫开发（第 2-3 周）

#### 1.1 anthropic.com 系列爬虫

```
目标：爬取 anthropic.com + alignment + red team 全部公开页面
```

- [ ] 解析 anthropic.com/sitemap.xml，建立完整 URL 列表
- [ ] 开发爬虫，提取每个页面的：
  - 标题、正文内容（转为 Markdown）
  - **按段落拆分并标记段落 ID**（用于翻译对齐）
  - 元信息（发布日期、作者、标签、分类）
  - 图片资源（下载到本地）
  - 页面层级关系（导航结构）
- [ ] 爬取 alignment.anthropic.com 全部文章
- [ ] 爬取 red.anthropic.com 全部文章
- [ ] 输出格式：带段落 ID 的 Markdown

```markdown
---
source_url: https://www.anthropic.com/research/constitutional-ai
title: Constitutional AI
date: 2024-05-15
section: research
---

<!-- para:1 -->
We introduce a method for training AI systems...

<!-- para:2 -->
The key idea is to use a set of principles...
```

#### 1.2 claude.com 系列爬虫

```
目标：爬取 claude.com 产品站 + support + 相关子页面
```

- [ ] 解析 claude.com/sitemap.xml，建立完整 URL 列表
- [ ] 处理 claude.com 的特殊结构：
  - **产品页** (`/product/`, `/solutions/`)：重交互、多动画，需 Playwright 等待渲染
  - **博客** (`/blog/`)：结构化文章，相对好爬
  - **客户案例** (`/customers/`)：可能含视频/交互内容
  - **定价页** (`/pricing/`)：动态内容，需定期更新
  - **合作伙伴** (`/partners/`)：含外部链接
- [ ] 爬取 support.claude.com 帮助文档
  - 注意：该站已有 12 语言版本，可以参考其现有翻译质量
- [ ] 处理 claude.com 已有的 ja-jp 版本：可爬取作为日文翻译参考

#### 1.3 API 文档站爬虫 (platform.claude.com/docs)

- [ ] 解析文档站侧边栏导航结构
- [ ] 提取每个文档页面内容（含代码块、表格、API 示例）
- [ ] **特殊处理规则**：
  - 代码块：整体保留，仅翻译注释
  - API 端点/参数名：不翻译
  - 表格：表头翻译，数据保留
  - 代码示例中的字符串字面量：视情况翻译

#### 1.4 资源处理

- [ ] 图片下载并存储（按来源站点分目录）
- [ ] PDF/附件资源处理
- [ ] 建立资源哈希索引，避免重复下载
- [ ] 记录每个资源的来源 URL 和页面

### Phase 2：AI 翻译管线——段落对齐翻译（第 3-5 周）

#### 2.1 核心流程：段落级对齐翻译

与普通全文翻译不同，对照式翻译的核心是**保持段落一一对应**：

```python
# 伪代码：段落对齐翻译管线
def translate_bilingual(source_md: str, target_langs: list[str]) -> str:
    """将英文 Markdown 翻译为双语对照格式"""

    # 1. 解析 Markdown，按段落/块元素拆分
    blocks = parse_blocks(source_md)
    # blocks = [Heading, Paragraph, CodeBlock, Table, List, ...]

    bilingual_blocks = []

    for block in blocks:
        if block.type == "code":
            # 代码块：仅翻译注释部分
            translated_comments = translate_comments_only(block, target_langs)
            bilingual_blocks.append(make_bilingual(block, translated_comments))

        elif block.type == "heading":
            # 标题：简短，直接对照
            translations = {}
            for lang in target_langs:
                translations[lang] = claude_translate(block.text, lang)
            bilingual_blocks.append(make_bilingual_heading(block, translations))

        elif block.type in ("paragraph", "list", "table", "blockquote"):
            # 正文段落：逐段翻译并对齐
            translations = {}
            for lang in target_langs:
                translations[lang] = claude_translate(
                    text=block.text,
                    target_lang=lang,
                    glossary=GLOSSARY,
                    context=get_surrounding_context(block),
                    instruction="翻译时保持段落结构一致，不要拆分或合并段落"
                )
            bilingual_blocks.append(make_bilingual(block, translations))

    # 2. 组装为 ::: bilingual 格式的 Markdown
    return assemble_bilingual_markdown(bilingual_blocks, metadata)
```

#### 2.2 翻译 Prompt 设计

```
You are translating Anthropic's official content into {target_lang}.
This is for a bilingual parallel text, so your translation must:

1. Maintain EXACT paragraph-level alignment with the source.
   - Do NOT split one source paragraph into multiple paragraphs.
   - Do NOT merge multiple source paragraphs into one.
   - Each source paragraph must correspond to exactly one translated paragraph.

2. Use the following glossary for technical terms:
   {glossary}

3. Style guidelines for {target_lang}:
   - zh-Hant: 使用台灣正體中文用語習慣，避免大陸簡體用語
   - ja: 技術文書の標準的な日本語表現を使用

4. Preserve all Markdown formatting (links, bold, code, etc.)

5. For code snippets: translate ONLY comments, keep code as-is.

Translate the following paragraph:
```

#### 2.3 翻译分级策略

| 级别 | 内容范围 | 翻译方案 | 人工校对 |
|------|---------|---------|---------|
| **S 级** | 首页、产品页、定价、Getting Started | Opus 4.6 精翻 | 必须 |
| **A 级** | 研究论文、工程博客、解决方案、核心文档 | Sonnet 4.6 + 交叉校验 | 建议 |
| **B 级** | 新闻公告、法律文档、历史内容 | Sonnet 4.6 批量 | 可选 |
| **C 级** | 帮助中心（已有多语言可参考） | Sonnet 4.6 + 参考现有翻译 | 可选 |

#### 2.4 术语表（Glossary）

建立并维护 Anthropic/AI 领域的统一术语翻译表：

| English | 繁體中文 | 日本語 |
|---------|---------|--------|
| Anthropic | Anthropic | Anthropic |
| Claude | Claude | Claude |
| Large Language Model (LLM) | 大型語言模型 | 大規模言語モデル |
| Constitutional AI | 憲法式 AI | 憲法AI |
| RLHF | 基於人類反饋的強化學習 | 人間のフィードバックからの強化学習 |
| Alignment | 對齊 | アライメント |
| Interpretability | 可解釋性 | 解釈可能性 |
| Prompt | 提示詞 | プロンプト |
| Token | Token | トークン |
| Context Window | 上下文視窗 | コンテキストウィンドウ |
| Fine-tuning | 微調 | ファインチューニング |
| Responsible Scaling Policy | 負責任擴展政策 | 責任あるスケーリングポリシー |
| Agentic | 代理式 | エージェント型 |
| MCP (Model Context Protocol) | 模型上下文協議 (MCP) | モデルコンテキストプロトコル (MCP) |
| Claude Code | Claude Code | Claude Code |
| Artifacts | Artifacts | アーティファクト |
| Workbench | 工作台 | ワークベンチ |
| System Prompt | 系統提示詞 | システムプロンプト |
| Tool Use / Function Calling | 工具使用 | ツール使用 |
| Batch API | 批次 API | バッチAPI |
| Computer Use | 電腦使用 | コンピュータ使用 |
| Extended Thinking | 延伸思考 | 拡張思考 |
| Claude Max | Claude Max | Claude Max |
| Claude for Enterprise | Claude 企業版 | Claude エンタープライズ |

> 术语表存为 `glossary.yaml`，翻译时注入 System Prompt。随项目推进持续扩充。

#### 2.5 翻译质量保障

- [ ] **段落对齐校验**：自动检测原文段落数 = 译文段落数
- [ ] **格式完整性**：Markdown 结构检查（标题层级、链接、代码块闭合）
- [ ] **术语一致性**：自动扫描译文，检测术语是否与术语表一致
- [ ] **回译校验**（S 级内容）：将译文回译为英文，对比语义偏差
- [ ] **链接修正**：内部链接映射到镜像站对应路径
- [ ] **代码块校验**：确认代码块内容未被错误翻译

### Phase 3：静态站点构建（第 4-6 周）

#### 3.1 Astro 项目结构

```
site/
├── astro.config.mjs              # Astro 配置
├── src/
│   ├── layouts/
│   │   ├── BaseLayout.astro       # 基础布局
│   │   ├── BilingualLayout.astro  # ★ 双语对照布局（核心）
│   │   ├── DocsLayout.astro       # 文档布局（侧边栏+内容）
│   │   └── BlogLayout.astro       # 博客/文章布局
│   ├── components/
│   │   ├── Header.astro           # 导航栏
│   │   ├── Footer.astro
│   │   ├── BilingualBlock.astro   # ★ 双语段落对照组件
│   │   ├── LanguageToggle.astro   # ★ 显示模式切换（对照/仅译/仅原）
│   │   ├── SiteSelector.astro     # 站点切换（anthropic.com / claude.com）
│   │   ├── Sidebar.astro          # 文档侧边栏
│   │   └── SearchBar.astro        # 站内搜索（Pagefind）
│   ├── plugins/
│   │   └── remark-bilingual.ts    # ★ 自定义 remark 插件：解析对照标记
│   ├── styles/
│   │   ├── bilingual.css          # ★ 双语对照样式
│   │   └── global.css
│   └── pages/
│       ├── anthropic/             # anthropic.com 系列内容
│       │   ├── index.astro
│       │   ├── research/
│       │   ├── news/
│       │   ├── engineering/
│       │   └── legal/
│       ├── claude/                # claude.com 系列内容
│       │   ├── index.astro
│       │   ├── product/
│       │   ├── solutions/
│       │   ├── blog/
│       │   ├── pricing/
│       │   ├── customers/
│       │   └── partners/
│       ├── docs/                  # API 文档
│       │   └── [..slug].astro
│       ├── alignment/             # 对齐科学博客
│       ├── redteam/               # 红队博客
│       └── support/               # 帮助中心
├── content/                       # ★ 对照 Markdown 内容
│   ├── anthropic.com/
│   ├── claude.com/
│   ├── docs/
│   ├── alignment/
│   ├── redteam/
│   └── support/
├── public/
│   └── images/
└── package.json
```

#### 3.2 核心组件：BilingualBlock

```astro
<!-- BilingualBlock.astro -->
<!-- 一个段落的双语对照渲染 -->
<div class="bilingual-block" data-para-id={paraId}>
  <div class="bilingual-en" lang="en">
    <slot name="en" />
  </div>
  <div class="bilingual-zh-Hant" lang="zh-Hant">
    <slot name="zh-Hant" />
  </div>
  <div class="bilingual-ja" lang="ja">
    <slot name="ja" />
  </div>
</div>
```

#### 3.3 显示模式切换（CSS 驱动，零 JS 重载）

```css
/* 默认：双语对照（英文 + 当前选择的目标语言） */
body[data-mode="bilingual"][data-lang="zh-Hant"] .bilingual-ja { display: none; }
body[data-mode="bilingual"][data-lang="ja"] .bilingual-zh-Hant { display: none; }

/* 仅译文 */
body[data-mode="target-only"] .bilingual-en { display: none; }

/* 仅原文 */
body[data-mode="source-only"] .bilingual-zh-Hant,
body[data-mode="source-only"] .bilingual-ja { display: none; }

/* 原文段落样式 */
.bilingual-en {
  background: #f8f9fa;
  border-left: 3px solid #ddd;
  padding: 0.75rem 1rem;
  margin-bottom: 0.25rem;
  color: #555;
  font-size: 0.95em;
}

/* 繁中译文样式 */
.bilingual-zh-Hant {
  padding: 0.75rem 1rem;
  margin-bottom: 1.5rem;
}

/* 日文译文样式 */
.bilingual-ja {
  background: #f0f4ff;
  padding: 0.75rem 1rem;
  margin-bottom: 1.5rem;
}
```

#### 3.4 核心功能清单

- [ ] **双语对照渲染**：remark 插件解析 `::: bilingual` 块 → BilingualBlock 组件
- [ ] **显示模式切换**：对照 / 仅译文 / 仅原文，纯 CSS 切换
- [ ] **目标语言选择**：繁中 / 日文，cookie 记忆偏好
- [ ] **站点导航**：顶部一级导航区分 anthropic.com 和 claude.com 两大体系
- [ ] **站内搜索**：Pagefind（支持 CJK 分词），可选搜索范围（全站/仅译文/仅原文）
- [ ] **样式还原**：参考 anthropic.com 的视觉风格（Sand 配色、Inter 字体）
- [ ] **响应式设计**：移动端适配（对照段落竖排堆叠）
- [ ] **SEO**：hreflang 标签、Open Graph、结构化数据
- [ ] **原文链接**：每个页面顶部标注原始来源 URL

### Phase 4：部署（第 6-7 周）

- [ ] 配置 Cloudflare Pages，绑定自定义域名
- [ ] 配置 SSL 证书（Cloudflare 自动管理）
- [ ] 配置 CDN 缓存策略
- [ ] 配置自定义 404 页面

### Phase 5：持续同步与更新系统（第 7 周起，长期运行）

这是整个项目**长期生命力的核心**。Anthropic 更新极其频繁——新模型发布、新功能上线、研究论文、博客文章、文档改版——如果跟不上，镜像站就会迅速过时变成废站。

#### 5.1 变更发现：三层探测机制

源站的变更分为三类，需要不同的探测策略：

```
┌─────────────────────────────────────────────────────────────┐
│                    变更发现（三层探测）                        │
│                                                             │
│  第一层：Sitemap 差分（发现新页面 & 删除页面）                  │
│  ┌─────────────────────────────────────────────────────┐    │
│  │  每日拉取 sitemap.xml，与本地 URL 清单对比            │    │
│  │  → 新增 URL → 加入爬取队列                           │    │
│  │  → 消失 URL → 标记为 archived / 跳转提示             │    │
│  └─────────────────────────────────────────────────────┘    │
│                                                             │
│  第二层：内容哈希对比（发现已有页面的内容变更）                  │
│  ┌─────────────────────────────────────────────────────┐    │
│  │  对每个已知 URL 重新爬取，计算内容哈希                  │    │
│  │  → 哈希不变 → 跳过                                   │    │
│  │  → 哈希变更 → 进入段落级 diff                         │    │
│  └─────────────────────────────────────────────────────┘    │
│                                                             │
│  第三层：RSS/博客 Feed 监听（快速捕捉新文章）                  │
│  ┌─────────────────────────────────────────────────────┐    │
│  │  监听 anthropic.com/news/rss, /blog/rss 等 Feed       │    │
│  │  → 新条目出现 → 立即触发单页爬取+翻译（不等每日 cron） │    │
│  └─────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────┘
```

#### 5.2 sync-state.json：同步状态数据库

这是整个更新系统的核心数据结构，记录每个页面的完整生命周期状态：

```jsonc
{
  "pages": {
    "anthropic.com/research/constitutional-ai": {
      "source_url": "https://www.anthropic.com/research/constitutional-ai",
      "first_seen": "2026-04-01T00:00:00Z",      // 首次发现时间
      "last_crawled": "2026-04-15T00:00:00Z",     // 最后爬取时间
      "content_hash": "a1b2c3d4...",               // 当前内容哈希
      "prev_content_hash": "e5f6g7h8...",          // 上次内容哈希（用于 diff）
      "status": "synced",                          // synced | stale | new | deleted | error
      "translations": {
        "zh-Hant": {
          "status": "synced",                      // synced | stale | pending | error
          "last_translated": "2026-04-15T00:00:00Z",
          "translated_from_hash": "a1b2c3d4...",   // 翻译时对应的原文哈希
          "stale_paragraphs": []                   // 需要重翻的段落 ID 列表
        },
        "ja": {
          "status": "stale",
          "last_translated": "2026-04-10T00:00:00Z",
          "translated_from_hash": "e5f6g7h8...",   // 翻译基于的是旧版原文
          "stale_paragraphs": ["para:3", "para:7"] // 这两段原文变了
        }
      },
      "paragraph_hashes": {                        // 段落级哈希，精确追踪变更
        "para:1": "hash1...",
        "para:2": "hash2...",
        "para:3": "hash3_new..."
      }
    }
  },
  "sitemaps": {
    "anthropic.com": {
      "last_fetched": "2026-04-15T00:00:00Z",
      "known_urls": 523,
      "prev_known_urls": 520                       // 上次 URL 数量，快速判断有无新增
    }
  },
  "global": {
    "last_full_sync": "2026-04-15T00:00:00Z",
    "total_pages": 1230,
    "synced_pages": 1180,
    "stale_pages": 35,
    "new_pages": 10,
    "error_pages": 5
  }
}
```

#### 5.3 四种变更场景及处理策略

##### 场景 A：源站新增页面

```
触发：sitemap diff 发现新 URL / RSS feed 出现新条目
流程：
  1. 爬取新页面 → 转为带段落 ID 的 Markdown
  2. 全页翻译（因为是全新内容，无法增量）
  3. 组装为 bilingual Markdown
  4. 写入 content/ 目录
  5. 触发 Astro 增量构建
  6. sync-state 中标记为 synced
```

##### 场景 B：源站已有页面内容变更

这是最复杂也最频繁的场景。关键是**段落级 diff**——不需要重翻整页，只翻变更的段落：

```
触发：内容哈希变更
流程：
  1. 爬取新版页面 → 转为 Markdown
  2. 与本地存储的旧版原文做段落级 diff：
     - 使用 diff-match-patch 或类似算法
     - 识别出：新增段落、删除段落、修改段落、未变段落
  3. 仅对变更段落调用 Claude API 翻译
  4. 将新译文替换进 bilingual Markdown 的对应位置
  5. 未变段落的译文保持不变（节省 API 成本）
  6. 更新 sync-state 中的段落哈希

伪代码：
```

```python
def incremental_update(page_id: str):
    old_en = load_stored_english(page_id)        # 上次爬取的英文
    new_en = crawl_page(page_id)                  # 本次爬取的英文

    old_paragraphs = split_paragraphs(old_en)
    new_paragraphs = split_paragraphs(new_en)

    # 段落级对齐 diff（处理插入/删除/修改/移动）
    diff = align_paragraphs(old_paragraphs, new_paragraphs)

    bilingual_md = load_bilingual_markdown(page_id)

    for change in diff:
        if change.type == "unchanged":
            pass  # 译文保持不变，零成本

        elif change.type == "modified":
            # 仅重翻这一段
            for lang in ["zh-Hant", "ja"]:
                new_translation = claude_translate(change.new_text, lang)
                bilingual_md.update_paragraph(change.para_id, lang, new_translation)

        elif change.type == "added":
            # 新段落，翻译并插入
            for lang in ["zh-Hant", "ja"]:
                translation = claude_translate(change.new_text, lang)
                bilingual_md.insert_paragraph(change.position, change.new_text, {lang: translation})

        elif change.type == "deleted":
            # 段落被删除，从 bilingual markdown 中移除
            bilingual_md.remove_paragraph(change.para_id)

    save_bilingual_markdown(page_id, bilingual_md)
    update_sync_state(page_id, new_en)
```

##### 场景 C：源站页面被删除/URL 变更

```
触发：sitemap diff 发现 URL 消失
流程：
  1. 不立即删除本地内容（可能是临时下线或 URL 重构）
  2. 标记为 "deleted"，保留 7 天观察期
  3. 如果 7 天后仍未恢复：
     - 页面标记为 archived
     - 在镜像站显示提示："此页面已从源站移除"
     - 保留内容但不再更新（历史存档价值）
  4. 如果发现是 URL 重定向（301）：
     - 追踪新 URL
     - 在镜像站建立对应重定向
     - 将旧内容迁移到新路径
```

##### 场景 D：源站结构性改版（大规模重构）

```
触发：一次 sitemap diff 中大量 URL 同时消失/出现（阈值：>20% URL 变更）
流程：
  1. 触发告警，暂停自动同步（避免误操作）
  2. 发送通知（邮件/Slack/GitHub Issue）
  3. 人工介入评估：
     - 是否只是 URL 格式变化（如 /blog/xxx → /news/xxx）
     - 是否是整个站点板块重组
     - 是否需要调整爬虫逻辑
  4. 制定迁移计划后恢复同步
```

#### 5.4 同步频率策略

不同内容类型的更新频率差异巨大，不应一刀切：

| 内容类型 | 更新频率 | 同步频率 | 探测方式 |
|---------|---------|---------|---------|
| 新闻/博客 (`/news/`, `/blog/`) | 每周数篇 | **每 6 小时** + RSS 实时 | RSS Feed + sitemap |
| API 文档 (`/docs/`) | 随版本发布 | **每日** | sitemap + 内容哈希 |
| 研究论文 (`/research/`) | 每月数篇 | **每日** | sitemap |
| 产品页 (`/product/`, `/solutions/`) | 偶尔改版 | **每日** | 内容哈希 |
| 定价页 (`/pricing/`) | 不定期 | **每 12 小时** | 内容哈希 |
| 法律文档 (`/legal/`) | 极少变更 | **每周** | 内容哈希 |
| 帮助中心 (`/support/`) | 较频繁 | **每日** | sitemap + 内容哈希 |

```yaml
# .github/workflows/sync.yml
name: Sync & Translate

on:
  schedule:
    # 高频内容：每 6 小时
    - cron: '0 */6 * * *'
  workflow_dispatch:
    inputs:
      scope:
        description: 'Sync scope'
        type: choice
        options: [all, news-only, docs-only, full-recrawl]

jobs:
  # ── 第一步：探测变更 ──
  detect:
    runs-on: ubuntu-latest
    outputs:
      has_changes: ${{ steps.diff.outputs.has_changes }}
      change_manifest: ${{ steps.diff.outputs.manifest }}
    steps:
      - uses: actions/checkout@v4

      - name: Fetch sitemaps & RSS feeds
        run: node scripts/detect.js --fetch-sitemaps --fetch-rss

      - name: Diff against sync-state
        id: diff
        run: node scripts/detect.js --diff
        # 输出 change_manifest.json：
        # { "new": [...urls], "modified": [...urls], "deleted": [...urls] }

      - name: Upload change manifest
        if: steps.diff.outputs.has_changes == 'true'
        uses: actions/upload-artifact@v4
        with:
          name: change-manifest
          path: change_manifest.json

  # ── 第二步：爬取变更页面 ──
  crawl:
    needs: detect
    if: needs.detect.outputs.has_changes == 'true'
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Download change manifest
        uses: actions/download-artifact@v4

      - name: Crawl changed pages only
        run: node scripts/crawl.js --manifest change_manifest.json
        # 仅爬取 manifest 中列出的 URL，不全站重爬

      - name: Compute paragraph-level diffs
        run: node scripts/diff-paragraphs.js
        # 对 modified 页面，计算段落级 diff
        # 输出 translation_tasks.json：
        # [{ page, para_id, old_text, new_text, type: "added"|"modified"|"deleted" }]

      - name: Upload crawl results & diff
        uses: actions/upload-artifact@v4
        with:
          name: crawl-results
          path: |
            crawled/
            translation_tasks.json

  # ── 第三步：增量翻译（双语言并行）──
  translate:
    needs: crawl
    strategy:
      matrix:
        lang: [zh-Hant, ja]
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Download crawl results
        uses: actions/download-artifact@v4

      - name: Translate changed paragraphs (${{ matrix.lang }})
        run: node scripts/translate.js --lang ${{ matrix.lang }} --tasks translation_tasks.json
        env:
          ANTHROPIC_API_KEY: ${{ secrets.ANTHROPIC_API_KEY }}
        # 关键：只翻译 translation_tasks 中列出的段落
        # 新页面 → 全部段落翻译
        # 修改页面 → 仅翻译变更段落
        # 删除页面 → 不需要翻译

      - name: Validate translations
        run: node scripts/validate.js --lang ${{ matrix.lang }}

      - name: Upload translations
        uses: actions/upload-artifact@v4
        with:
          name: translations-${{ matrix.lang }}
          path: translations/

  # ── 第四步：组装 + 构建 + 部署 ──
  build-deploy:
    needs: translate
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Download all artifacts
        uses: actions/download-artifact@v4

      - name: Assemble bilingual markdown
        run: node scripts/assemble.js
        # 将新/修改的翻译合并进 bilingual markdown 文件

      - name: Update sync-state.json
        run: node scripts/update-state.js

      - name: Commit content changes
        run: |
          git add content/ sync-state.json
          git commit -m "sync: update $(date -u +%Y-%m-%dT%H:%M:%SZ)" || true
          git push

      - name: Build Astro site
        run: cd site && npm run build

      - name: Deploy to Cloudflare Pages
        uses: cloudflare/pages-action@v1
        with:
          apiToken: ${{ secrets.CF_API_TOKEN }}
          accountId: ${{ secrets.CF_ACCOUNT_ID }}
          projectName: anthropic-mirror
          directory: site/dist

  # ── 异常告警 ──
  alert:
    needs: [detect, crawl, translate, build-deploy]
    if: failure()
    runs-on: ubuntu-latest
    steps:
      - name: Send failure notification
        run: |
          curl -X POST "${{ secrets.ALERT_WEBHOOK }}" \
            -H "Content-Type: application/json" \
            -d '{"text": "⚠️ Anthropic mirror sync failed: ${{ github.server_url }}/${{ github.repository }}/actions/runs/${{ github.run_id }}"}'
```

#### 5.5 页面上的"过时"提示

当原文已更新但译文尚未跟上时，在页面上向用户透明展示：

```html
<!-- 译文已过时的段落 -->
<div class="bilingual-block stale">
  <div class="stale-banner">
    ⚠ 此段譯文基於較舊版本的原文（2026-04-10），原文已於 2026-04-15 更新。
    <a href="#" onclick="toggleOriginal()">查看最新原文</a>
  </div>
  <div class="bilingual-en updated" lang="en">
    <!-- 最新英文原文（已更新） -->
  </div>
  <div class="bilingual-zh-Hant outdated" lang="zh-Hant">
    <!-- 旧译文，等待重翻 -->
  </div>
</div>
```

这样即使翻译有延迟，用户也能看到最新原文，不会被过时信息误导。

#### 5.6 全量重同步（Disaster Recovery）

定期（每月一次）执行一次全量重爬+校验，防止增量同步遗漏：

```bash
# 手动触发全量重同步
node scripts/crawl.js --full          # 全站重爬，不看 sync-state
node scripts/diff-paragraphs.js       # 与现有内容全量对比
node scripts/translate.js --stale     # 翻译所有 stale 段落
node scripts/validate.js --full       # 全量质量校验
```

#### 5.7 监控仪表板

维护一个简单的状态页面（可作为镜像站的 `/status` 路径），展示：

- 各站点最后同步时间
- 各站点页面总数 / 已同步 / 待更新 / 出错
- 最近 7 天的同步历史（新增/更新/删除页面数）
- 翻译覆盖率（已翻译段落数 / 总段落数）
- 最近一次同步的 diff 摘要

---

## 四、目录结构总览

```
Anthropic/
├── PLAN.md                        # 本计划文档
│
├── crawler/                       # 爬虫模块
│   ├── src/
│   │   ├── anthropic-site.ts      # anthropic.com 主站爬虫
│   │   ├── claude-site.ts         # claude.com 产品站爬虫
│   │   ├── docs-site.ts           # platform.claude.com/docs 文档站爬虫
│   │   ├── alignment-site.ts      # alignment.anthropic.com 爬虫
│   │   ├── redteam-site.ts        # red.anthropic.com 爬虫
│   │   ├── support-site.ts        # support.claude.com 爬虫
│   │   └── utils/
│   │       ├── html-to-md.ts      # HTML → Markdown（保留段落 ID）
│   │       ├── paragraph-split.ts # 段落拆分与标记
│   │       ├── asset-dl.ts        # 资源下载
│   │       └── diff.ts            # 变更检测
│   ├── config.ts                  # 爬虫配置（URL 列表、频率限制等）
│   └── package.json
│
├── translator/                    # 翻译模块
│   ├── src/
│   │   ├── translate.ts           # 逐段翻译主逻辑
│   │   ├── assemble.ts            # 组装双语对照 Markdown
│   │   ├── glossary.yaml          # 术语表
│   │   ├── style-guide.md         # 翻译风格指南
│   │   ├── prompts/               # 翻译 Prompt 模板
│   │   │   ├── paragraph.txt      # 正文段落翻译 Prompt
│   │   │   ├── heading.txt        # 标题翻译 Prompt
│   │   │   ├── code-comment.txt   # 代码注释翻译 Prompt
│   │   │   └── table.txt          # 表格翻译 Prompt
│   │   └── validators/            # 质量校验
│   │       ├── alignment-check.ts # 段落对齐校验
│   │       ├── glossary-check.ts  # 术语一致性校验
│   │       └── format-check.ts    # Markdown 格式校验
│   └── package.json
│
├── site/                          # Astro 静态站点
│   ├── astro.config.mjs
│   ├── src/
│   │   ├── layouts/
│   │   ├── components/
│   │   ├── plugins/               # remark-bilingual 插件
│   │   ├── styles/
│   │   └── pages/
│   ├── content/                   # 双语对照 Markdown 内容
│   │   ├── anthropic.com/
│   │   ├── claude.com/
│   │   ├── docs/
│   │   ├── alignment/
│   │   ├── redteam/
│   │   └── support/
│   └── package.json
│
├── scripts/                       # 自动化脚本
│   ├── crawl.js                   # 爬取入口
│   ├── translate.js               # 翻译入口
│   ├── assemble.js                # 组装双语 Markdown
│   ├── validate.js                # 质量校验入口
│   └── deploy.js                  # 部署入口
│
├── .github/
│   └── workflows/
│       └── sync.yml               # 自动同步 CI/CD
│
└── sync-state.json                # 同步状态记录
```

---

## 五、成本估算

### 5.1 翻译成本（Claude API）

对照翻译需要更高的段落对齐精度，每段独立翻译，token 用量比全文翻译略高：

| 站点 | 页面数 | 平均 Token/页 | 总输入 Token | 模型 | 单语言费用 |
|------|--------|--------------|-------------|------|-----------|
| anthropic.com 主站 | 500 | ~3K | ~1.5M | Sonnet | ~$10 |
| claude.com 产品站 | 200 | ~2K | ~0.4M | Sonnet | ~$3 |
| API 文档 | 300 | ~5K | ~1.5M | Sonnet | ~$10 |
| 对齐/红队博客 | 70 | ~4K | ~0.3M | Sonnet | ~$2 |
| 帮助中心 | 100 | ~2K | ~0.2M | Sonnet | ~$1 |
| S 级精翻 | 60 | ~5K | ~0.3M | Opus | ~$12 |
| **单语言合计** | **~1230** | | **~4.2M** | | **~$38** |
| **双语言（繁中+日文）** | | | **~8.4M** | | **~$76** |

### 5.2 基础设施成本

| 项目 | 费用 |
|------|------|
| 域名 | ~$10-50/年 |
| Cloudflare Pages | 免费 |
| GitHub Actions | 免费（公开仓库）/ 2000分钟/月（私有） |
| **年度总成本** | **< $200** |

---

## 六、执行优先级

```
Week 1:    Phase 0（基础设施 + remark-bilingual 插件原型）
Week 2:    Phase 1.1（anthropic.com 爬虫）
Week 3:    Phase 1.2 + 1.3（claude.com 爬虫 + API 文档爬虫 + 子站）
Week 4:    Phase 2.1-2.4（翻译管线 + 术语表 + 段落对齐逻辑）
Week 5:    Phase 2（完成首批翻译：繁中全站）
Week 6:    Phase 3（Astro 站点构建 + 双语对照组件）
Week 7:    Phase 4（部署上线）+ Phase 2 日文翻译
Week 8:    Phase 5（同步系统上线：sitemap diff + 段落级增量翻译 + RSS 监听）
Week 9+:   持续运行、监控仪表板、质量优化、社区协作校对
```

**建议的 MVP 路径**（最快出成果）：
1. 先做 anthropic.com/research 的 10 篇核心论文的繁中对照
2. 验证爬虫→翻译→对照渲染的完整流程
3. 确认效果后再铺开全站

---

## 七、风险与注意事项

1. **版权合规**：在镜像站明确标注"非官方双语对照版，内容版权归 Anthropic, PBC 所有"，每页附原文链接。
2. **反爬机制**：anthropic.com 和 claude.com 均使用 Cloudflare，需 Playwright 模拟浏览器 + 控制爬取频率（建议 2-5 秒间隔）。
3. **段落对齐难点**：
   - 某些页面是纯视觉布局（无语义段落），需人工标注对齐点
   - 列表项、表格等非段落内容的对齐需要特殊处理
   - 翻译后段落长度差异大（日文通常比英文短，中文接近），影响视觉对照效果
4. **动态内容**：claude.com 产品页大量使用客户端渲染和动画，需 Playwright 等待渲染完成。
5. **内容时效性**：Anthropic 更新频繁（新模型/功能发布），自动同步管线是核心。原文更新后对应译文段落应标记为"待更新"。
6. **API 文档中的代码**：代码示例保持原样，仅翻译注释和文字说明。
7. **claude.com 已有多语言版本**：可爬取 ja-jp 版本作为日文翻译的参考，但需注意官方翻译可能不够准确或使用不同术语。
8. **support.claude.com 已有翻译**：已支持 zh-CN/zh-TW/ja 等 12 种语言，可作为翻译质量基线参考。
