import { useEffect,useState } from "react";

function useCurrency(currency){
    const [data,setdata]=useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res)=> res.json())
        .then((res)=> setdata(res[currency]))
        console.log(data)
    },[currency])
    return data
}
export default useCurrency;

// https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json
// https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/usd.jsons
// https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/