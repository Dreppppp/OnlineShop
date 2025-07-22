import { useState, useEffect } from 'react';
import { RequestTypes } from './useFetch';

export default function useFewFetch<T = unknown>(
  urls: string[],
  requestType: RequestTypes = RequestTypes.GET
) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [data, setData] = useState<T[] | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      setIsLoading(true);
      setError('');

      try {
        const responses = await Promise.all(
          urls.map(async (url) => {
            const res = await fetch(url, {
              method: requestType,
              signal: controller.signal,
            });
            if (!res.ok) {
              throw new Error(`HTTP error! status: ${res.status}`);
            }
            return res.json();
          })
        );
        setData(responses);
      } catch (err) {
        if (err instanceof DOMException && err.name === 'AbortError') {
          console.log('Request was aborted');
        } else {
          setError((err as Error).message);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    return () => controller.abort();
  }, [urls, requestType]);

  return { isLoading, error, data };
}
