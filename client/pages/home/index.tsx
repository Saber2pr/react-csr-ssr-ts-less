import React from "react"
import "./style.less"
import { Nav } from "../../components"

export interface Home {}

export const Home = ({  }: Home) => {
  return (
    <div className="Home">
      <header>
        <Nav />
      </header>
      <main>home</main>
      <footer>saber2pr copy right</footer>
    </div>
  )
}
