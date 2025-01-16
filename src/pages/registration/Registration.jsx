import React, { useState } from "react";
import styles from "./Registration.module.css";

const Registration = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        alert(`Registration successful! Welcome, ${formData.name}!`);
    };

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h1 className={styles.title}>Create an Account</h1>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="name" className={styles.label}>Full Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className={styles.input}
                            placeholder="Enter your full name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="email" className={styles.label}>Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className={styles.input}
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="password" className={styles.label}>Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className={styles.input}
                            placeholder="Enter a strong password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="confirmPassword" className={styles.label}>Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            className={styles.input}
                            placeholder="Confirm your password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className={styles.button}>Register</button>
                </form>
                <p className={styles.footerText}>
                    Already have an account? <a href="/login" className={styles.link}>Login</a>
                </p>
            </div>
        </div>
    );
};

export default Registration;
