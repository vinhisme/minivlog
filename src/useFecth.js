import { useState,useEffect } from "react";

const useFectch = (url) => {
    
    const [data, setData] = useState(null)

    const [isLoading, setIsLoading] = useState(true);

    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        fetch(url, {signal: abortCont.signal})
            .then(res => {
                if(!res.ok) {
                    throw Error('could not fetch data from server')
                }
                return res.json();
            })
            .then(data => {
                console.log(data);
                setData(data)
                setIsLoading(false)
                setError(null)
            })
            .catch( err => {
                setIsLoading(false)
                setError(err.message)
            })
            return () => abortCont.abort()
    }, [url])

    return { data, isLoading, error }
}

export default useFectch