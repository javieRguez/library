import { useCallback, useState } from "react";

export const useFetch = () => {
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
        if (res) {
          if (!res.ok) {
            const errorData = await res.json();
            throw new Error(errorData.message);
          }

          const contentType = res.headers.get("content-type");
          if (contentType && contentType.indexOf("application/json") !== -1) {
            return await res.json();
          }
        }
      } catch (error) {
        throw error;
      }
    },
    []
  );

  return {
    executeApi,
  };
};
