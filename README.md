
# 项目简介
vue+egg+typescript 流式渲染 dem

# node-stream
node-stream demo 在 node-stream 目录下
用于了解 node 流式输出数据到客户端的原始方法

# egg-stream
egg-stream demo 在 egg-stream 目录下

### 返回简单 html demo
用于了解 egg 流式输出数据到客户端的原始方法

启动
```bash
pnpm run dev
```

查看
- http://localhost:7001/simple

### 返回 vue demo
用于了解输出的内容如果是一个 vue 项目，要怎么输出

主要是解决 vue 打包资源带了 type=module 导致没有流式渲染效果的问题
解决方案
- 方式一：使用 legacy 的资源
- 方式二：资源加载使用 async



启动
- client 目录下
```bash
pnpm run install
pnpm run build
```
- egg-stream 目录下
```bash
pnpm run dev
```

查看
- http://localhost:7001/prod
- http://localhost:7001/prod-es
