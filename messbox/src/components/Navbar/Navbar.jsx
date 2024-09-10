import React from 'react'
import './navbar.css'
import { assets } from '../../assets/assets'
function Navbar() {
  return (
    <section className='main_section'>
        <div className="navbar">
            <div className="nav_left">
                <img src={assets.logo} alt="" />
            </div>
            <div className="nav_right">
                <ul>
                    <li>Locate Mess</li>
                    <li>Add Mess</li>
                    <li>About</li>
                    <a className="btn login_btn" >LOGIN</a>
                </ul>
            </div>    
        </div>
    </section>
  )
}

export default Navbar
