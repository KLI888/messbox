import React from 'react'
import './homeAbout.css'
import { assets } from '../../assets/assets'
function HomeAbout() {
  return (
    <div className="main_section">
      <div className="home_about">
        <div className="home_about_heading">
          <p>Meal at your place, <span>Messbox!</span></p>

        </div>
        <div className="about_one">
          <div className="about_left">
            <div className="about_img">
              <img className='border_one' src={assets.border_one} alt="svg 1" />
              <img src="https://www.onlymess.in/_next/image?url=%2Fimages%2Flanding%2F2.jpg&w=3840&q=75" alt="" />
            </div>
          </div>
          <div className="about_right">
            <h1>Find best quality <span>food mess</span> near you locality!</h1>
            <p>Have you ever wandered here and there when it came to your hunger while being fairly new to the city? Not anymore!</p>
            <a href="#">Find mess!</a>
          </div>
        </div>
        <div className="about_one">
          
          <div className="about_right">
            <h1>Get your tiffin delivered <span>at your place,</span> coming soon to your city!</h1>
            <p>Tired of spending hours daily to get there, just to eat? Not anymore, we got that sorted too!</p>
            <a href="#">See how!</a>
          </div>
          <div className="about_left">
            <div className="about_img_two">
              <img className='border_one' src={assets.border_two} alt="svg 1" />
              <img src="https://www.onlymess.in/_next/image?url=%2Fimages%2Flanding%2F4.jpg&w=3840&q=75" alt="" />
            </div>
          </div>
        </div>
        <div className="about_one">
          <div className="about_left">
            <div className="about_img">
              <img className='border_one' src={assets.border_three} alt="svg 1" />
              <img src="https://www.onlymess.in/_next/image?url=%2Fimages%2Flanding%2F5.jpg&w=3840&q=75" alt="" />
            </div>
          </div>
          <div className="about_right">
            <h1>Manage your <span>mess transactions, </span>without any stress! </h1>
            <p>Cut out all the manual procedures and manage your mess transactions with us, coming soon!</p>
            {/* <a href="#">Find mess!</a> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeAbout
