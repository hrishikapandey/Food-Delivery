import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Form.module.css";
import burgerImage from "../assets/Art.png";
import Logo from "../assets/logo (3).png";

const Form = () => {
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate(); // Hook for navigation

  const toggleForm = () => {
    setIsLogin((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirect to the homepage
    navigate("/home");
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1 className={styles.logo}>
          <img src={Logo} alt="Company Logo" />
        </h1>
        <h2 className={styles.welcome}>
          {isLogin ? "Welcome Back 👋" : "Welcome 👋"}
        </h2>
        <p className={styles.tagline}>
          {isLogin
            ? "Log in to continue enjoying our services."
            : "Today is a new day. It's your day. You shape it. Sign up to start ordering."}
        </p>
        <form className={styles.form} onSubmit={handleSubmit}>
          {!isLogin && (
            <>
              <label className={styles.label}>
                Name
                <input
                  className={styles.input}
                  type="text"
                  placeholder="eg. John A"
                />
              </label>
              <label className={styles.label}>
                Phone Number
                <input
                  className={styles.input}
                  type="tel"
                  placeholder="Enter your 10 digit mobile number"
                />
              </label>
            </>
          )}
          <label className={styles.label}>
            Email
            <input
              className={styles.input}
              type="email"
              placeholder="Example@email.com"
            />
          </label>
          <label className={styles.label}>
            Password
            <input
              className={styles.input}
              type="password"
              placeholder="Enter your password"
            />
          </label>
          <button className={styles.button} type="submit">
            {isLogin ? "Log In" : "Continue"}
          </button>
        </form>
        <p className={styles.signin}>
          {isLogin ? (
            <>
              Don't have an account?{" "}
              <a href="#" className={styles.signinLink} onClick={toggleForm}>
                Sign up
              </a>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <a href="#" className={styles.signinLink} onClick={toggleForm}>
                Sign in
              </a>
            </>
          )}
        </p>
      </div>

      <div className={styles.heroContainer}>
        <img src={burgerImage} alt="Delicious burgers" className={styles.heroImage} />
      </div>
    </div>
  );
};

export default Form;
