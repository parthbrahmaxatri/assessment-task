import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-item">
        <img src="https://files.codingninjas.in/cn-logo-dark-9824.svg" alt="" />
      </div>
      <div className="footer-item">
        <h4>CODING NINJAS</h4>
        <h5>About Us</h5>
        <h5>Privacy Policy</h5>
        <h5>Terms & Condition</h5>
        <h5>Pricing & Refund Policy</h5>
        <h5>Bug Bounty</h5>
        <h5>Customers</h5>
        <h5>Press Release</h5>
      </div>
      <div className="footer-item">
        <h4>PRODUCTS</h4>
        <h5>Courses</h5>
        <h5>Try courses for free</h5>
        <h5>Career Camp</h5>
        <h5>Hire Talent</h5>
      </div>
      <div className="footer-item">
        <h4>COMMUNITY</h4>
        <h5>CodeStudio</h5>
        <h5>Blog</h5>
        <h5>Events</h5>
        <h5>Campus Ninjas</h5>
        <h5>Affiliate</h5>
      </div>
      <div className="footer-item">
        <h4>FOLLOW US ON</h4>
        <img
          className="social"
          src="https://files.codingninjas.in/0000000000003240.png"
          alt=""
        />
        <img
          className="social"
          src="https://files.codingninjas.in/0000000000003241.png"
          alt=""
        />
        <img
          className="social"
          src="https://files.codingninjas.in/0000000000003245.png"
          alt=""
        />
        <img
          className="social"
          src="https://files.codingninjas.in/0000000000003247.png"
          alt=""
        />
        <img
          className="social"
          src="https://files.codingninjas.in/0000000000003242.png"
          alt=""
        />
        <img
          className="social"
          src="https://files.codingninjas.in/telegram-8247.svg"
          alt=""
        />
        <h4>CONTACT US</h4>
        <div className="flexx">
            <img className="contact" src="https://files.codingninjas.in/0000000000003251.png" alt="" />
            <h5>1800-123-3598</h5>
        </div>

        <div className="flexx">
            <img className="contact" src="https://files.codingninjas.in/0000000000003250.png" alt="" />
            <h5>contact@codingninjas.com</h5>
        </div>
      </div>
    </div>
  );
}

export default Footer;