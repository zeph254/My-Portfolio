import { useState } from 'react'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Experience from './pages/Experience'
import Contact from './pages/Contact'
import Skills from './pages/Skills'
import Layout from './components/Layout'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="projects" element={<Projects/>}/>
        <Route path="experience" element={<Experience />} />
        <Route path="contact"element={<Contact/>}/>
        <Route path="skills" element={<Skills/>}/>
      </Route>
    </Routes>
  </BrowserRouter>   
  )
}

export default App
