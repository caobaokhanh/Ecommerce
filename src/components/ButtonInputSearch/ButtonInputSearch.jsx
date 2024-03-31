import { Button, Input } from "antd";
import React from "react";
import { SearchOutlined } from "@ant-design/icons";

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
      <Input
        size={size}
        placeholder={placeholder}
        bordered={false}
        style={{ backgroundColor: backgroundColorInput }}
      />
      <Button
        size={size}
        bordered={bordered}
        style={{
          backgroundColor: backgroundColorButton,
          border: !bordered && "none",
        }}
        icon={
          <SearchOutlined color={colorButton} style={{ color: colorButton }} />
        }
      >
        <span style={{ color: colorButton }}>{textButton}</span>
      </Button>
    </div>
  );
}
