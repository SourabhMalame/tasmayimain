import React, { useState } from "react";
import styles from "./Questions.module.css";

const Questions = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const questions = [
        {
            id: 1,
            question: "How do I contact support?",
            answer: "You can email us at support@example.com or use our contact page."
        },
        {
            id: 2,
            question: "What brands do you offer?",
            answer: "We offer a curated selection of top luxury brands. Contact us for more information on specific brands."
        },
        {
            id: 3,
            question: "How do you ensure product quality?",
            answer: "All our products go through a rigorous quality check to ensure they meet the highest luxury standards."
        },
        {
            id: 4,
            question: "Where are you located?",
            answer: "We are located at 123 Luxury Avenue, City Name, Country."
        },
        {
            id: 5,
            question: "Do you offer personalized services?",
            answer: "Yes, we offer personalized consultations and services. Contact us for more details."
        }
    ];
    

    const toggleAnswer = (index) => {
        if (activeIndex === index) {
            setActiveIndex(null);  // Hide answer if it's already open
        } else {
            setActiveIndex(index);  // Show the clicked answer
        }
    };

    return (
        <section className={styles.questionsSection}>
            <h2 className={styles.heading}>Frequently Asked Questions</h2>
            <div className={styles.questionsList}>
                {questions.map((item, index) => (
                    <div
                        key={item.id}
                        className={styles.questionCard}
                        onClick={() => toggleAnswer(index)}
                    >
                        <div className={styles.question}>
                            <h3 className={styles.questionTitle}>{item.question}</h3>
                            <span className={styles.toggleIcon}>
                                {activeIndex === index ? "-" : "+"}
                            </span>
                        </div>
                        {activeIndex === index && (
                            <p className={styles.answer}>{item.answer}</p>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Questions;
