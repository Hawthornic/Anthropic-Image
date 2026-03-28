# TODO：当前进度与后续步骤

## 当前进度

### 已完成
- [x] PLAN.md 完整计划文档（含对照排版、更新机制等）
- [x] crawler/ 目录初始化（npm init + 依赖安装）
- [x] 依赖安装完成：crawlee, playwright, turndown, typescript, tsx
- [x] Playwright Chromium 浏览器已下载
- [x] tsconfig.json 配置完成
- [x] package.json 配置完成（type: module, scripts）
- [x] anthropic.com `research` / `engineering` / `news` 全量抓取跑通
- [x] support.claude.com 英文帮助中心全量抓取跑通

### 进行中
- [ ] 编写 `claude.com` 主站爬虫

## 后续步骤（按顺序）

### Step 1：单页爬取验证（当前）
写一个脚本，用 Playwright 爬取 anthropic.com 的一篇 research 文章，验证：
1. 能否正常访问（Cloudflare 反爬是否拦截）
2. HTML → Markdown 转换效果（用 Turndown）
3. 段落拆分与 ID 标记是否合理

目标输出：
```
output/
  anthropic.com/
    research/
      constitutional-ai.md    # 带段落 ID 的结构化 Markdown
```

### Step 2：批量爬取主站
- 解析 anthropic.com/sitemap.xml 获取全部 URL
- 按类别（research / news / engineering / legal）分别爬取
- 输出到 `output/anthropic.com/` 目录

### Step 3：claude.com 爬虫
- 解析 claude.com/sitemap.xml
- 处理 SPA 页面渲染
- 输出到 `output/claude.com/`

### Step 4：API 文档 + 子站爬虫
- platform.claude.com/docs
- alignment.anthropic.com
- red.anthropic.com
- [x] support.claude.com

### Step 5：翻译管线
- 编写 translator/ 模块
- 术语表 glossary.yaml
- Claude API 逐段翻译 → 组装 bilingual Markdown

### Step 6：Astro 站点
- site/ 目录初始化
- remark-bilingual 插件
- BilingualBlock 组件
- 样式与布局

### Step 7：部署 + 同步
- Cloudflare Pages 部署
- GitHub Actions 自动同步
- sync-state.json 状态管理
