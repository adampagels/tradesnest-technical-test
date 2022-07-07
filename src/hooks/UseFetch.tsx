import { useState, useEffect } from "react";

type APIResponse = {
  data: object;
  error: object;
  loading: boolean;
};

const useFetch = (url: string): APIResponse => {
  const [data, setData] = useState<object>({});
  const [error, setError] = useState<object>({});
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    const getAPIData = async () => {
      setLoading(true);
      try {
        const apiResponse = await fetch(url);
        const json = await apiResponse.json();
        setData(json);
      } catch (error) {
        if (error instanceof Error) {
          setError(error);
        }
      }
      setLoading(false);
    };

    getAPIData();
  }, [url]);

  return { data, error, loading };
};

export default useFetch;
