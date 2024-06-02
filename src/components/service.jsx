
import '../App.css'
import one from '../images/fluent-emoji-high-contrast_puzzle-piece.png' 
import deal from '../images/deal_11352526.png'
import three from '../images/magnifying-glass.png'
import four from '../images/briefcase.png'
import five from '../images/shuttle.png'
import seven from '../images/Line 10.svg'
import six from '../images/dotwarrow.png'
const Service = () => {
  return (
    <>
        <div className='ser-cont'>
            <div className="ser-black">
                <div className="ser-header">
                    <img src={seven} className='head-line ani'/>
                    <div className='hei-ser'>
                        <h1 className="ser-head-white">Why<span style={{color:'rgb(218,145,109)'}}>&nbsp;Us?</span> </h1>
                    </div>
                </div>

                <div className="ser-cont-grid">

                <div className="ser-content-contt">
                    <div className='ser-content'>
                        <div className="img-circle">
                            <img src={one} alt="" className="ser-cont-image-lft " />
                        </div>
                        <p className="ser-cont-new-txt1">
                        <strong>Tailored Expertise: </strong> Benefit from personalized strategies crafted to suit your unique needs and goals.
                        </p>
                    </div>
                </div>

                <div className="ser-content-contt">
                    <div className='ser-content'>
                        <div className="img-circle lft-two">
                            <img src={deal} alt="" className="ser-cont-image-lft  " />
                        </div>
                        <p className="ser-cont-new-txt1">
                        <strong> Trusted Partnership: </strong> We're more than consultants; we're dedicated partners committed to your success.

                        </p>
                    </div>
                </div>

                <div className="ser-content-contt">
                    <div className='ser-content'>
                        <div className="img-circle lft-three">
                            <img src={three} alt="" className="ser-cont-image-lft th " />
                        </div>
                        <p className="ser-cont-new-txt1">
                        <strong> Comprehensive Solutions: </strong> From tax compliance to wealth management, our holistic approach ensures all your financial needs are met under one roof.

                        </p>
                    </div>
                </div>
                <div className="ser-content-contt">
                    <div className='ser-content'>
                        <div className="img-circle lft-four">
                            <img src={four} alt="" className="ser-cont-image-lft th " />
                        </div>
                        <p className="ser-cont-new-txt1">
                        <strong> Industry Experience: </strong>With years of industry expertise, our team brings invaluable insights and knowledge to every client engagement.

                        </p>
                    </div>
                </div>
                </div>
                <div className="ser-content-contt otha">
                    <div className='ser-content'>
                        <div className="img-circle lft-five">
                            <img src={five} alt="" className="ser-cont-image-lft th " />
                        </div>
                        <p className="ser-cont-new-txt1">
                        <strong> Proven Results:</strong>Join countless satisfied clients who have achieved financial success and peace of mind with our services.

                        </p>
                    </div>
                </div>
                <h2 className='ser-quot'> " Choose CSR Consultancy for a seamless journey towards financial prosperity! "</h2>
                
                <img className='dotwarrow ani' src={six} alt='default' style={{display: 'block',marginLeft:'auto'}}/>
            </div>
        </div>
    </>
  )
}

export default Service