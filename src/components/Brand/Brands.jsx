import React from "react";
import styles from "./Brands.module.css";
import brand1 from "../../assets/brand1.png"
import brand2 from "../../assets/brand2.png"
import brand3 from "../../assets/brand3.png"
import brand4 from "../../assets/brand4.png"
import brand5 from "../../assets/brand5.png"
import brand6 from "../../assets/brand6.png"
import brand7 from "../../assets/brand7.png"
import brand8 from "../../assets/brand8.png"
import brand9 from "../../assets/brand9.png"
import brand10 from "../../assets/brand10.png"
import brand11 from "../../assets/brand11.png"
import brand12 from "../../assets/brand12.png"
const Brands = () => {
    // List of brand logos (add actual image paths to "assets" folder)
    const brandLogos = [
        brand1,
        brand2,
        brand3,
        brand4,
        brand5,
        brand6,
        brand7,
        brand8,
        brand9,
        brand10,
        brand11,
        brand12


    ];

    return (
        <div className={styles.brandsContainer}>
            <h2 className={styles.title}>Available Brands</h2>
            <div className={styles.grid}>
                {brandLogos.map((logo, index) => (
                    <div className={styles.brand} key={index}>
                        <img src={`${logo}`} alt={`Brand ${index + 1}`} className={styles.brandImage} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Brands;
