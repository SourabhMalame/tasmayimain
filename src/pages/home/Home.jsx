import React from "react";
import HeroSection from "../../components/heroSection/HeroSection";
import BuyFromUsSection from "../../components/BuyFromUsSection/BuyFromUsSection"
import styles from "./Home.module.css";
import Brands from "../../components/Brand/Brands";
import Cars from "../../components/Cars/Cars";
import Benefits from "../../components/Benefits/Benefits";
import Questions from "../../components/Questions/Questions";
import Contact from "../../components/Contact/Contact";

const Home = () => {
    return (
        <div className={styles.homeContainer}>
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
