
import './Footer.css'
export default function Footer() {
  return (
    <div style={{width:'100%',overflow:'hidden'}}>
<footer className="footer-distributed">

			<div className="footer-left">

				<h3>CSR<span> Consultancy Services</span></h3>

				<p className="footer-links">
					<a href="#" className="link-1">Home</a>
					
					<a href="#">About us</a>
				
					<a href="#">Why us?</a>
				
					<a href="#">Services we provide</a>
					<a href="#">Reviews</a>
					
					<a href="#">Contact Us</a>
				</p>

				<p className="footer-company-name">CSR 2024</p>
			</div>

			<div className="footer-center">

				<div>
					<i className="fa fa-map-marker"></i>
					<p>Chennai and Hosur</p>
				</div>

				<div>
					<i className="fa fa-phone"></i>
					<p>+91 8660467150 , 
+91 88701 35598</p>
				</div>

				<div>
					<i className="fa fa-envelope"></i>
					<p><a href="mailto:support@company.com">support@company.com</a></p>
				</div>

			</div>

			<div className="footer-right">

				<p className="footer-company-about">
					<span>About the csr</span>
					Discover the difference with CSR Consultancy today.
				</p>

				

			</div>

		</footer>
    </div>
  );
}
