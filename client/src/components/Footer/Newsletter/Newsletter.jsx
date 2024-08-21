import "./Newsletter.scss";
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Newsletter = () => {
  return (
    <div className="newsletter-section">
      <div className="newsletter-content">
        <div className="small-text">Newsletter</div>
        <span className="big-text">Sign Up for latest updates and offer</span>
        <div className="form">
          <input type="text" placeholder="Email Address" />
          <button>Subscribe</button>
        </div>
        <div className="text">
          Will be used in accordance with our privacy policy
        </div>
        <div className="social-icons">
          <div className="icon">
            <FaFacebookF size={14} />
          </div>
          <div className="icon">
            <FaTwitter size={14} />
          </div>
          <div className="icon">
            <FaInstagram size={14} />
          </div>
          <div className="icon">
            <FaLinkedinIn size={14} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
