/*
 * @Author: saber2pr
 * @Date: 2019-10-27 19:38:05
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-10-27 19:42:30
 */
import "./hook"

import Koa from "koa"
import { readFile } from "fs"
import { join } from "path"
import { promisify } from "util"
import { createHTML } from "./template"
import { CONFIG } from "./config"

import React from "react"
import { renderToString } from "react-dom/server"
import { StaticRouter } from "react-router-dom"
import { Routes } from "../client/routes"

const app = new Koa()

// static
app.use(async (ctx, next) => {
  if (ctx.url.startsWith(CONFIG.staticPath)) {
    ctx.res.statusCode = 200
    const buffer = await promisify(readFile)(join(process.cwd(), ctx.url))
    ctx.res.end(buffer)
  } else {
    await next()
  }
})

// routes
app.use(ctx => {
  const view = renderToString(
    <StaticRouter location={ctx.url === "/" ? CONFIG.index : ctx.url}>
      <Routes />
    </StaticRouter>
  )
  ctx.res.statusCode = 200
  ctx.res.end(createHTML(view))
})

app.listen(CONFIG.port, () => console.log(`http://localhost:${CONFIG.port}`))
