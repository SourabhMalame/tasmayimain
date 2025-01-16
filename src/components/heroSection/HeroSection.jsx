import React from "react";
import styles from "./HeroSection.module.css";
import heroimg from "../../assets/buycar.svg"

const HeroSection = () => {
    return (
        <div className={styles.heroContainer}>
            {/* <img className={styles.heroimg} src={heroimg} alt="" /> */}
            <div className={styles.heroContent}>
                <h1 className={styles.heroTitle}>Drive Your Dream Car Today</h1>
                <p className={styles.heroSubtitle}>
                    Explore our wide selection of premium cars and unbeatable offers.
                </p>
                <button className={styles.heroButton}>Explore Cars</button>
            </div>
        </div>
    );
};

export default HeroSection;
