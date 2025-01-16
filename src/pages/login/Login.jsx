import React, { useState } from "react";
import styles from "./Login.module.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Email: ${email}, Password: ${password}`);
    };

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h1 className={styles.title}>Welcome Back!</h1>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="email" className={styles.label}>Email</label>
                        <input
                            type="email"
                            id="email"
                            className={styles.input}
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="password" className={styles.label}>Password</label>
                        <input
                            type="password"
                            id="password"
                            className={styles.input}
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className={styles.button}>Login</button>
                </form>
                <p className={styles.footerText}>
                    Don’t have an account? <a href="/signup" className={styles.link}>Sign Up</a>
                </p>
            </div>
        </div>
    );
};

export default Login;
