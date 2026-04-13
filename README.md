稚影 (Zhiying) - 成神经细胞瘤多模态辅助诊断平台 🔬

本项目是稚影（Zhiying）前端工程的完整实现，采用了 PC 专业工作站与 Mobile 移动助手双端隔离架构。

---

## ⚙️ 环境要求

在运行本项目之前，请确保你的开发环境已安装：
- **Node.js**: 建议版本 v16.0.0 或更高 (通过 ``node -v`` 查看)
- **npm**: 建议版本 v8.0.0 或更高 (通过 ``npm -v`` 查看)

---

## 🚀 快速启动（保姆级步骤）

请严格按照以下顺序在终端（Terminal / PowerShell / CMD）中执行命令：

### 1. 克隆项目
将远程仓库代码下载到本地：
``````bash
git clone git@github.com:ZDH520a/zhiying-frontend.git
``````
*如果 SSH 报错，请使用 HTTPS 链接：``git clone https://github.com/ZDH520a/zhiying-frontend.git``*

### 2. 进入文件夹
``````bash
cd zhiying-frontend
``````

### 3. 安装依赖 (最关键)
这一步会下载 Vue、Vite、Tailwind CSS 等所有必需的插件包。
``````bash
npm install
``````
*注意：请等待进度条走完，确保没有报错。如果网络慢，可以使用 ``npm install --registry=https://registry.npmmirror.com``*

### 4. 运行前端
启动本地开发服务器：
``````bash
npm run dev
``````
出现 ``Local: http://localhost:5173/`` 字样后，说明运行成功！

---

## 📱 访问与预览说明

由于项目使用了 Vue Router，不同终端的展示路径如下：

### 1. 系统引导门户 (Portal)
- **URL**: ``http://localhost:5173/``
- **说明**: 默认首页，提供进入 PC 端或 Mobile 端的科技感入口。

### 2. PC 专业诊断工作站
- **URL**: ``http://localhost:5173/pc``
- **说明**: 模拟医生办公室电脑环境，展示双栏 WSI 切片阅片与 AI 思维链。

### 3. Mobile 移动终端助手
- **URL**: ``http://localhost:5173/mobile``
- **⚠️ 重要预览步骤**:
    1. 打开页面后，按下键盘 **F12** 进入开发者工具。
    2. 点击 **“设备仿真”图标**（手机/平板形状）切换到移动端模式。
    3. **必须手动按 F5 刷新页面**，系统才会正确加载移动端交互逻辑与布局！

---

## 🛠️ 技术架构
- **核心框架**: Vue 3 (Composition API)
- **路由管理**: Vue Router 4 (实现 PC/Mobile 物理隔离)
- **样式方案**: Tailwind CSS (原子化设计)
- **构建工具**: Vite

---
**© 2026 Zhiying Tech · 医疗 AI 创新探索项目**`;