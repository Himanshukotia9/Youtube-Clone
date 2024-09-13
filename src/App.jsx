import React from 'react'
import Homepage from './Pages/Homepage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SearchPage from './Pages/SearchPage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/search" element={<SearchPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
