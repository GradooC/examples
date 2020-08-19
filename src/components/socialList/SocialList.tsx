import React from 'react';
import { ReactComponent as FacebookIcon } from '../../assets/facebook.svg';
import { ReactComponent as GoogleIcon } from '../../assets/google.svg';
import { ReactComponent as InstagramIcon } from '../../assets/instagram.svg';
import { ReactComponent as LinkedinIcon } from '../../assets/linkedin.svg';
import { ReactComponent as TwitterIcon } from '../../assets/twitter.svg';

import styles from './socialList.module.css';

const items = [
    {
        Icon: FacebookIcon,
    },
    {
        Icon: GoogleIcon,
    },
    {
        Icon: InstagramIcon,
    },
    {
        Icon: LinkedinIcon,
    },
    {
        Icon: TwitterIcon,
    },
];

const SocialList: React.FC = () => {
    return (
        <ul className={styles.list}>
            {items.map(({ Icon }) => (
                <li>
                    <a href="#">
                        <div className={styles.fa}>
                            <Icon />
                        </div>
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default SocialList;
