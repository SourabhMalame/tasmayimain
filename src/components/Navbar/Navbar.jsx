import React, { useState } from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false); // Function to close menu when clicking a link
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
                    <Link to="/" onClick={closeMenu}>
                        <img className={styles.navlogo} src={logo} alt="Logo" />
                    </Link>
                </div>

                {/* Hamburger Icon */}
                <div className={styles.hamburger} onClick={toggleMenu}>
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

                {/* Navigation Menu */}
                <ul className={`${styles.navMenu} ${menuOpen ? styles.active : ""}`}>
                    <li onClick={closeMenu}>
                        <Link to="/" >Home</Link>
                    </li>
                    <li>
                        <Link to="/login" onClick={closeMenu}>Login</Link>
                    </li>
                    <li>
                        <Link to="/signup" onClick={closeMenu}>Register</Link>
                    </li>
                    <li>
                        <Link to="/about" onClick={closeMenu}>About</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
