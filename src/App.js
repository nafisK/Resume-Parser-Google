import "./App.css"
import User from "./components/User"
import Admin from "./components/Admin"
import Error404 from "./components/error404"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<User />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
    </Router>
  )
}

export default App
