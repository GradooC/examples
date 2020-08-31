import React from 'react';
import styles from './button.module.css';

const Button: React.FC = () => {
    return (
        <button className={styles.button}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            button
        </button>
    );
};

export default Button;
