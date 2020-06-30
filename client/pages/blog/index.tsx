import './style.less'

import React from 'react'

import { Nav } from '../../components'

export interface Blog {}

export const Blog = ({  }: Blog) => {
  // const [] = u
  return (
    <div className="Blog">
      <header>
        <Nav />
      </header>
      <main>blog</main>
      <footer>saber2pr copy right</footer>
    </div>
  )
}
