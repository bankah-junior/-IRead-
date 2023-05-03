import { useState, useEffect } from "react";

// creating a custom hook
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    // run when certain values change
    useEffect(() => {
        const abortCont = new AbortController();

        setTimeout(() => {
            fetch(url, { signal: abortCont.signal })    // AbortController associating with this fetch
            .then(res => {
                if(!res.ok) {
                    throw Error('Could not fetch data for that result');
                } else {
                    return res.json();
                }
                
            })
            .then((data) => {
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch((err) => {
                if (err.name === 'AbortError') {
                    console.log('Fetch aborted');
                } else {
                    setError(err.message);
                    setIsPending(false);
                }
            })
        }, 1000);

        return () => abortCont.abort(); // Aborting whatever fetch it is associating with
    }, [url]);

    return { data, isPending, error }
}

export default useFetch;