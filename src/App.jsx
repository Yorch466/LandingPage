import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LandingHome } from './views/LandingHome'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path = '/' element={<LandingHome/>}  />
      </Routes>
    </BrowserRouter>

  )
}

export default App
