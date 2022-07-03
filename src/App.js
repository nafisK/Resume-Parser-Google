import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Support from "./components/Support"

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Support />
      {/* <Router>
        <Routes>
          <Route path='/' element={} />
          <Route path='/admin' element={AdminSide} />
          <Route path='/about' element={<About/>} />
        </Routes>
      </Router> */}

      {/* <Footer /> */}
    </div>
  )
}

export default App
