import React from 'react'
import './testimonials.css'
function Testimonials() {
    const testomonials = [
        {
            img: "https://www.onlymess.in/images/testimoni/rushi.jpg",
            name: "Sanket Wani",
            college: "COEP Student",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam vitae beatae, quasi voluptate odio atque."
        },
        {
            img: "https://www.onlymess.in/images/testimoni/devendra.jpg",
            name: "Pavan Shimpi",
            college: "JSPM Student",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam vitae beatae, quasi voluptate odio atque."
        },
        {
            img: "https://www.onlymess.in/images/testimoni/w2.png",
            name: "Anuj bagde",
            college: "JSPM Student",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam vitae beatae, quasi voluptate odio atque."
        },
        {
            img: "https://www.onlymess.in/images/testimoni/sumit.png",
            name: "Sidharth Patil",
            college: "COEP Student",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam vitae beatae, quasi voluptate odio atque."
        }
        ,
        {
            img: "https://www.onlymess.in/images/testimoni/sumit.png",
            name: "Athrav Ughade",
            college: "COEP Student",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam vitae beatae, quasi voluptate odio atque."
        }
    ]

    return (
        <div className="main_section">
            <div className="testomonials_container">
                <div className="testomonials_heading">
                    <h1>Testimonials</h1>
                </div>
                <div className="testomonials">
                    <div className="testomonials_content">
                        {testomonials.map((item, index) => {
                            return <div className="testomonials_card">
                                <div className="user_info">
                                    <img src={item.img} alt="" />
                                    <h2>{item.name} <br /><span>{item.college}</span></h2>
                                </div>
                                <div className="user_desc_star">
                                    <p>{`"${item.desc}"`}</p>
                                </div>
                                <div className="user_rating">
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                </div>
                            </div>
                        })}

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Testimonials
