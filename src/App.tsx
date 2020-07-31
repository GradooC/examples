import React from 'react';
import moment from 'moment';
import addDays from 'date-fns/addDays'
import styles from './app.module.css';

function App() {
    const add1New = () => 2 + 2;
    console.log('App -> moment', moment().add('1', 'days').toDate());
    console.log('App -> fns', addDays(new Date(), 1));
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
