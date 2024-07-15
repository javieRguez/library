import { Button } from "@headlessui/react";

const ButtonCustom = ({
  options = {
    text: "Button",
    handleClick: (e) => e,
    isCancelar: false,
  },
}) => {
  return (
    <Button
      onClick={options.handleClick}
      className={`uppercase rounded ${
        options.isCancelar
          ? "bg-gray-600  data-[hover]:bg-gray-500 data-[active]:bg-gray-700"
          : "bg-sky-600  data-[hover]:bg-sky-500 data-[active]:bg-sky-700"
      }  py-2 px-4 text-sm text-white`}
    >
      {options.text}
    </Button>
  );
};

export default ButtonCustom;
