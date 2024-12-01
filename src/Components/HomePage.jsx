import React from "react";
import styles from "./HomePage.module.css";
import orange from "../assets/orange.png";
import girlimg from "../assets/girlimg.png";
import girlimg2 from "../assets/girlimg2.png";


const HomePage = () => {
  return (
    <div className={styles.container}>
      {/* Top Promo Bar */}
      <div className={styles.promoBar}>
        Get 5% Off your first order, <span className={styles.promoCode}>Promo: ORDER5</span>
        <span className={styles.Location}>Regent Street, A4, A4201, London</span>
      </div>

      {/* Navbar */}
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          Order<span className={styles.uk}>UK</span>
        </div>
        <ul className={styles.navLinks}>
          <li>Home</li>
          <li>Browse Menu</li>
          <li>Special Offers</li>
          <li>Restaurants</li>
          <li>Track Order</li>
        </ul>
        <div className={styles.navActions}>
          <button className={styles.cartButton}>My Cart</button>
          <button className={styles.loginButton}>Login/Signup</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroText}>
        <p>Order restaurant food, takeaway, and groceries.</p>
          <h1>
            Feast Your Senses,<br></br> <span className={styles.orangeText}>Fast and Fresh</span>
          </h1>
        
          <div className={styles.searchBox}>
            <input
              type="text"
              placeholder="e.g. EC4R 3TE"
              className={styles.searchInput}
            />
            <button className={styles.searchButton}>Search</button>
          </div>
        </div>
        <div className={styles.heroImage}>
          <img
            src={girlimg2} // Replace with your image
            alt="Hero"
          />
        </div>
  <div className={styles.heroSteps}>
  <div className={styles.orangeContainer}>
    <img src={orange} alt="Progress steps background" className={styles.orangeImage} />
    <img src={girlimg} alt="Girl" className={styles.girlImage} />
    <div className={styles.step}>
      <p>1</p>
      <span className={styles.stepText}>We've received your order!</span>
    </div>
    <div className={styles.step}>
      <p>2</p>
      <span className={styles.stepText}>Order Accepted!</span>
    </div>
    <div className={styles.step}>
      <p>3</p>
      <span className={styles.stepText}>Your rider's nearby!</span>
    </div>
  </div>
</div>

      
      </section>

      {/* Deals Section */}
      <section className={styles.dealsSection}>
        <h2>Up to -40% 🎉 Order.uk exclusive deals</h2>
        <div className={styles.filters}>
          <button>Vegan</button>
          <button>Sushi</button>
          <button className={styles.activeFilter}>Pizza & Fast Food</button>
          <button>Others</button>
        </div>
        <div className={styles.dealsGrid}>
          <div className={styles.dealCard}>
            <img
              src="https://via.placeholder.com/300x200"
              alt="Chef Burgers London"
            />
            <h3>Chef Burgers London</h3>
            <span className={styles.discount}>-40%</span>
          </div>
          <div className={styles.dealCard}>
            <img
              src="https://via.placeholder.com/300x200"
              alt="Grand AI Cafe London"
            />
            <h3>Grand AI Cafe London</h3>
            <span className={styles.discount}>-20%</span>
          </div>
          <div className={styles.dealCard}>
            <img
              src="https://via.placeholder.com/300x200"
              alt="Butterbrot Cafe London"
            />
            <h3>Butterbrot Cafe London</h3>
            <span className={styles.discount}>-17%</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
