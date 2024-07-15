import { Button } from "@headlessui/react";

const ButtonCustom = ({
  options = {
    text: "Button",
    handleClick: (e) => e,
  },
}) => {
  return (
    <Button
      onClick={options.handleClick}
      className="uppercase rounded bg-sky-600 py-2 px-4 text-sm text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700"
    >
      {options.text}
    </Button>
  );
};

export default ButtonCustom;
