// App.jsx
import React from 'react'
import Homepage from './Pages/Homepage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SearchPage from './Pages/SearchPage'
import WatchPage from './Pages/WatchPage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/search" element={<SearchPage/>} />
        <Route path="/watch/:id" element={<WatchPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
