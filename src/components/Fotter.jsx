import React from "react";
import "../css/Fotter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FaLinkedin, FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <div className="fotter">
        <div className="fotter-contain">
          <span className="fotter-ele">SHOPIFY</span>
          <span className="fotter-next-ele">Provide  Create  Conquer</span>
        </div>
        <div className="terms-condition">
          <span className="termsofservice">Terms of Service</span>
          <span className="privacypolicy">Privacy Policy</span>
          <span className="refundpolicy">Refund Policy</span>
        </div>
        <div className="footer-parent">
          <div className="icons-footer">
          <a href="https://twitter.com/PRIMAAI_123" target="_blank" rel="noopener noreferrer" className='icon-is'>
            <FontAwesomeIcon icon={faTwitter}  className="footer-icons" />
          </a>
          <a href="https://www.linkedin.com/in/yourLinkedinUsername" target="_blank" rel="noopener noreferrer" className='icon-is'>
            <FaLinkedin  className="footer-icons" />
          </a>
                
         <a href="https://github.com/Prima-Ai/Prima-Ai" target="_blank" rel="noopener noreferrer" className='icon-is'>
            <FaGithub className="footer-icons" />
        </a>
          </div>
          <div className="copyrightprima">
            <span className="cpy">Copyright © 2023</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
