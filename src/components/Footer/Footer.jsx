import React from "react";
import styles from "./Footer.module.css";
import logo from "../../assets/logo.png"

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.verticalSections}>
                <div className={styles.verticalSection}>
                    <div className={styles.footerlogodiv}>
                        <img className={styles.footerlogo} src={logo} alt="" />

                    </div>
                </div>

                <div className={styles.verticalSection}>
                    <h4 className={styles.sectionTitle}>Contact Us</h4>
                    <p>Email: tasmayimotors@gmail.com</p>
                    <p>Phone: +91 8855831697</p>
                    <p>Address: Silver Central Mall, 2nd Floor, Office No. 11, Moshi,Pune - 411062

                    </p>
                </div>

                <div className={styles.verticalSection}>
                    <h4 className={styles.sectionTitle}>Follow Us</h4>
                    <ul className={styles.socialMediaList}>
                        <li><a href="#" className={styles.socialLink}>Facebook</a></li>
                        <li><a href="#" className={styles.socialLink}>Twitter</a></li>
                        <li><a href="#" className={styles.socialLink}>Instagram</a></li>
                        <li><a href="#" className={styles.socialLink}>LinkedIn</a></li>
                    </ul>
                </div>
            </div>

            <div className={styles.horizontalSections}>
                <div className={styles.horizontalSection}>
                    <h4 className={styles.sectionTitle}>About Us</h4>
                    <p>Welcome to Tasmayi Motors, where your car-buying journey is smooth, enjoyable, and personalized. Located in the heart of Pune, we are committed to providing you with a premium experience when choosing your next vehicle. Whether you're searching for the latest models, certified pre-owned cars, or a reliable second-hand vehicle, Tasmayi Motors offers a wide selection to suit every need and budget.

                    </p>
                </div>



            </div>

            <div className={styles.copyRight}>
                <p>&copy; 2025 Your Company. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
