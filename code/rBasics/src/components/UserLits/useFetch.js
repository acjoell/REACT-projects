import { useState, useEffect, useMemo } from 'react';

export function useFetch(baseUrl, options = {}, params = null) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // 🔧 Construir URL final con params
  const url = useMemo(() => {
    if (!params) return baseUrl;

    const search = new URLSearchParams(params).toString();
    return `${baseUrl}?${search}`;
  }, [baseUrl, params]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(url, options);
        if (!response.ok) throw new Error(`Error: ${response.status}`);
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    if (url) fetchData();
  }, [url, options]); // useMemo for Options

  return { data, isLoading, error };
}