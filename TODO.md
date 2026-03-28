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
- [x] 统一 Markdown 输出格式（frontmatter + `para` 标记）与 run report
- [x] section manifest 生成与重建脚本补齐

### 进行中
- [ ] 编写 `claude.com` 主站爬虫

## 后续步骤（按顺序）

### Step 1：状态对齐与清单稳定化（当前）
- 统一 `output/_manifests/` 与已落盘 Markdown 的状态
- 确认 `research / engineering / news / support articles` 四类产物可作为后续翻译输入
- 更新 TODO / 运行记录，避免计划与代码脱节

### Step 2：claude.com 爬虫
- 解析 claude.com/sitemap.xml
- 处理 SPA 页面渲染
- 输出到 `output/claude.com/`

### Step 3：API 文档 + 子站爬虫
- platform.claude.com/docs
- alignment.anthropic.com
- red.anthropic.com
- [x] support.claude.com

### Step 4：翻译管线
- 编写 translator/ 模块
- 术语表 glossary.yaml
- Claude API 逐段翻译 → 组装 bilingual Markdown

### Step 5：Astro 站点
- site/ 目录初始化
- remark-bilingual 插件
- BilingualBlock 组件
- 样式与布局

### Step 6：部署 + 同步
- Cloudflare Pages 部署
- GitHub Actions 自动同步
- sync-state.json 状态管理
