
import React from "react";
import styles from './CurrencyRate.module.css';

const CurrencyRate = ({icon, exchangeRate, nameOfCurrency}) => {

    return (
        <div className={styles.container}>
            <div className={styles.boxForIcon}>
                <img className={styles.icon} src={icon} alt="flag_icon"></img>
            </div>
            <div className={styles.rateOfC}>
                <p className={styles.nameOfCurrency}>{nameOfCurrency} </p>
                <p className={styles.rate}>{exchangeRate}</p>
            </div>
            

        </div>
    )
}
export default CurrencyRate;