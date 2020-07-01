import React from 'react'

import { Nav } from '../../components'
import { useCount } from '../../hooks'
// @ts-ignore
import styles from './style.less'

export interface Home {}

export const Home = ({}: Home) => {
  const [count, exec] = useCount()
  return (
    <div className={styles.Home}>
      <header>
        <Nav />
      </header>
      <main>
        <div>home</div>
        <div>
          <div>count: {count}</div>
          <button onClick={() => exec('add')}>add</button>
          <button onClick={() => exec('sub')}>sub</button>
        </div>
      </main>
      <footer>saber2pr copy right</footer>
    </div>
  )
}
