import { useCallback, useEffect, useState } from "react";

export const useFetch = ({ endPoint }) => {
  const url = `https://localhost:44355/api/Library/${endPoint}`;

  const [dataState, setDataState] = useState({
    data: [],
    loading: true,
    error: null,
  });

  const executeApi = useCallback(async () => {
    try {
      const res = await fetch(url);

      if (!res.ok) throw new Error(res.statusText);

      const dataResponse = await res.json();

      setDataState((prev) => ({
        ...prev,
        loading: false,
        data: dataResponse,
      }));
    } catch (error) {
      setDataState((prev) => ({
        ...prev,
        loading: false,
        error: error.message,
      }));
    }
  }, []);

  useEffect(() => {
    if (dataState.data.length === 0) executeApi();
  }, []);

  return {
    ...dataState,
  };
};
