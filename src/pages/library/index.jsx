import React, { useState } from "react";
import { useFetch } from "../../hooks/use-api";
import { Loading, Dialog, Table } from "../../components";
import { dataMapping, HEAD_TABLE } from "./library.config";

const Library = () => {
  const [open, setOpen] = useState(false);

  const { data, loading, error } = useFetch({ endPoint: "GetAllBooksAsync" });

  if (loading) return <Loading />;

  const handleAction = (action, book) => {
    switch (action) {
      case "lend":
        break;
      case "edit":
        break;
      case "delete": {
        setOpen(true);
        break;
      }
      default:
        break;
    }
  };
  return (
    <>
      <Dialog open={open} setOpen={setOpen} />
      <Table
        head={HEAD_TABLE}
        data={dataMapping(data)}
        handleAction={handleAction}
      />
    </>
  );
};

export default Library;
