import './style.less'

import React from 'react'
import { Link } from 'react-router-dom'

export interface Nav {}

export const Nav = ({}: Nav) => {
  return (
    <nav className="Nav">
      <ul className="Nav-Ul">
        <li>
          <Link to="/home">主页</Link>
        </li>
        <li>
          <Link to="/blog/123">博客</Link>
        </li>
        <li>
          <Link to="/about">关于</Link>
        </li>
      </ul>
    </nav>
  )
}
