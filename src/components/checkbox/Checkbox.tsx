import React from 'react';
import styles from './checkbox.module.css';

const Checkbox: React.FC = (props) => {
    const [isChecked, setIsChecked] = React.useState(false);
    const handleChange = () => {
        setIsChecked(!isChecked);
    };
    return (
        <div>
            <input
                type="checkbox"
                className={styles.checkbox}
                checked={isChecked}
                onChange={handleChange}
            />
        </div>
    );
};

export default Checkbox;
