import React from "react";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div class="footer">
        <div class="contain">
          <div class="icons">
            <i class="fab fa-facebook"></i>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-instagram"></i>
            <i class="fab fa-youtube"></i>
          </div>
          <button type="button" class="btn">
            Get in Touch
          </button>
        </div>
      </div>
      <div class="footer2">
        <div class="contain">
          <p>© Castor Consult AG | All rights reserved</p>
          <div class="contact">
            <span>
              <i class="fas fa-phone-alt"></i>
              +41 (0)78 949 18 90
            </span>
            <span>
              <a href="mailto:castorconsult@gmail.com">
                <i class="fas fa-envelope"></i>
              </a>{" "}
              Email us
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
