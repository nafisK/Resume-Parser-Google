import "./App.css"
import Navbar from "./components/Navbar"
import Front from "./components/Front"
import Process from "./components/Process"
import Support from "./components/Support"
import Footer from "./components/Footer"
import Upload from "./components/Upload"

function App() {
  return (
    <div>
      <Navbar />
      <Front />
      <Upload />
      <Process />
      <Support />
      <Footer />
    </div>
  )
}

export default App
