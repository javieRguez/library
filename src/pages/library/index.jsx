import React, { useEffect, useState } from "react";
import { useFetch } from "../../hooks/use-api";
import { Loading, Table, ButtonCustom } from "../../components";
import { dataMapping, HEAD_TABLE } from "./library.config";
import SlideForm from "./slideForm";
import Swal from "sweetalert2";

const Library = () => {
  const [isAdd, setIsAdd] = useState(true);
  const [openSlideForm, setOpenSlideForm] = useState(false);
  const [books, setBooks] = useState([]);

  const { loading, error, executeApi } = useFetch();

  useEffect(() => {
    fetchGetBooksData();
  }, []);

  const fetchGetBooksData = async () => {
    const queryParams = { page: 1, pageSize: 10 };
    await executeApi({
      endPoint: "GetBooksPaginationAsync",
      queryParams,
    }).then((data) => {
      const { items, page, totalPages } = data;
      setBooks(items);
    });
  };

  const fetchDelete = async (id) => {
    const queryParams = { id: id };
    await executeApi({
      endPoint: "DeleteBookAsync",
      queryParams,
      method: "POST",
    });
  };
  if (loading) return <Loading />;

  const handleAction = async (action, book) => {
    switch (action) {
      case "delete": {
        Swal.fire({
          title: "¿Seguro que quiere eliminar el libro?",
          text: "¡No podrás revertir esto!",
          icon: "warning",
          showCancelButton: true,
          cancelButtonText: "Cancelar",
          confirmButtonColor: "#0284C7",
          cancelButtonColor: "#d33",
          confirmButtonText: "¡Sí, bórralo!",
        }).then(async (result) => {
          if (result.isConfirmed) {
            await fetchDelete(book.id);
            Swal.fire({
              title: "Eliminado",
              text: "El libro ha sido eliminado.",
              icon: "success",
              confirmButtonText: "Continuar",
              confirmButtonColor: "#0284C7",
            });
            await fetchGetBooksData();
          }
        });
      }
      default:
        break;
    }
  };

  return (
    <>
      <div className="mt-10 px-20">
        <div className=" flex justify-end space-x-4 mr-16 content-end">
          <ButtonCustom
            options={{
              handleClick: () => {
                setOpenSlideForm(true);
                setIsAdd(true);
              },
              text: "Agregar",
            }}
          />
          <ButtonCustom
            options={{
              handleClick: () => {
                setOpenSlideForm(true);
                setIsAdd(false);
              },
              text: "Prestar / Devolver",
            }}
          />
        </div>
        <div className="mt-5">
          <Table
            head={HEAD_TABLE}
            data={dataMapping(books ?? [])}
            handleAction={handleAction}
          />
        </div>
        <SlideForm
          isAdd={isAdd}
          title={isAdd ? "Agregar libro" : "Gestion"}
          openSlideForm={openSlideForm}
          setOpenSlideForm={setOpenSlideForm}
          fetchData={fetchGetBooksData}
        />
      </div>
    </>
  );
};

export default Library;
