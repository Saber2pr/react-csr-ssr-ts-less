import './hook'

import bodyParser from 'body-parser'
import compression from 'compression'
import cookieParser from 'cookie-parser'
import express from 'express'
import session from 'express-session'
import { readFile } from 'fs'
import proxy from 'http-proxy-middleware'
import path from 'path'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router-dom'
import { promisify } from 'util'

import { Routes } from '../client/routes'
import { store } from '../client/store'
import { CONFIG } from './config'

const ReadFile = promisify(readFile)

async function main() {
  const app = express()

  // ssr模板渲染函数
  const template = await ReadFile(CONFIG.template).then(res => res.toString())
  const renderHTML = (content: string) =>
    template.replace(CONFIG.tplPoint, content)

  // 压缩
  app.use(compression())

  app.use(
    bodyParser.urlencoded({
      extended: false,
    })
  )

  // 需要转发cookie
  // app.use(cookieParser())
  // app.use(
  //   session({
  //     secret: '8023',
  //     // cookie: {maxAge: 60000},
  //     resave: false,
  //     saveUninitialized: true,
  //   })
  // )

  // api代理
  // app.use(
  //   '/api',
  //   proxy({
  //     target: API,
  //     changeOrigin: true,
  //     pathRewrite: {
  //       '^/api': '',
  //     },
  //   })
  // )

  // 图片等静态资源
  app.use(
    CONFIG.publicStaticPath,
    express.static(path.join(process.cwd(), CONFIG.publicStaticPath))
  )

  // csr
  app.use(
    CONFIG.publicPath,
    express.static(path.join(process.cwd(), CONFIG.publicPath))
  )

  // ssr
  app.use((req, res) => {
    const url = req.url
    const view = ReactDOMServer.renderToString(
      <Provider store={store}>
        <StaticRouter location={url === '/' ? CONFIG.index : url}>
          <Routes />
        </StaticRouter>
      </Provider>
    )
    res.end(renderHTML(view))
  })

  app.listen(CONFIG.port, () =>
    console.log(`success listen at port:${CONFIG.port}......`)
  )
}

main().catch(err => console.log(err))
