import React from "react"
import "./style.less"
import { Nav } from "../../components"

export interface Blog {}

export const Blog = ({  }: Blog) => {
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
