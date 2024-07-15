import { useCallback, useState } from "react";

export const useFetch = () => {
  const [infoState, setInfoState] = useState({
    loading: true,
    error: null,
  });

  const executeApi = useCallback(
    async ({ endPoint, method = "GET", body = null, queryParams = {} }) => {
      try {
        let url = `https://localhost:44355/api/Library/`;
        url += endPoint;
        if (Object.keys(queryParams).length > 0) {
          const queryString = Object.keys(queryParams)
            .map(
              (key) =>
                `${encodeURIComponent(key)}=${encodeURIComponent(
                  queryParams[key]
                )}`
            )
            .join("&");
          url += `?${queryString}`;
        }
        const res = await fetch(url, {
          method,
          headers: {
            "Content-Type": "application/json",
          },
          body: body ? JSON.stringify(body) : null,
        });

        if (!res.ok) throw new Error(res.statusText);

        setInfoState({
          loading: false,
          error: null,
        });

        return await res.json();
      } catch (error) {
        setInfoState({
          loading: false,
          error: error.message,
        });
        return error;
      }
    },
    []
  );

  return {
    ...infoState,
    executeApi,
  };
};
