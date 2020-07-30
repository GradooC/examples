import React from 'react';
import './app.css';
import styles from './app.module.css';

function App() {
    return (
        <>
            <div>Тоже new, хули</div>
            <div className={styles.btn}>
                <div className="btn"></div>
            </div>
            <div className="btn red">
                <div className="red"></div>
            </div>
        </>
    );
}

export default App;
