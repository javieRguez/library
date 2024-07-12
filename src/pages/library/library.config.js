const HEAD_TABLE = [
  { text: "Nombre", key: "name" },
  { text: "Descripción", key: "description" },
  { text: "Precio", key: "price" },
  { text: "Genero", key: "gender" },
  { text: "Estatus", key: "available" },
];
const gendersEnum = {
  0: "Fantasía",
  1: "Romance",
};
const dataMapping = (data) =>
  data.map((value) => ({
    ...value,
    available: value.available ? "Disponible" : "Prestado",
    gender: gendersEnum[value.gender],
    price: value.price.toLocaleString("es-MX", {
      style: "currency",
      currency: "MXN",
    }),
  }));
export { HEAD_TABLE, dataMapping };
