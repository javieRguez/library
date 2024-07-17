import { Select, Field, Label } from "@headlessui/react";

const SelectCustom = ({
  options = {
    label: "Select",
    name: "select",
    value: "",
    data: [
      {
        key: "DEFAULT",
        value: 0,
      },
    ],
    handleChange: (e) => e,
  },
}) => {
  return (
    <Field className="mb-4">
      <Label className="block mb-1 text-sm font-medium text-gray-700">
        {options.label}
      </Label>
      <Select
        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        name={options.name}
        onChange={options.handleChange}
        value={options.value ?? ""}
      >
        <option value={null}>Selecciona un {options.label}</option>
        {options.data?.map((obj, i) => (
          <option key={i} value={obj.value}>
            {obj.key}
          </option>
        ))}
      </Select>
    </Field>
  );
};

export default SelectCustom;
