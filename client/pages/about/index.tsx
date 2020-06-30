import './style.less'

import React from 'react'

import { Nav } from '../../components'

export interface About {}

export const About = ({  }: About) => {
  return (
    <div className="About">
      <header>
        <Nav />
      </header>
      <main>about</main>
      <footer>saber2pr copy right</footer>
    </div>
  )
}
