# CURSOR-VUE

基于 Vue 3 + Vite 构建的个人主页项目。

## 项目说明

这是一个使用 Vue 3 和 Vite 构建的个人主页项目。使用了 Vue 3 的 `<script setup>` 语法，详情可查看 [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup)。

## 技术栈

- Vue 3
- Vite
- Vue Router
- Modern CSS (Flexbox, Grid, 响应式设计)

## 开发流程

### 1. 本地开发

在本地开发时，不需要每次修改都推送到远程仓库。推荐以下工作流程：

```bash
# 启动开发服务器
npm run dev

# 当完成一个功能或修复后，提交到本地仓库
git add .
git commit -m "feat/fix: 修改说明"
```

### 2. 推送到远程仓库

在合适的时机推送到远程仓库：
- 完成了一个完整的功能
- 修复了一个bug
- 需要与他人协作
- 想要备份重要更改

```bash
# 推送到远程master分支
git push origin master
```

### 3. 部署更新

当需要更新线上页面时，执行以下步骤：

```bash
# 1. 构建项目
npm run build

# 2. 提交构建结果
git add .
git commit -m "build: 更新线上页面"

# 3. 推送到远程master分支
git push origin master

# 4. 部署到GitHub Pages
git subtree push --prefix dist origin gh-pages
```

## 部署说明

项目使用 GitHub Pages 进行部署，访问地址：https://muyin624.github.io/CURSOR-VUE/

### 部署时机
不需要每次修改都部署，建议在以下情况进行部署：
- 完成了重要的更新
- 需要更新线上展示页面
- 修复了线上页面的问题

## IDE 支持

推荐使用 VS Code 进行开发。关于 Vue 的 IDE 支持，可以查看 [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support)。