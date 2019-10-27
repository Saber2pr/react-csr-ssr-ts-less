import React from "react"
import { Route, Redirect, Switch } from "react-router-dom"
import { Home, Blog, About, NotFound } from "./pages"

export const Routes = () => (
  <Switch>
    <Route path="/home" component={() => <Home />} />
    <Route path="/blog" component={() => <Blog />} />
    <Route path="/about" component={() => <About />} />
    <Redirect from="/" to="/home" />
    <Route component={() => <NotFound />} />
  </Switch>
)
