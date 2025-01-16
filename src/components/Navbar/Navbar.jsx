import React, { useState } from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

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
                    <Link to="/"><img className={styles.navlogo} src={logo} alt="Logo" /></Link>
                </div>
                <div className={styles.hamburger} onClick={toggleMenu}>
                    {/* Hamburger Icon */}
                    {!menuOpen ? (
                        <>
                            <span className={styles.bar}></span>
                            <span className={styles.bar}></span>
                            <span className={styles.bar}></span>
                        </>
                    ) : (
                        <span className={styles.close}>✕</span>
                    )}
                </div>

                <ul className={`${styles.navMenu} ${menuOpen ? styles.active : ""}`}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        {/* <a href="/login">Login</a> */}
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/signup">Register</Link>

                    </li>
                </ul>
            </div>

        </div>
    );
};

export default Navbar;
