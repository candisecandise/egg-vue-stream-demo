
# 项目简介
vue+egg+typescript 流式渲染 dem

# node-stream
node-stream demo 在 node-stream 目录下
用于了解 node 流式输出数据到客户端的原始方法

# egg-stream
egg-stream demo 在 egg-stream 目录下

### 返回简单 html demo
用于了解 egg 中不能使用 await，否则会阻塞流式渲染

启动
```bash
pnpm run dev
```

查看
- http://localhost:7001/simple

### 返回 vue demo
用于了解加载的单页面相关 js 资源存在 type=module 时，会阻塞流式渲染

提供两种解决方案
- 方式一：prod：使用 legacy 的资源
- 方式二：es：资源加载使用 async

两种方式的查看
- http://localhost:7001/prod
- http://localhost:7001/prod-es


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


