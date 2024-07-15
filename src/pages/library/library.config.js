const HEAD_TABLE = [
  { text: "Nombre", key: "name" },
  { text: "Descripción", key: "description" },
  { text: "Precio", key: "price" },
  { text: "Genero", key: "gender" },
  { text: "Cantidad de copias disponibles", key: "quantity" },
];
const gendersEnum = {
  0: "Fantasía",
  1: "Romance",
};

export const gendersSelect = [
  {
    key: "FANTASÍA",
    value: 0,
  },
  {
    key: "ROMANCE",
    value: 1,
  },
];
export const mappingSelectKeyValue = (items) => {
  return items.map((item) => ({
    key: item.name,
    value: item.id,
  }));
};
const dataMapping = (data) =>
  data.map((value) => ({
    ...value,
    gender: gendersEnum[value.gender],
    price: value.price.toLocaleString("es-MX", {
      style: "currency",
      currency: "MXN",
    }),
  }));
export { HEAD_TABLE, dataMapping };
