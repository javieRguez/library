import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, beforeEach, vi } from "vitest";
import SlideForm from "../pages/library/slideForm";
import { ButtonCustom } from "../components";

describe("SlideForm", () => {
  const addBookAsync = vi.fn();
  const loanOrReturnBookAsync = vi.fn();

  const setOpenSlideForm = vi.fn();
  const fetchData = vi.fn();

  const renderComponent = (props = {}) => {
    const defaultProps = {
      title: "Add Book",
      isAdd: true,
      openSlideForm: true,
      setOpenSlideForm,
      fetchData,
    };
    return render(<SlideForm {...defaultProps} {...props} />);
  };

  it("renders the form with inputs when isAdd is true", () => {
    renderComponent();
    expect(screen.getByLabelText("Nombre")).toBeInTheDocument();
    expect(screen.getByLabelText("Precio")).toBeInTheDocument();
    expect(screen.getByLabelText("Descripción")).toBeInTheDocument();
    expect(screen.getByLabelText("Cantidad de copias")).toBeInTheDocument();
    expect(screen.getByLabelText("Genero")).toBeInTheDocument();
  });

  it("renders the form with select and radio group when isAdd is false", async () => {
    renderComponent({ isAdd: false });
    expect(screen.getByText("Prestar")).toBeInTheDocument();
    expect(screen.getByText("Devolver")).toBeInTheDocument();
    expect(screen.getByLabelText("Cliente")).toBeInTheDocument();
    expect(screen.getByLabelText("Libro")).toBeInTheDocument();
  });

  it("calls setOpenSlideForm when the cancel button is clicked", () => {
    renderComponent();
    fireEvent.click(screen.getByText("Cancelar"));
    expect(setOpenSlideForm).toHaveBeenCalledWith(false);
  });

  it("calls addBookAsync when the save button is clicked and isAdd is true", async () => {
    const isAdd = true;
    render(
      <ButtonCustom
        options={{
          text: "Guardar",
          handleClick: () => (isAdd ? addBookAsync() : loanOrReturnBookAsync()),
        }}
      />
    );

    fireEvent.click(screen.getByText("Guardar"));
    expect(addBookAsync).toHaveBeenCalled();
    expect(setOpenSlideForm).toHaveBeenCalled();
  });

  it("calls loanOrReturnBookAsync when the save button is clicked and isAdd is false", async () => {
    const isAdd = false;
    render(
      <ButtonCustom
        options={{
          text: "Guardar",
          handleClick: () => (isAdd ? addBookAsync() : loanOrReturnBookAsync()),
        }}
      />
    );

    fireEvent.click(screen.getByText("Guardar"));
    expect(loanOrReturnBookAsync).toHaveBeenCalled();
    expect(setOpenSlideForm).toHaveBeenCalled();
  });
});
