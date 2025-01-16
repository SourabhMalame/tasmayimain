import React, { useState } from "react";
import styles from "./Questions.module.css";

const Questions = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const questions = [
        {
            id: 1,
            question: "How can I contact customer support?",
            answer: "You can contact customer support via our contact page or email us at support@example.com."
        },
        {
            id: 2,
            question: "What is your return policy?",
            answer: "We offer a 30-day return policy on most of our products. For more details, check our return policy page."
        },
        {
            id: 3,
            question: "How can I track my order?",
            answer: "You can track your order by visiting our tracking page and entering your order ID."
        },
        {
            id: 4,
            question: "Do you offer international shipping?",
            answer: "Yes, we offer international shipping to many countries. Please check the shipping policy page for details."
        },
        {
            id: 5,
            question: "Can I modify my order after placing it?",
            answer: "Orders can be modified within the first hour of placing them. Please contact us immediately if you need to make any changes."
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
