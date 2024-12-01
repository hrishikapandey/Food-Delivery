import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <h1 className={styles.footerLogo}>Order<span className={styles.uk}>UK</span></h1>
        <div className={styles.footerSections}>
          <div>
            <p>Get Exclusive Deals in Your Inbox</p>
            <input
              type="email"
              placeholder="youremail@gmail.com"
              className={styles.emailInput}
            />
            <button className={styles.subscribeButton}>Subscribe</button>
          </div>
          <div>
            <h4>Legal Pages</h4>
            <ul>
              <li>Terms and conditions</li>
              <li>Privacy</li>
              <li>Cookies</li>
            </ul>
          </div>
          <div>
            <h4>Important Links</h4>
            <ul>
              <li>Get help</li>
              <li>Add your restaurant</li>
              <li>Sign up to deliver</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
