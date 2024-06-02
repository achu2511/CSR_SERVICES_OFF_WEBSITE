// import React from 'react';
import '../css/foot.css'; // Import CSS for styling

const Foot = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-column">
                <p style={{fontSize:'28px',fontWeight:500}}>20+</p>
              <p style={{ color: "#DA916D" }}>PROJECTS</p>
              <p>COMPLETED</p>
                </div>
                <div className="footer-column">
                <p style={{fontSize:'28px',fontWeight:500}}>20+</p>
              <p style={{ color: "#DA916D" }}>HAPPY</p>
              <p>CLIENTS</p>
                </div>
                <div className="footer-column">
                <p style={{fontSize:'28px',fontWeight:500}}>10+</p>
              <p style={{ color: "#DA916D" }}>ACTIVE</p>
              <p>CLIENTS</p>
                </div>
                <div className="footer-column">
                <p style={{fontSize:'28px',fontWeight:500}}>15+</p>
              <p style={{ color: "#DA916D" }}>CUPS OF</p>
              <p>COFFEE</p>
                </div>
            </div>
        </footer>
    );
};

export default Foot;
