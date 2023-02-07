import { useEffect, useState } from 'react';
import axios, { Method } from 'axios';

export function useFetchData(url: string, type: Method) {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<any>()

    useEffect(() => {
        const controller = new AbortController()
        // const source = axios.CancelToken.source();
        const fetchData = async () => {
            try {
                const { data: response } = await axios.options(url, {
                    method: type,
                    signal: controller.signal,
                    // cancelToken: source.token
                });
                setData(response);
            } catch (error) {
                if (!controller.signal.aborted) setError(`${error}`);
                // if (axios.isCancel(error)) setError(`${error}`)
            } finally { setLoading(false) }
        };

        fetchData();
        return () => {
            controller.abort()
            // source.cancel()

        }
    }, [url, type]);

    return {
        data,
        loading,
        error,
    };
};
