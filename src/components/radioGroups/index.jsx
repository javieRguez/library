import { useState } from "react";
import { Field, Label, Radio, RadioGroup } from "@headlessui/react";

const RadioGroupCustom = ({ items = [], setValue, value }) => {
  const handleOnchange = (value) => {
    setValue(value);
  };
  return (
    <RadioGroup
      value={value}
      onChange={handleOnchange}
      aria-label="Server size"
      className="flex flex-row justify-normal space-x-3 mb-3"
    >
      {items.map((item) => (
        <Field key={item} className="flex items-center gap-2">
          <Radio
            value={item}
            className="group flex size-5 items-center justify-center rounded-full border bg-white data-[checked]:bg-blue-400"
          >
            <span className="invisible size-2 rounded-full bg-white group-data-[checked]:visible" />
          </Radio>
          <Label>{item}</Label>
        </Field>
      ))}
    </RadioGroup>
  );
};

export default RadioGroupCustom;
