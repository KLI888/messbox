import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Plan from './components/Plan/Plan'
import HomeAbout from './components/HomeAbout/HomeAbout'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Plan />
      <HomeAbout />
    </>
  )
}

export default App
