import React from "react";
import styles from "./Brands.module.css";

import toyoto from "../../assets/Toyoto.png"
import lexus from "../../assets/lexus.png"
import maybach from "../../assets/maybach.png"
import landrover from "../../assets/land-rover.png"
import bmw from "../../assets/BMW.png"
import mahindra from "../../assets/mahindra.png"
import tata from "../../assets/tata.png"
import hummer from "../../assets/hummer.png"
import cadillac from "../../assets/cadillac.png"
import mercedes from "../../assets/mercedes.png"



//  hammer , Bmw Tata Cadilac creta fortunar 700 wagan meback land rover volvo
// toyota lexus mahindra tata maruti 

 



const Brands = () => {
    // List of brand logos (add actual image paths to "assets" folder)
    const brandLogos = [
        lexus,
        toyoto,
        mahindra,
        tata,
        maybach,
        landrover,
        hummer,
        bmw,
        mercedes,
        cadillac
        

       


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
