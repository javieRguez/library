import { TrashIcon } from "@heroicons/react/24/outline";

const Table = ({ head, data, handleAction, actions = { remove: true } }) => {
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
          {actions.remove ? (
            <th className="font-medium opacity-80 text-gray-950 px-6 p-4">
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
              {actions.remove ? (
                <td className="px-6 py-4 items-center content-center">
                  <TrashIcon
                    aria-hidden="true"
                    className="h-6 text-sky-600 hover:cursor-pointer hover:text-sky-500"
                    onClick={() => handleAction("delete", dataElement)}
                  />
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
