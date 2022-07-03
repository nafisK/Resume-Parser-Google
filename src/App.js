import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <div>
      <Router>
        <Routes>
          {/* <Route path='/' element={} /> */}
          {/* <Route path='/admin' element={AdminSide} /> */}
          {/* <Route path='/about' element={<About/>} /> */}
        </Routes>
      </Router>

      {/* <Footer /> */}
    </div>
  )
}

export default App
