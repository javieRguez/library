const Table = ({
  head,
  data,
  handleAction,
  actions = { lend: false, edit: true, remove: false },
}) => {
  const atLeastOneTrue = actions.lend || actions.edit || actions.remove;
  return (
    <table className="w-full text-sm text-left">
      <thead className=" text-xs uppercase">
        <tr className="border-b">
          {head.map(({ text, key }) => (
            <th
              key={key}
              className="font-medium opacity-80 text-gray-950 px-6 p-4"
            >
              {text}
            </th>
          ))}
          {atLeastOneTrue ? (
            <th className="text-center font-medium opacity-80 text-gray-950 px-6 p-4">
              Acciones
            </th>
          ) : (
            <></>
          )}
        </tr>
      </thead>
      <tbody>
        {data.map((dataElement, index) => {
          return (
            <tr className="border-b" key={index}>
              {head.map(({ key }, index) => (
                <td className="px-6 py-4" key={index}>
                  {dataElement[key]}
                </td>
              ))}
              {atLeastOneTrue ? (
                <td className="px-6 py-4 flex-auto flex-row space-x-4">
                  <a
                    className=" font-medium text-blue-600 hover:underline"
                    onClick={() => handleAction("lend", dataElement)}
                  >
                    Prestar
                  </a>
                  <a
                    className=" font-medium text-blue-600 hover:underline"
                    onClick={() => handleAction("edit", dataElement)}
                  >
                    Editar
                  </a>
                  <a
                    className=" font-medium text-blue-600 hover:underline"
                    onClick={() => handleAction("delete", dataElement)}
                  >
                    Eliminar
                  </a>
                </td>
              ) : (
                <></>
              )}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
