import React from 'react'
import './homeAbout.css'
import { assets } from '../../assets/assets'
function HomeAbout() {
  return (
    <div className="main_section">
        <div className="home_about">
            <div className="home_about_heading">
                <p>Meal at your place, Messbox!</p>
                <div className="about_one">
                    <div className="about_left">
                      <div className="about_img">
                          <img src={assets.border_one} alt="svg 1" />
                          <img src="https://www.onlymess.in/_next/image?url=%2Fimages%2Flanding%2F2.jpg&w=3840&q=75" alt="" />
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeAbout
