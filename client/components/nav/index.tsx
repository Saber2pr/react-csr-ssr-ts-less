import React from 'react'
import { Link } from 'react-router-dom'

// @ts-ignore
import styles from './style.less'

export interface Nav {}

export const Nav = ({}: Nav) => {
  return (
    <nav className={styles.Nav}>
      <ul className={styles['Nav-Ul']}>
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
