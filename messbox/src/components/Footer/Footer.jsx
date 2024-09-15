import React from 'react'
import './footer.css'
import { assets } from '../../assets/assets'
function Footer() {
  return (
    <footer className="footer">
      <div className="footer_left">
        <div className="footer_img">
          <img src={assets.whiteLogo} alt="" />
          <p>queries@messbox.in</p>
        </div>
      </div>
      <div className="footer_right">
        <div className="footer_career">
          <h1>Career</h1>
          <p><i class='bx bx-shopping-bag'></i> Apply At MessBox</p>
        </div>
        <div className="footer_socials">
          <h1>Socials</h1>
          <p><i class='bx bxl-instagram'></i> Instagram</p>
          <p><i class='bx bxl-twitter'></i> Twitter</p>
          <p><i class='bx bxl-linkedin'></i> Linkedin</p>
        </div>
        <div className="footer_career">
          <h1>Pages</h1>
          <p>Waitlist</p>
          <p>About</p>
        </div>

      </div>
    </footer>
  )
}

export default Footer
