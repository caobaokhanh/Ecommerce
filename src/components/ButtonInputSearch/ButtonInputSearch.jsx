import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import InputComponent from "../InputComponent/InputComponent";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

export default function ButtonInputSearch(props) {
  const {
    size,
    placeholder,
    textButton,
    bordered,
    backgroundColorInput = "#fff",
    backgroundColorButton = "rgb(13, 92, 182)",
    colorButton = "#fff",
  } = props;

  return (
    <div style={{ display: "flex" }}>
      <InputComponent
        size={size}
        placeholder={placeholder}
        bordered={bordered}
        style={{ backgroundColor: backgroundColorInput }}
      />
      <ButtonComponent
        size={size}
        styleButton={{
          backgroundColor: backgroundColorButton,
          border: !bordered && "none",
        }}
        icon={
          <SearchOutlined color={colorButton} style={{ color: colorButton }} />
        }
        textButton={textButton}
        styleTextButton={{ color: colorButton }}
      ></ButtonComponent>
    </div>
  );
}
