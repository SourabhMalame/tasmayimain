import React from "react";
import styles from "./BuyFromUsSection.module.css";
import img1 from "../../assets/collection.svg"
import img2 from "../../assets/affordable.svg"
import img3 from "../../assets/support.svg"

const BuyFromUsSection = () => {
    return (
        <div className={styles.sectionContainer}>
            <h2 className={styles.sectionTitle}>Why Buy Cars From Us?</h2>
            <div className={styles.benefitsContainer}>
                <div className={styles.benefit}>
                    <img
                        src={img1}
                        alt="Wide Selection"
                        className={styles.benefitIcon}
                    />
                    <h3>Wide Selection</h3>
                    <p>Choose from a variety of brands, models, and price ranges.</p>
                </div>
                <div className={styles.benefit}>
                    <img
                        src={img2}
                        alt="Affordable Pricing"
                        className={styles.benefitIcon}
                    />
                    <h3>Affordable Pricing</h3>
                    <p>Get the best deals and financing options for your budget.</p>
                </div>
                <div className={styles.benefit}>
                    <img
                        src={img3}
                        alt="Reliable Support"
                        className={styles.benefitIcon}
                    />
                    <h3>Reliable Support</h3>
                    <p>Our experts are here to guide you every step of the way.</p>
                </div>
            </div>
        </div>
    );
};

export default BuyFromUsSection;
