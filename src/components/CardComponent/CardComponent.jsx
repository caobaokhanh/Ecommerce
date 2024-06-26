import React from "react";
import {
  StyleNameProduct,
  WrapperCardStyle,
  WrapperDiscountText,
  WrapperImageStyle,
  WrapperPriceText,
  WrapperReportText,
  WrapperStyleTextSell,
} from "./style";
import { StarFilled } from "@ant-design/icons";
import logo from "../../assets/images/logo.png";

export default function CardComponent() {
  return (
    <WrapperCardStyle
      hoverable
      //   headStyle={{ width: "200px", height: "200px" }}
      style={{ width: "240px" }}
      bodyStyle={{ padding: "10px" }}
      cover={
        <img
          alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
      }
    >
      <WrapperImageStyle src={logo} alt="logo" />
      <StyleNameProduct>Iphone</StyleNameProduct>

      <WrapperReportText>
        <span style={{ marginLeft: "4px" }}>
          <span>4.96</span>
          <StarFilled style={{ fontSize: "10px", color: "yellow" }} />
        </span>
        <WrapperStyleTextSell> | Đã bán 1000+</WrapperStyleTextSell>
      </WrapperReportText>
      <WrapperPriceText>
        <span style={{ marginRight: "8px" }}>1.000.000đ</span>
        <WrapperDiscountText>-6%</WrapperDiscountText>
      </WrapperPriceText>
    </WrapperCardStyle>
  );
}
