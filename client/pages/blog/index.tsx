import React from 'react'

import { Nav } from '../../components'
// @ts-ignore
import styles from './style.less'

export interface Blog {}

export const Blog = ({}: Blog) => {
  return (
    <div className={styles.Blog}>
      <header>
        <Nav />
      </header>
      <main>blog</main>
      <footer>saber2pr copy right</footer>
    </div>
  )
}
