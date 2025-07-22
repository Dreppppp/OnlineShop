import { useState, useEffect } from "react";

export enum RequestTypes {
  GET = "GET",
  PUT = "PUT",
  POST = "POST",
  DELETE = "DELETE"
}

export default function useFetch<T = unknown >(url: string, requestType: RequestTypes = RequestTypes.GET){
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [data, setData] = useState<T | null>(null);


  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError("");

      try {
        const response = await fetch(url, {
          method: requestType,
        //   signal: controller.signal
        });

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const json = await response.json();
        setData(json);
      } catch (err) {
        if (err instanceof DOMException && err.name === "AbortError") return;
        setError("Something went wrong while doing fetch request. Try later :(");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    // return () => controller.abort();
  }, [url, requestType]);

  return { isLoading, error, data };
};


