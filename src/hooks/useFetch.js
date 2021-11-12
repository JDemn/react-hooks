import { useEffect, useRef, useState } from "react"

export const useFetch = (url) => {
    const isMounted = useRef(true);

    const [state, setstate] = useState({ data: null, loading: true, error: null });

    //Manteniendo la referencia a useRef is mounted
    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    }, [])

    useEffect(() => {
        //apenas carge la petición regresas a el objeto a los valores iniciales
        setstate({
            data: null,
            loading: true,
            error: null,
        });

        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (isMounted.current) {
                    setstate({
                        loading: false,
                        error: null,
                        data
                    })
                }
            });
    }, [url])

    return state
}
