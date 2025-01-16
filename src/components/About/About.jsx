import React from "react";
import styles from "./About.module.css";

const About = () => {
    return (
        <div className={styles.container}>
            {/* About Section */}
            <section className={styles.about}>
                <h2>About Us</h2>
                <p>
                    Welcome to <strong>Tasmayi Motors</strong>, your premier destination for luxury cars in Pune.
                    We specialize in providing world-class vehicles that combine elegance, performance, and cutting-edge technology.
                    With a commitment to excellence and customer satisfaction, we ensure every experience with us is truly exceptional.
                </p>
                <p>
                    Established under the leadership of <strong>Aman Mahindrakar</strong>, Tasmayi Motors has earned a reputation for delivering
                    premium cars and top-notch services. Our showroom is a hub for car enthusiasts and buyers seeking the best in luxury.
                </p>
                <p>
                    From brand-new vehicles to expert guidance in loan financing and insurance, we are here to simplify the process of owning your dream car.
                </p>
                <p><strong>Proprietor:</strong> Aman Mahindrakar</p>
                <p><strong>Phone:</strong> +91 8855831697, +91 8087381445</p>
                <p><strong>Email:</strong> tasmayimotors@gmail.com</p>
                <p><strong>Address:</strong> Silver Central Mall, 2nd Floor, Office No. 11, Moshi - 411062</p>
            </section>

            {/* Services Section */}
            <section className={styles.services}>
                <h2>Services</h2>
                <p>At Tasmayi Motors, we offer:</p>
                <ul>
                    <li>Luxury car sales</li>
                    <li>Hassle-free loan financing</li>
                    <li>Comprehensive vehicle insurance solutions</li>
                </ul>
            </section>

            {/* Brands Section */}
            <section className={styles.brands}>
                <h2>Brands We Offer</h2>
                <p>We proudly showcase some of the most prestigious car brands in the world:</p>
                <ul>
                    <li>Lexus</li>
                    <li>Land Rover</li>
                    <li>Mercedes</li>
                    <li>Hummer</li>
                    <li>Toyota</li>
                    <li>Skoda</li>
                    <li>Kia</li>
                    <li>Hyundai</li>
                    <li>Tata</li>
                    <li>Volkswagen</li>
                    <li>Maruti Suzuki</li>
                </ul>
            </section>
        </div>
    );
};

export default About;
