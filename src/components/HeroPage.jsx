import React from "react";
import styles from '../components/HeroPage.module.css';
import image1 from "../components/images/1.png"
import image2 from "../components/images/2.png"
import image3 from "../components/images/3.png"
import "../stylesheets/typography.css"

function HeroPage(){
    return(
        <div className={`${styles.boxContainer}`}>
            <div className={`${styles.box1}`}>
            <div className={`${styles.loginContainer}`}>
            <div className={`${styles.image}`}>
                <img className="a" src={image1} alt="bank"></img>
            </div>
            <div className={`${styles.content}`}>
                    <h4>FASTER</h4>
                    <h2>College transactions</h2>
                    <h3>are now made faster</h3>
            </div>
            </div>
            <div className={`${styles.loginContainer2}`}>
                <div className={`${styles.image}`}>
                    <img className="b" src={image2} alt="transaction"></img>
                </div>
            <div className={`${styles.content}`}>
                    <h4>EASIER</h4>
                    <h2>Scholarships info</h2>
                    <h3>can be accessed easily</h3>
            </div>
            </div>
            </div>
            <div className={`${styles.box2}`}>
                <div className={`${styles.image}`}>
                    <img className="c" src={image3} alt="fasterPayments"></img>
                </div>
            <div className={`${styles.box2Content}`}>
                    <h4>SMARTER</h4>
                    <h2>Fee payments</h2>
                    <h3>at your fingertips!</h3>
            </div>
            </div>
        </div>
    )
}
export default HeroPage;