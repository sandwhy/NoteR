import React from 'react'
import {BrowserRouter, Routes, Route, Redirect} from "react-router-dom"

import Navbar from './components/Navbar/navbar'
import Hero from "./components/Hero/hero"

const App = () => {
  return (
      <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path='/' element={<Hero />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App