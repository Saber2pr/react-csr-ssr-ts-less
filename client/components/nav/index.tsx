import React from "react"
import "./style.less"
import { Link } from "react-router-dom"

export interface Nav {}

export const Nav = ({  }: Nav) => {
  return (
    <nav className="Nav">
      <ul className="Nav-Ul">
        <li>
          <Link to="/home">主页</Link>
        </li>
        <li>
          <Link to="/blog">博客</Link>
        </li>
        <li>
          <Link to="/about">关于</Link>
        </li>
      </ul>
    </nav>
  )
}
