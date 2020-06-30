import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import { About, Blog, Home, NotFound } from './pages'

export const Routes = () => (
  <Switch>
    <Route path="/home" component={() => <Home />} />
    <Route path="/blog/:id" component={() => <Blog />} />
    <Route path="/about" component={() => <About />} />
    <Redirect from="/" to="/home" />
    <Route component={() => <NotFound />} />
  </Switch>
)
