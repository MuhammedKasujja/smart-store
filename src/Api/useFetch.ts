import { useEffect, useState } from "react";

export function useFetch(url: string) {

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState()
    const [error, setError] = useState()

    useEffect(() => {
        const controller = new AbortController()
        setLoading(true)
        fetch(url, { signal: controller.signal })
            .then(async (res) => setData(await res.json()))
            .catch(setError)
            .finally(() => setLoading(false))

        return () => {
            controller.abort
        }

    }, [url])

    return { loading, data, error }
}