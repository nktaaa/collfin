import React, { Component } from 'react';
import styles from '../components/Nav.module.css';

export const Nav = () => {
    return(
        <div className={`${styles.navContainer}`}>
           <div className={`${styles.navItems}`}>
            <h1>CollFin</h1>
           </div>
           <div className={`${styles.navLogo}`}>
              <a href="#" className={`${styles.icon}`}>FAQs</a>
              <a href="#" className={`${styles.icon}`}><i className="fa-solid fa-user"></i></a>
           </div>
           
        </div>
    )
}