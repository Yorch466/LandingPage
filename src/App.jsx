import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LandingHome } from './views/LandingHome'
import './App.css'
import { AboutUs } from './views/AboutUs'


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path = '/' element={<LandingHome/>}  />
        <Route path = '/aboutus' element={<AboutUs/>}/>
      </Routes>
    </BrowserRouter>

  )
}

export default App
