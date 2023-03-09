import React from "react";
import styles from "../components/Loginpage.module.css";
function Loginpage() {
  return (
    <>
    <div className={`${styles.container}`}>
     
      <div className={`${styles.formbox}`}>
        <h2>Login</h2>
        <form action="">
          <div className={`${styles.inputbox}`}>
            <label htmlFor="email">Email : </label>
            <input type="email" name="" id="email" />
          </div>
          <div className={`${styles.inputbox}`}>
            <label htmlFor="pwd">Password : </label>
            <input type="password" name="" id="pwd" />
          </div>
          <div className={`${styles.login}`}>
            Login width Credentials
          <button className={`${styles.btn}`}>Login</button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
}

export default Loginpage;
