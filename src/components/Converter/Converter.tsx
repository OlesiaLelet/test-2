
import directions from '../../icons/bi-directional-arrow.png';
import React from "react";
import { useState, useEffect } from 'react';
import styles from './Converter.module.css';





const Converter = (  ) => {

    type Option = {value: string, label: string};
    type Options = Option[];

    const options: Options = [
      { value: 'UAH', label: 'Українська гривня' },
      { value: 'USD', label: 'Долар США' },
      { value: 'EUR', label: 'Євро' },
    ]


    const [exchangeRate, setRate] =useState<number>(1);

    const [amount, setAmount] = useState <number>(1);
    
    const [amountInFromCurrency, setAmountInFromCurrency] = useState<Boolean>(true);

    const [from, setFrom] = useState<string>("USD");
    const [to, setTo] = useState <string> ("UAH");
    
   let toAmount: number =1;
   let fromAmount:number =1;

   if (amountInFromCurrency) {
     fromAmount= amount ;
     toAmount = amount * exchangeRate;
  } else {
     toAmount= amount;
     fromAmount= Math.round ((amount / exchangeRate)*100000) / 100000;
     
  }

  useEffect( () => {
    fetch(`https://api.getgeoapi.com/v2/currency/convert?api_key=f6b4e51076021add87f21dacc5237a8ec3929a04&from=${from}&to=${to}`)
    .then ( res => { return res.json()})
    .then (data => { console.log(data);
    
      setRate(data.rates[to].rate)
     })
     .catch(error => {
      console.error (error);
    }
    )
}, [from, to])

    
const handlerChange = (event) => {
    const {value} = event.target;
      setAmount(value);
      setAmountInFromCurrency(true)
      
         

    }
const handlerChange2= (event) => {
    const {value} = event.target;
    setAmount(value);
    setAmountInFromCurrency(false)
    }

const handlerInput1 = (event) => {
    const {value} = event.target;
    setFrom(value);
}
      
const handlerInput2 = (event) => {
    const {value} = event.target;
    setTo(value);
}



    return (
        <section className={styles.converter}>
            <div className={styles.firstCurrency}>
              <select name="curencies1" id='curencies' onChange={handlerInput1}  value={from}>
                {options.map(option => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
    

              <input onChange={handlerChange} name='input1' value={fromAmount} type='number'></input>
            </div>
            <img className={styles.directionIcon} src={directions} alt='arrows' ></img>

            <div className={styles.firstCurrency}>

            <select name="curencies1" id='curencies' onChange={handlerInput2}  value={to}>
              {options.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
           ))}
            </select>
              <input onChange={handlerChange2} name="input2"  value={toAmount} type='number'></input>
            </div>

        </section>
    )
}
export default Converter;