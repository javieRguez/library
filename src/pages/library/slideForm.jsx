import { useState, useEffect } from "react";
import {
  ButtonCustom,
  InputCustom,
  Loading,
  RadioGroupCustom,
  SelectCustom,
} from "../../components";
import { useFetch } from "../../hooks/use-api";
import { gendersSelect, mappingSelectKeyValue } from "./library.config";

const initialState = {
  name: "",
  price: "",
  description: "",
  quantity: "",
  gender: 0,
};

const SlideForm = ({
  title = "title",
  isAdd = true,
  openSlideForm = false,
  setOpenSlideForm = (e) => e,
  fetchData = () => {},
}) => {
  const [book, setBook] = useState(initialState);
  const [itemsClients, setItemsClients] = useState([]);
  const [itemsBooks, setItemsBooks] = useState([]);
  const [operation, setOperation] = useState("Prestar");
  const [clientId, setClientId] = useState(null);
  const [bookId, setBookId] = useState(null);

  const { loading, error, executeApi } = useFetch();

  useEffect(() => {
    getDataSelects();
  }, [openSlideForm]);

  const resetForm = () => {
    setBook(initialState);
    setBookId(null);
    setClientId(null);
    setOperation("Prestar");
  };

  const handleOnchange = (e, inputName) => {
    setBook({
      ...book,
      [inputName]:
        inputName == "gender" ? parseInt(e.target.value) : e.target.value,
    });
  };
  const getDataSelects = async () => {
    if (openSlideForm && !isAdd) {
      const clients = await executeApi({
        endPoint: "GetAllClientsAsync",
        method: "GET",
      });
      setItemsClients(clients);
      const books = await executeApi({
        endPoint: "GetAllBooksAsync",
        method: "GET",
      });
      setItemsBooks(books);
    }
  };
  const addBookAsync = async () => {
    await executeApi({
      endPoint: "AddBookAsync",
      method: "POST",
      body: book,
    });
    setOpenSlideForm(false);
    resetForm();
    fetchData();
  };
  const loanOrReturnBookAsync = async () => {
    const queryParams = { clientId: clientId, bookId: bookId };
    await executeApi({
      endPoint:
        operation == "Prestar" ? "SaveBookLoanAsync" : "ReturnBookAsync",
      method: "POST",
      queryParams,
    });
    setOpenSlideForm(false);
    resetForm();
    fetchData();
  };
  return (
    <div
      className={`fixed inset-y-0 right-0 w-1/3 bg-gray-100 shadow-xl z-50 transform ${
        openSlideForm ? "translate-x-0" : "translate-x-full"
      } transition duration-300 ease-in-out`}
    >
      <div className="p-4">
        <h2 className="uppercase text-xl font-semibold mb-4">{title}</h2>
        {isAdd ? (
          <div>
            <InputCustom
              options={{
                label: "Nombre",
                name: "name",
                value: book.name,
                handleChange: (e) => handleOnchange(e, "name"),
              }}
            />
            <InputCustom
              options={{
                label: "Precio",
                name: "price",
                value: book.price,
                handleChange: (e) => handleOnchange(e, "price"),
              }}
            />
            <InputCustom
              options={{
                label: "Descripción",
                name: "description",
                value: book.description,
                handleChange: (e) => handleOnchange(e, "description"),
              }}
            />
            <InputCustom
              options={{
                label: "Cantidad de copias",
                name: "quantity",
                value: book.quantity,
                handleChange: (e) => handleOnchange(e, "quantity"),
              }}
            />
            <SelectCustom
              options={{
                label: "Genero",
                name: "gender",
                data: gendersSelect,
                value: book.gender,
                handleChange: (e) => handleOnchange(e, "gender"),
              }}
            />
          </div>
        ) : (
          <div>
            <RadioGroupCustom
              items={["Prestar", "Devolver"]}
              setValue={setOperation}
            />
            <SelectCustom
              options={{
                label: "Cliente",
                name: "clients",
                value: clientId,
                data: mappingSelectKeyValue(itemsClients),
                handleChange: (e) => setClientId(e.target.value),
              }}
            />
            <SelectCustom
              options={{
                label: "Libro",
                name: "books",
                value: bookId,
                data: mappingSelectKeyValue(itemsBooks),
                handleChange: (e) => setBookId(e.target.value),
              }}
            />
          </div>
        )}
        <div className="space-x-5">
          <ButtonCustom
            options={{
              text: "Cancelar",
              handleClick: () => setOpenSlideForm(!openSlideForm),
              isCancelar: true,
            }}
          />
          <ButtonCustom
            options={{
              text: "Guardar",
              handleClick: () =>
                isAdd ? addBookAsync() : loanOrReturnBookAsync(),
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SlideForm;
