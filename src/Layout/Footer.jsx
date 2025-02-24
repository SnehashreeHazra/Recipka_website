import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
       <footer class="footer">
  	 <div class="container">
  	 	<div class="row">
  	 		<div class="footer-col">
  	 			<h4>About Us</h4>
  	 			<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the </p>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>Ouick Links</h4>
  	 			<ul>
  	 				<li><Link to={'/'}>Home</Link></li>
  	 				<li><Link to={'/contact-us'}>Contact Us</Link></li>
  	 				<li><Link to={'/terms-conditions'}>Terms & Conditions</Link></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col contact_footer">
  	 			<h4>Contact Us</h4>
          <ul>
			    <li>Email:  info@example.com</li>
				<li>Phone: +123 456 7890</li>
				<li>Address: 123 Main St, City, State, Zip</li>
		  </ul>
  	 			{/* <ul>
  	 				<li><a href="#">watch</a></li>
  	 				<li><a href="#">bag</a></li>
  	 				<li><a href="#">shoes</a></li>
  	 				<li><a href="#">dress</a></li>
  	 			</ul> */}
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>follow us</h4>
  	 			<div class="social-links">
  	 				<Link href="#"><i class="fab fa-facebook-f"></i></Link>
  	 				<Link href="#"><i class="fab fa-twitter"></i></Link>
  	 				<Link href="#"><i class="fab fa-instagram"></i></Link>
  	 				<Link href="#"><i class="fab fa-linkedin-in"></i></Link>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>
    </>
  )
}

export default Footer
