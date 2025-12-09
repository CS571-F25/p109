import { HashRouter, Route, Routes } from 'react-router'
import Home from './pages/Home'
import './App.css'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<Home initialPage="about-me" />} />
        <Route path="/projects" element={<Home initialPage="projects" />} />
        <Route path="/experience" element={<Home initialPage="experience" />} />
      </Routes>
    </HashRouter>
  )
}

export default App
