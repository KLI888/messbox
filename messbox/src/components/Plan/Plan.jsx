import React from 'react'
import './plan.css'
import PlanOne from './PlanOne'
import PlanTwo from './PlanTwo'
import { FaWhatsapp } from "react-icons/fa";

function Plan() {
  return (
    <div className="main_section">
        <div className="plan_heading">
            <h1>Flexible <span>Plans</span> To Suit Your Meal Needs</h1>
            <p>Customize your meal plan from weekly to monthly subscriptions, with options for one or two tiffins daily. Find your perfect match for both your schedule and appetite.</p>
            <div className="plan_types">
                <PlanOne />
                <PlanTwo />
            </div>
            <a href='https://web.whatsapp.com/' target='_blank' className="whatsapp_btn">
              <p><i><FaWhatsapp /></i>Say 'Hi' On<span> Whatsapp!</span></p>
            </a>
        </div>
    </div>
  )
}

export default Plan
