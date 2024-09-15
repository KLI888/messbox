import React from 'react'
import './home.css'

function Home() {


    return (
        <section className='main_section'>
            
            <div className="home_container">
                <div className="home_left">
                    <div className="home_heading">
                        <h1>Choose your mess,</h1>
                        <h1>Swaad anusar!</h1>
                    </div>
                    <div className="home_info">
                        <p>Effortlessly explore nearby mess options, choose the perfect mess that suits your taste preferences seamlessly!</p>
                    </div>
                    <div className="home_find_mess">
                        <div className="find_mess_city">
                            <select id="city">
                                <option value="">Choose a city</option>
                                <option value="New York">New York</option>
                                <option value="Los Angeles">Los Angeles</option>
                                <option value="Chicago">Chicago</option>
                                <option value="Houston">Houston</option>
                            </select>
                        </div>
                        <div className="find_mess_city">
                            <select id="city">
                                <option value="">Choose Locality</option>
                                <option value="New York">New York</option>
                                <option value="Los Angeles">Los Angeles</option>
                                <option value="Chicago">Chicago</option>
                                <option value="Houston">Houston</option>
                            </select>
                        </div>
                        <div className="btn_color find_mess_btn">Find</div>
                    </div>
                    <div className="home_scale">
                        <div className="scale_sec">
                            <i class='bx bx-buildings'></i>
                            <p>1 City</p>
                        </div>
                        <div className="scale_sec">
                            <i class='bx bx-store-alt' ></i>                            
                            <p>5+ Partner Messes</p>
                        </div>
                        <div className="scale_sec">
                            <i class='bx bx-user'></i>                            
                            <p>60+ Users</p>
                        </div>
                    </div>
                </div>
                <div className="home_right">
                    <div className="btn_color try_mess_btn">Try online meals!</div>
                </div>
            </div>
        </section>
    )
}

export default Home
