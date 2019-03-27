import React from "react";
import { shallow } from "enzyme";
import { TextInput } from "./TextInput";

const name = "grab";

it("При ошибочном вводе у поля ввода появляется красная рамка", () => {
  const component = shallow(
    <TextInput name={name} label="Test" valid={false} />
  );
  expect(
    component.find(".text-input__label").hasClass("text-input__label_invalid")
  ).toBe(true);
  expect(
    component.find(".text-input__field").hasClass("text-input__field_invalid")
  ).toBe(true);
});
