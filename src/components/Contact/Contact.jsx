import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
    return (
        <div className={styles.contactContainer}>
            <h1 className={styles.title}>Tasmayi Motors</h1>
            <p className={styles.subtitle}>Ultra Luxury Vehicles</p>

            <div className={styles.info}>
                <p>
                    <strong>Proprietor:</strong> Aman Mahindrakar
                </p>
                <p>
                    <strong>Phone:</strong> +91 8855831697, +91 8087381445
                </p>
                <p>
                    <strong>Email:</strong> <a href="mailto:tasmayimotors@gmail.com">tasmayimotors@gmail.com</a>
                </p>
                <p>
                    <strong>Address:</strong>Silver Central Mall, 2nd Floor, Office No. 11, Moshi,Pune - 411062
                </p>
            </div>

            <div className={styles.services}>
                <h2>Services</h2>
                <p>We deal in brand new vehicles, loan finance, and insurance.</p>
            </div>

            <div className={styles.brands}>
                <h2>Brands We Offer</h2>
                <ul>
                    <li>Lexus</li>
                    <li>Toyota</li>
                    <li>Mahindra</li>
                    <li>Tata</li>
                    <li>Maybach</li>
                    <li>Land Rover</li>
                    <li>Hummer</li>
                    <li>BMW</li>
                    <li>Mercedes</li>
                    <li>Cadillac</li>
                </ul>

            </div>
        </div>
    );
};

export default Contact;
