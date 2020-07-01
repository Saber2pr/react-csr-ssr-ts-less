# react-csr-ssr-ts-less

> React 同构渲染

### Feature

1. 首屏 SSR，对 SEO 友好

2. 同构 CSR，前端路由，丝滑流畅的前端体验。

3. 支持 Typescript、Less 语言，配置开放无黑盒体验。

4. 自带风格统一的 prettier 和 import-sorter 配置。

### 开始

```bash
# 开发环境
yarn dev

# 构建用于csr的spa bundle
yarn build

# 生产环境，启动ssr服务
yarn start
```

### 原理

1. 在浏览器首次访问时，返回已经 ssr 好的 html 字符串(SEO)，并置入用于 csr 的 bundle.js

2. 当 bundle.js 加载并执行后，页面路由行为将由 react-router 托管，不会向后端发请求即变为前端渲染(CSR)。

### 加载速度

由于使用了 csr，所以存在 bundle 过大导致加载阻塞的问题，单 csr 会因为 bundle 加载慢而不能及时渲染出页面，但是：

本项目使用了 ssr + csr 的同构渲染，首次访问直接出页面，而不必等待 bundle 加载完成，

bundle 会在后台加载，加载之后页面将转为 spa 应用。

### 注意

react ssr 的前提是副作用的隔离，所以 ajax、dom 操作等依赖浏览器环境的操作务必放在 useEffect 中！

### Author

saber2pr
