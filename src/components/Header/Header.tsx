
import styles from './Header.module.css';
import { useState, useEffect} from "react";
import eurIcon from '../../icons/eur.png';
import usaIcon from '../../icons/usa.png';
import plnIcon from '../../icons/pln.png';
import CurrencyRate from "../CurrencyRate/CurrencyRate.tsx";
import React from "react";


const Header = () => {



    const [rateOfEUR, setRateOfEUR] =useState<number>(1);
    const [rateOfPLN, setRateOfPLN] =useState<number>(1);
    const [rateOfUSD, setRateOfUSD] =useState<number>(1);

    
        
     useEffect( () => {
            fetch('https://api.getgeoapi.com/v2/currency/convert?api_key=f6b4e51076021add87f21dacc5237a8ec3929a04&from=UAH')
            .then ( res => { return res.json()})
            .then (data => { 
                const rateOfEUR = Math.round((1/data.rates.EUR.rate)*100000)/100000;
                setRateOfEUR(rateOfEUR);
                const rateOfPLN = Math.round((1/data.rates.PLN.rate)*100000)/100000;
                setRateOfPLN(rateOfPLN);
                const rateOfUSD= Math.round((1/data.rates.USD.rate)*100000)/100000;
                setRateOfUSD(rateOfUSD);
            })
            
        }, [])

    
    return (
        <header className={styles.header}>
           <CurrencyRate icon={usaIcon} nameOfCurrency={"Долар США"} exchangeRate={rateOfUSD}/>
           <CurrencyRate icon={eurIcon} nameOfCurrency={"Євро"} exchangeRate={rateOfEUR}/>
           <CurrencyRate icon={plnIcon} nameOfCurrency={"Злотий"} exchangeRate={rateOfPLN}/>
        </header>
    )

}
export default Header;