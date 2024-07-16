import { describe, test, expect, vi } from "vitest";
import { useFetch } from "../hooks/use-api";
import { renderHook, waitFor } from "@testing-library/react";

global.fetch = vi.fn();

const createFetchResponse = (data) => new Promise((resolve) => resolve(data));

describe("useFetch hook", () => {
  test("GET request GetBooksPaginationAsync", async () => {
    const endPoint = "GetBooksPaginationAsync";
    const queryParams = { page: 1, pageSize: 10 };

    const response = {
      data: {
        items: [],
        page: 1,
        totalPages: 1,
      },
    };
    const { result } = renderHook(() => useFetch());
    const { loading, error, executeApi } = result.current;
    expect(error).to.be.null;
    expect(loading).to.be.true;

    await waitFor(() => {
      expect(
        executeApi({
          endPoint,
          queryParams,
          method: "GET",
        })
      ).toEqual(createFetchResponse(response));
    });
  });

  test("POST request DeleteBookAsync", async () => {
    const endPoint = "DeleteBookAsync";
    const queryParams = { id: "00000000-0000-0000-0000-000000000000" };

    const { result } = renderHook(() => useFetch());
    const { loading, error, executeApi } = result.current;
    expect(error).to.be.null;
    expect(loading).to.be.true;
    await waitFor(() => {
      expect(
        executeApi({
          endPoint,
          queryParams,
          method: "POST",
        })
      ).toEqual(createFetchResponse({}));
    });
  });

  test("POST request DeleteBookAsync", async () => {
    const endPoint = "DeleteBookAsync";
    const queryParams = { id: "00000000-0000-0000-0000-000000000000" };

    const { result } = renderHook(() => useFetch());
    const { loading, error, executeApi } = result.current;
    expect(error).to.be.null;
    expect(loading).to.be.true;
    await waitFor(() => {
      expect(
        executeApi({
          endPoint,
          queryParams,
          method: "POST",
        })
      ).toEqual(createFetchResponse({}));
    });
  });

  test("GET request GetAllClientsAsync", async () => {
    const endPoint = "GetAllClientsAsync";

    const response = [
      {
        id: "00000000-0000-0000-0000-000000000000",
        name: "Book 1",
        description: "test description",
        gender: 1,
      },
    ];
    const { result } = renderHook(() => useFetch());
    const { loading, error, executeApi } = result.current;
    expect(error).to.be.null;
    expect(loading).to.be.true;
    await waitFor(() => {
      expect(
        executeApi({
          endPoint,
          method: "GET",
        })
      ).toEqual(createFetchResponse(response));
    });
  });

  test("GET request GetAllClientsAsync", async () => {
    const endPoint = "GetAllClientsAsync";

    const response = [
      {
        id: "00000000-0000-0000-0000-000000000000",
        name: "Cliente 1",
      },
    ];
    const { result } = renderHook(() => useFetch());
    const { loading, error, executeApi } = result.current;
    expect(error).to.be.null;
    expect(loading).to.be.true;
    await waitFor(() => {
      expect(
        executeApi({
          endPoint,
          method: "GET",
        })
      ).toEqual(createFetchResponse(response));
    });
  });

  test("POST request AddBookAsync", async () => {
    const endPoint = "AddBookAsync";
    const body = {
      name: "Book 1",
      price: "200.52",
      description: "test",
      quantity: "10",
      gender: 0,
    };

    const { result } = renderHook(() => useFetch());
    const { loading, error, executeApi } = result.current;
    expect(error).to.be.null;
    expect(loading).to.be.true;
    await waitFor(() => {
      expect(
        executeApi({
          endPoint,
          body,
          method: "POST",
        })
      ).toEqual(createFetchResponse({}));
    });
  });
});
