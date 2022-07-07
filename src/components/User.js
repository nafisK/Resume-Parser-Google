import React from "react"
import Navbar from "./Navbar"
import Front from "./Front"
import Process from "./Process"
import Support from "./Support"
import Footer from "./Footer"
import Upload from "./Upload"

export default function User() {
  return (
    <div>
      <Front />
      <Upload />
      <Process />
      <Support />
    </div>
  )
}
