import  { useState } from 'react';
import '../css/nav.css'; // Import CSS file for styling
import one from '../images/Group 1000001807 (1).svg'
const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className="n-head-cont">
        <img src={one} alt="" className='logo-main'/>
        {/* <div className="n-logo-txt"><strong>CSR Consultancy</strong></div> */}
        <div className={`n-box ${showMenu ? 'active' : ''}`} onClick={toggleMenu}>
          <div className="n-box-txt">&#9776;</div> {/* Hamburger icon */}
        </div>
        <div className={`n-menu ${showMenu ? 'show' : ''}`}>
          <div className="n-txt">About Us</div>
          <div className="n-txt">Our Services</div>
          <div className="n-txt">Why Us?</div>
          <div className="n-txt">Customer Reviews</div>
          <div className="n-box-txtt">
            <div className="n-txt-t">Contact Us</div>
          </div>
          <div className="n-box n-contact">
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
