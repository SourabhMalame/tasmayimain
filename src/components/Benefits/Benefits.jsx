import React from "react";
import styles from "./Benefits.module.css";

const Benefits = () => {
    const benefits = [
        {
            id: 1,
            title: "Easy to Use",
            description: "Our platform is designed with user-friendliness in mind, making it easy for anyone to use without prior training."
        },
       
        {
            id: 3,
            title: "Fast Performance",
            description: "Experience lightning-fast performance with optimized processes and advanced technology that delivers speed and efficiency."
        },
        {
            id: 4,
            title: "Affordable Pricing",
            description: "Get the best value for your money with our competitive and transparent pricing models, without any hidden costs."
        },
        {
            id: 5,
            title: "Secure & Reliable",
            description: "Your data is our top priority. We use advanced encryption and security protocols to ensure the safety of your information."
        }
    ];

    return (
        <section className={styles.benefitsSection}>
            <h2 className={styles.heading}>Why Choose Us?</h2>
            <div className={styles.benefitsGrid}>
                {benefits.map(benefit => (
                    <div className={styles.benefitCard} key={benefit.id}>
                        <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                        <p className={styles.benefitDescription}>{benefit.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Benefits;
