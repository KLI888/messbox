import React from 'react'
import { IoCallSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

function PlanTwo() {
  return (
    <div className="plan_two">
        <h1>For ordering and enquiries</h1>
        <div className="enquiry_info">
            <div className="contact_number">
              <i><IoCallSharp /></i>
              <p>+91 97656 90192</p>
            </div>
            <div className="contact_number">
            <i><IoCallSharp /></i>
            <p>+91 93706 54083</p>
            </div>
            <div className="contact_number">
              <i>
                <MdEmail />
              </i>
            <p>queries@messbox.in</p>
            </div>
        </div>
    </div>
  )
}

export default PlanTwo
