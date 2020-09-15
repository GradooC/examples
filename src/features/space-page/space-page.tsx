import React from 'react';
import styles from './space-page.module.css';

export const SpacePage: React.FC = () => {
    return (
        <div className={styles.page}>
            <div className={styles.root}>
                <div className={styles.earth}></div>
                <div className={styles.reflex}></div>
                <div className={styles.sunOrbit}>
                    <div className={styles.sun}></div>
                </div>
            </div>
        </div>
    );
};
