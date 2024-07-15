import { Field, Input, Label } from "@headlessui/react";

const ImputCustom = ({
  options = {
    label: "Input",
    name: "input",
    value: "",
    handleChange: (e) => e,
  },
}) => {
  return (
    <Field className="mb-4">
      <Label className="block mb-1 text-sm font-medium text-gray-700">
        {options.label}
      </Label>
      <div className="relative">
        <Input
          className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          name={options.name}
          value={options.value}
          onChange={options.handleChange}
        />
      </div>
    </Field>
  );
};

export default ImputCustom;
