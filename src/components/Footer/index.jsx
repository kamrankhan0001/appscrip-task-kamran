import React from "react";
import Image from "next/image";
//import "../Footer/footer.css";
import './Footer.css';

const Footer = () => {
  return (
    <footer className="custom-footer" id="about">
      <div className="custom-container">
        {/* Subscription Section */}
        <div className="footer-block">
          <div className="footer-section subscribe">
            <h3>BE THE FIRST TO KNOW</h3>
            <p>Sign up for updates from mettä muse.</p>
            <form className="subscribe-form">
              <input type="email" placeholder="Enter your e-mail..." />
              <button type="submit">SUBSCRIBE</button>
            </form>
          </div>

          {/* Contact Section */}
          <div className="footer-section contact" id="contact">
            <h4>CONTACT US</h4>
            <div>
              <p>+44 221 133 5360</p>
              <a href="mailto:customercare@mettamuse.com">
                customercare@mettamuse.com
              </a>
            </div>
            <br />
            <h4>CURRENCY</h4>
            <div
              style={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Image src="/usa.png" alt="USA Flag" width="25" height="25" />
              <p>USD</p>
            </div>
            <small>
              Transactions will be completed in Euros and a currency reference
              is available on hover.
            </small>
          </div>
        </div>

        <hr style={{ width: "100%", border: "1px solid gray" }} />

        {/* Links Section */}
        <div className="footer-block">
          <div className="footer-section links">
            <div className="footer-column">
              <h4>mettä muse</h4>
              <ul>
                <li>
                  <a href="#about">About Us</a>
                </li>
                <li>
                  <a href="#">Stories</a>
                </li>
                <li>
                  <a href="#artisians">Artisans</a>
                </li>
                <li>
                  <a href="#boutiques">Boutiques</a>
                </li>
                <li>
                  <a href="#contact">Contact Us</a>
                </li>
                <li>
                  <a href="#eu">EU Compliance Docs</a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>QUICK LINKS</h4>
              <ul>
                <li>
                  <a href="#">Orders & Shipping</a>
                </li>
                <li>
                  <a href="#">Join/Login as a Seller</a>
                </li>
                <li>
                  <a href="#">Payment & Pricing</a>
                </li>
                <li>
                  <a href="#">Return & Refunds</a>
                </li>
                <li>
                  <a href="#">FAQs</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-section social">
            <h4>FOLLOW US</h4>
            <div className="social-links">
              <Image
                src="/media.png"
                alt="Social Media Links"
                width="60"
                height="25"
              />
            </div>
            <h4>mettä muse ACCEPTS</h4>
            <div className="payment-methods">
              <Image
                src="/payment.png"
                alt="Payment Methods"
                width="500"
                height="35"
              />
            </div>
          </div>
        </div>
      </div>

    
      <div className="footer-bottom">
        <p>Copyright © 2023 mettamuse. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;