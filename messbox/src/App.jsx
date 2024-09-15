import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Plan from './components/Plan/Plan'
import HomeAbout from './components/HomeAbout/HomeAbout'
import Testimonials from './components/Testimonials/Testimonials'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Home />
      <Plan />
      <HomeAbout />
      <Testimonials />
      <Footer />
    </>
  )
}

export default App
