/*
 * @Author: tohsaka888
 * @Date: 2022-07-28 11:04:15
 * @LastEditors: tohsaka888
 * @LastEditTime: 2022-07-29 10:55:44
 * @Description: 路由配置
 */

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