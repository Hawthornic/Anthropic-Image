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
- [x] claude.com 主站与集合页抓取跑通
- [x] platform.claude.com/docs 英文文档抓取跑通
- [x] alignment.anthropic.com 全量抓取跑通
- [x] red.anthropic.com 全量抓取跑通
- [x] 统一 Markdown 输出格式（frontmatter + `para` 标记）与 run report
- [x] section manifest 生成与重建脚本补齐
- [x] `output/_manifests/` 与本地已落盘内容对齐

### 进行中
- [ ] translator/ 翻译管线
- [ ] site/ Astro 双语站点

## 后续步骤（按顺序）

### Step 1：翻译管线
- 编写 translator/ 模块
- 术语表 glossary.yaml
- Claude API 逐段翻译 → 组装 bilingual Markdown
- 维护 source manifest 与 translated manifest 的对应关系

### Step 2：Astro 站点
- site/ 目录初始化
- remark-bilingual 插件
- BilingualBlock 组件
- 样式与布局

### Step 3：部署 + 同步
- Cloudflare Pages 部署
- GitHub Actions 自动同步
- sync-state.json 状态管理
