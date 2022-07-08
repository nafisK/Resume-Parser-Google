import React from "react"
import Front from "./Front"
import Process from "./Process"
import Support from "./Support"
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
