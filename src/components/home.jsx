// import React from 'react'

import Navbar from "./nav"
import '../css/home.css'
import one from '../images/unsplash_lyiKExA4zQA.svg'
import two from '../images/1305457_159452-OVE359-121-removebg.png'
function Home() {
  
  return (
    <>
        <Navbar/>
        <div className="main-flx">
            <div className="h-main-head">
                <div className="h-main-head-cont">
                    <h1 className="h-main-head-txt tt"><strong>Accelerate Your Financial Journey with CSR Consultancy Services: <span style={{color:'rgb(236, 158, 119)'}}>Your Bridge to Prosperity!</span></strong></h1>
                      <p className="h-main-sub-txt t">From personalized strategies to hassle-free services,<br/> we empower individuals and businesses to achieve long-term prosperity. <br/>Explore our expertise and build a lasting partnership for your financial success.</p>
                    <div className="sml-btn">Get Started</div>
                </div>
            </div>
            <div className="image-container">
                <img src={one} alt=""  className="handshake"/>
                <img src={two} alt="" className="business-image" />
            </div>
        </div>
        {/* <div>Home</div> */}
    </>
  )
}

export default Home;
