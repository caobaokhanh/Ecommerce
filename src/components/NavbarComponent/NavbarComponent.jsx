import React from "react";
import {
  WrapperContent,
  WrapperLableText,
  WrapperTextPrice,
  WrapperTextValue,
} from "./style";
import { Checkbox, Rate } from "antd";

export default function NavbarComponent() {
  const onChange = () => {};

  const renderContent = (type, options) => {
    switch (type) {
      case "text":
        return options.map((option) => {
          return <WrapperTextValue>{option}</WrapperTextValue>;
        });
      case "checkbox":
        return (
          <Checkbox.Group
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
            onChange={onChange}
          >
            {options.map((options) => {
              return <Checkbox value={options.value}>{options.lable}</Checkbox>;
            })}
          </Checkbox.Group>
        );
      case "star":
        return options.map((option) => {
          //   console.log("check", option);
          return (
            <div style={{ display: "flex", gap: "5px" }}>
              <Rate
                style={{ fontSize: "12px" }}
                disabled
                defaultValue={option}
              />
              <span>{`Từ ${option} sao`}</span>
            </div>
          );
        });
      case "price":
        return options.map((option) => {
          return <WrapperTextPrice>{option}</WrapperTextPrice>;
        });
      default:
        return {};
    }
  };

  return (
    <div>
      <WrapperLableText>Danh mục sản phẩm</WrapperLableText>

      <WrapperContent>
        {renderContent("text", ["Tu lanh", "TV", "May giat"])}
      </WrapperContent>

      {/* <WrapperContent>
        {renderContent("checkbox", [
          { value: "a", lable: "A" },
          { value: "b", lable: "B" },
        ])}
      </WrapperContent>

      <WrapperContent>{renderContent("star", [3, 4, 5])}</WrapperContent>

      <WrapperContent>
        {renderContent("price", ["Duoi 40.000", "Tren 50.000"])}
      </WrapperContent> */}
    </div>
  );
}
