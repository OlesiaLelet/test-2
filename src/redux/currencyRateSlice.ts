import {createSlice, PayloadAction} from '@reduxjs/toolkit';



export interface Rate {
    name: string,
    rate: number,
    id: number,
}

export interface InitialState  {
   UAH :Rate [],
   EUR: Rate [],
   USD: Rate [],
   PLN: Rate [],
   
}
export interface RateOfCurrByUAH {

        EUR: number,
        USD: number,
        PLN: number,
    
}

const initialState: InitialState = {

    UAH: [
        {
            name: "UAH",
            rate: 1,
            id:1
        },
        {
            name: "USD",
            rate: 0,
            id:2

        },
        {
            name: "EUR",
            rate: 0,
            id:3
        },
        {
            name: "PLN",
            rate: 0,
            id:4
        }

    ],
    USD: [
        {
            name: "UAH",
            rate: 0,
            id:1
        },
        {
            name: "USD",
            rate: 1,
            id:2
        },
        {
            name: "EUR",
            rate: 0,
            id:3
        },
        {
            name: "PLN",
            rate: 0,
            id:4
        }

    ],
    EUR:  [
        {
            name: "UAH",
            rate: 0,
            id:1
        },
        {
            name: "USD",
            rate: 0,
            id:2
        },
        {
            name: "EUR",
            rate: 1,
            id:3
        },
        {
            name: "PLN",
            rate: 0,
            id:4
        }

    ],
    PLN: [
        {
            name: "UAH",
            rate: 0,
            id:1
        },
        {
            name: "USD",
            rate: 0,
            id:2
        },
        {
            name: "EUR",
            rate: 0,
            id:3
        },
        {
            name: "PLN",
            rate: 1,
            id:4
        }

    ],
     
} 




export const currencyRateSlice = createSlice({
    name: 'currencyRate',
    initialState,
     reducers: {
        updateRate (state, actions: PayloadAction<RateOfCurrByUAH>) {
            
                const currencyEUR = state.UAH.find(item => {return item.name==="EUR"}) ;
                const currencyUSD = state.UAH.find(item => {return item.name==="USD"});
                const currencyPLN = state.UAH.find(item => {return item.name==="PLN"});
                
                if (currencyEUR && currencyUSD && currencyPLN) {

                    currencyEUR.rate = actions.payload.EUR;
                    currencyUSD.rate = actions.payload.USD;
                    currencyPLN.rate = actions.payload.PLN;
                }
                     

                
               
                
                
                
                
                
                

             
        }
     }
     
     })
  
  export const {updateRate} = currencyRateSlice.actions
  
  export default currencyRateSlice.reducer;