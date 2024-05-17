import { useEffect, useState } from "react";

export default function useCurrency(currency){
    const [data, setData] = useState({})
    useEffect(()=>{
        async function fetchCurrencyData(){
            try {
                const response = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.min.json`)
                const data = await response.json()
                setData(data[currency])
            } catch (error) {
                console.log(`Error Occured:- ${error}`);
            }
        }
        fetchCurrencyData()
    },[currency])

    return data
}