import { Field, Input, Label } from "@headlessui/react";

const ImputCustom = ({
  options = {
    label: "Input",
    name: "input",
    value: "",
    handleChange: (e) => e,
    extraClass: "",
    placeholder: "",
    regex: null,
  },
}) => {
  const classInput = `block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${options.extraClass}`;

  const regexValid = (event) => {
    if (options.regex.test(event.target.value)) {
      options.handleChange(event);
    }
  };

  return (
    <Field className="mb-4">
      <Label className="block mb-1 text-sm font-medium text-gray-700">
        {options.label}
      </Label>
      <div className="relative">
        <Input
          className={classInput}
          name={options.name}
          value={options.value ?? ""}
          onChange={(e) =>
            options.regex ? regexValid(e) : options.handleChange(e)
          }
          placeholder={options.placeholder}
        />
      </div>
    </Field>
  );
};

export default ImputCustom;
