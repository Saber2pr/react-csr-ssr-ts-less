import './app.less'
import 'normalize.css'

import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { Routes } from './routes'
import { store } from './store'

const App = () => {
  useEffect(() => {
    window['__store'] = store
  }, [])
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>
  )
}

ReactDOM.hydrate(<App />, document.querySelector('#root'))
