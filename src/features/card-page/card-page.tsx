import React from 'react';
import styles from './card-page.module.css';
import { ReactComponent as HalfCircleIcon } from '../../assets/half-circle.svg';
import avatar from '../../assets/avatar.jpg';

export const CardPage: React.FC = () => {
    return (
        <section className={styles.root}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => (
                <article>
                    <header>
                        <p>May 25th 2020</p>
                        <h2>Card tricks are fun</h2>
                    </header>
                    <div className={styles.cardAuthor}>
                        <a href="#">
                            <img src={avatar} alt="" />
                        </a>
                        <HalfCircleIcon className={styles.halfCircle} />
                    </div>
                    <div className={styles.authorName}>
                        <div className={styles.authorNamePrefix}>Author</div>
                        Zhenya Schemelev
                    </div>
                </article>
            ))}
        </section>
    );
};
