import React from 'react'
import '@/style/global.css'
import HomePage from './pages/HomePage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HelloWorld from './pages/HelloWorld'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/hello-world' element={<HelloWorld />} />
      </Routes>
    </Router>
  )
}

export default App