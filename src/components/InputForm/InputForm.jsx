import { Input } from "antd";
import React, { useState } from "react";
import { WrapperInputStyle } from "./style";

export default function InputForm(props) {
  const [valueInput, setValueInput] = useState("");

  const { placeholder = "", ...rests } = props;

  return (
    <WrapperInputStyle
      placeholder={placeholder}
      valueInput={valueInput}
      {...rests}
    />
  );
}
