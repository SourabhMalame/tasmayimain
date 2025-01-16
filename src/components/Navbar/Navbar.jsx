import React from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/logo.png"

const Navbar = () => {
    return (
        <div className={styles.navbarContainer}>
            {/* Top Section */}
            <div className={styles.topBar}>
                <p>
                    <span>📞 Phone:</span> +91 8855831697
                </p>
                <p>
                    <span>📧 Email:</span> tasmayimotors@gmail.com
                </p>
                <p>
                    <span>🏘 Address:</span> Silver Central Mall, 2nd Floor, Office No. 11, Moshi - 411062
                </p>
            </div>

            {/* Bottom Section */}
            <div className={styles.bottomBar}>
                <div className={styles.logo}>
                    <img className={styles.navlogo} src={logo} alt="" />
                </div>
                <ul className={styles.navMenu}>
                    <li>
                        <a href="/">home</a>
                        <a href="/login">Login</a>
                    </li>

                </ul>
            </div>
        </div>
    );
};

export default Navbar;
