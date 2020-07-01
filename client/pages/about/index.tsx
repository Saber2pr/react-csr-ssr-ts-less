import React from 'react'

import { Nav } from '../../components'
// @ts-ignore
import styles from './style.less'

export interface About {}

export const About = ({}: About) => {
  return (
    <div className={styles.About}>
      <header>
        <Nav />
      </header>
      <main>about</main>
      <footer>saber2pr copy right</footer>
    </div>
  )
}
