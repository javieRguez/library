import React from "react";
import { describe, test, vi, expect } from "vitest";
import { render, fireEvent, screen } from "@testing-library/react";
import { Library } from "../pages/index.js";
import { ButtonCustom, SearchInput, Table } from "../components";

describe("Library Component", () => {
  let mockFn = vi.fn();

  test("renders Library component", () => {
    render(<Library />);
  });

  test("renders ButtonCustom component", () => {
    render(
      <ButtonCustom
        options={{
          text: "Agregar",
          handleClick: mockFn,
        }}
      />
    );
    render(
      <ButtonCustom
        options={{
          text: "Prestar / Devolver",
          handleClick: mockFn,
        }}
      />
    );
    const buttonAgregar = screen.getByRole("button", { name: "Agregar" });
    expect(buttonAgregar).toBeInTheDocument();
    fireEvent.click(buttonAgregar);

    const buttonPrestarDevolver = screen.getByRole("button", {
      name: "Prestar / Devolver",
    });
    expect(buttonPrestarDevolver).toBeInTheDocument();
    fireEvent.click(buttonPrestarDevolver);
  });

  test("render SearchInput component", () => {
    render(
      <SearchInput
        options={{
          setQueryTerm: mockFn,
          handleSearchInput: mockFn,
        }}
      />
    );
  });

  test("render Table component", () => {
    const mockData = [
      { id: 1, name: "Item 1" },
      { id: 2, name: "Item 2" },
    ];
    render(
      <Table
        head={[
          { text: "ID", key: "id" },
          { text: "Name", key: "name" },
        ]}
        data={mockData}
        handleAction={mockFn}
      />
    );
    const rows = screen.getAllByRole("row");
    expect(rows).to.have.lengthOf(mockData.length + 1);
  });
});
