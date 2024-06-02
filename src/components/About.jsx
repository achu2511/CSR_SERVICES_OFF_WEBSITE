import '../css/abt.css'
import one from '../images/Group 1000001801.svg'
import two from '../images/Group 1000001802.svg'
const About = () => {
  return (
    <>
    <div className="abt-cont">
        <div className="abt-cont-sub">
            <div className="abt-head">
                <img src={one} alt="" className="abt-head-img" />
                <p className="abt-head-txt" style={{textAlign:'center'}}>About <span style={{color:'rgb(236, 158, 119)'}}>Us</span></p>
            </div>
            <div className="abt-inf-txt">
                <p className="abt-txt1">
                We at <span style={{color:'rgb(236, 158, 119)'}}>CSR consultancy services</span>, wish to bestow to those who believe in us! 
We act as mentor & guide to your success in the business, while you sit back and<span style={{color:'rgb(236, 158, 119)'}}> relax!</span>
                </p>
                <p className="abt-txt1">
                At CSR Consultancy, we are dedicated to <span style={{color:'rgb(236, 158, 119)'}}>transforming financial aspirations into tangible realities</span>. With a commitment to <span style={{color:'rgb(236, 158, 119)'}}>excellence, personalized strategies, and transparent communication</span>, we empower individuals and businesses to navigate the complexities of finance with confidence.<br/><span style={{color:'rgb(236, 158, 119)'}}> Our experienced team </span>is here to guide you every step of the way, ensuring your journey towards financial success is both smooth and rewarding. Discover the difference with <span style={{color:'rgb(236, 158, 119)'}}>CSR Consultancy today.</span>
                </p>

                {/* <p className="abt-txt1"><span style={{color:'rgb(236, 158, 119)'}}>Our experienced team</span> is here to guide you every step of the way, ensuring your journey towards financial success is both smooth and rewarding. Discover the difference with <span style={{color:'rgb(236, 158, 119)'}}>CSR Consultancy today.</span></p> */}
            <img src={two} alt="" className="abt-end-img" />
            </div>
        </div>
    </div>
    </>
  )
}

export default About