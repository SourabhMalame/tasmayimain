import React from "react";
import HeroSection from "../../components/heroSection/HeroSection";
import BuyFromUsSection from "../../components/BuyFromUsSection/BuyFromUsSection"
import styles from "./Home.module.css";
import Brands from "../../components/Brand/Brands";
import Cars from "../../components/Cars/Cars";
import Benefits from "../../components/Benefits/Benefits";
import Questions from "../../components/Questions/Questions";
import Contact from "../../components/Contact/Contact";
import insta from "../../assets/instagram.png";
// import gmail from "../../assets/gmail.png";
import whatsapp from "../../assets/whatapp.png"


const Home = () => {

    const openInstagram = () => {
        window.open("https://www.instagram.com/tasmayi_motors_121/", "_blank");
        // this is insta 
    };

    const openWhatsApp = (number) => {
        const encodedMessage = encodeURIComponent(message);
        const whatsappURL = `https://wa.me/${number}?text=${encodedMessage}`;
        window.open(whatsappURL, "_blank");
        // this is whatapp
    };

    // const sendEmail = () => {
    //     window.location.href = "mailto:tasmayimotors@gmail.com";
    // };

    function name(params) {
        console.log(params)
    }

    return (
        <div className={styles.homeContainer}>
            <div className={styles.sidelogo}>

                {/* Instagram */}
                <img
                    className={styles.sideimg}
                    src={insta}
                    alt="Instagram"
                    onClick={openInstagram}
                    style={{ cursor: 'pointer' }}
                />

                {/* WhatsApp */}
                <img
                    className={styles.sideimg}
                    src={whatsapp}
                    alt="WhatsApp 1"
                    onClick={() => openWhatsApp('+918855831697')}
                    style={{ cursor: 'pointer' }}
                />
              

                {/* Gmail */}
                <img
                    className={styles.sideimg}
                    src={gmail}
                    alt="Gmail"
                    onClick={sendEmail}
                    style={{ cursor: 'pointer' }}
                />
            </div>
            <HeroSection />
            <BuyFromUsSection />
            <Brands />
            <Cars />
            <Benefits />
            <Questions />
            <Contact />
        </div>
    );
};

export default Home;
