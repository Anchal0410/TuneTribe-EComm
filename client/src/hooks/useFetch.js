import {fetchDataFromApi} from "../utils/api";
// import { useEffect,useState } from "react";

// const useFetch = async(endpoint)=>{
//     const [data,setData] = useState();
//     // console.log("usefetch");
//     // console.log(data);
//     useEffect(()=>{
//         makeApiCall();
//     },[endpoint]);
    
//     const makeApiCall = async ()=>{
//         const res = await fetchDataFromApi(endpoint);
//         setData(res.data);
//         console.log("ummuu");
//         console.log(res.data);
//         return res.data;
//     }
//     console.log("Fetch done")
//     console.log(data);
//     return {data:data};
// }

// export default useFetch;  

import { useState, useEffect } from 'react';

const useFetch = (endpoint) => {
    const [data, setData] = useState(null);  // Initialize data as null or any initial state you prefer
    const [loading, setLoading] = useState(true); // Track loading state
    const [error, setError] = useState(null); // Track any error state

    useEffect(() => {
        const makeApiCall = async () => {
            try {
                const res = await fetchDataFromApi(endpoint);
                setData(res.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        if (endpoint) {
            makeApiCall();
        }
    }, [endpoint]);

    return { data, loading, error };
};
export default useFetch;