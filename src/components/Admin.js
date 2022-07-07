import React from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"
import Table from "./Table"

export default function Admin_() {
  return (
    <div class='flex flex-col h-screen justify-between'>
      <header class='h-10 bg-red-500'>
        <Navbar />
      </header>
      <main class='mb-auto h-10 mt-16'>
        <Table />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
