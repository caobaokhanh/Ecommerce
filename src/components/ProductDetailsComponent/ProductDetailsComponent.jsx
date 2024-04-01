import { Col, Image, InputNumber, Row } from "antd";
import React from "react";
import test from "../../assets/images/test.webp";
import test1 from "../../assets/images/test1.webp";
import test2 from "../../assets/images/test2.jpeg";
import {
  WrapperAddressProduct,
  WrapperBtnQualityProduct,
  WrapperInputNumber,
  WrapperPriceProduct,
  WrapperPriceTextProduct,
  WrapperQualityProduct,
  WrapperStyleCol,
  WrapperStyleImage,
  WrapperStyleNameProduct,
  WrapperStyleTextSell,
} from "./style";
import { StarFilled, PlusOutlined, MinusOutlined } from "@ant-design/icons";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

export default function ProductDetailsComponent() {
  const onChange = () => {};

  return (
    <Row style={{ padding: "16px", background: "#fff", borderRadius: "4px" }}>
      <Col
        span={10}
        style={{ borderRight: "1px solid #e5e5e5", paddingRight: "8px" }}
      >
        <Image src={test} alt="image product" preview="false" />

        <Row style={{ paddingTop: "10px", justifyContent: "space-between" }}>
          <WrapperStyleCol span={4}>
            <WrapperStyleImage src={test2} alt="image small" preview="false" />
          </WrapperStyleCol>

          <WrapperStyleCol span={4}>
            <WrapperStyleImage src={test2} alt="image small" preview="false" />
          </WrapperStyleCol>

          <WrapperStyleCol span={4}>
            <WrapperStyleImage src={test2} alt="image small" preview="false" />
          </WrapperStyleCol>

          <WrapperStyleCol span={4}>
            <WrapperStyleImage src={test2} alt="image small" preview="false" />
          </WrapperStyleCol>

          <WrapperStyleCol span={4}>
            <WrapperStyleImage src={test2} alt="image small" preview="false" />
          </WrapperStyleCol>
        </Row>
      </Col>

      <Col span={14} style={{ paddingLeft: "10px" }}>
        <WrapperStyleNameProduct>Iphone 15 Pro Max</WrapperStyleNameProduct>

        <div>
          <StarFilled style={{ fontSize: "12px", color: "rgb(253,216,54)" }} />
          <StarFilled style={{ fontSize: "12px", color: "rgb(253,216,54)" }} />
          <StarFilled style={{ fontSize: "12px", color: "rgb(253,216,54)" }} />
          <StarFilled style={{ fontSize: "12px", color: "rgb(253,216,54)" }} />
          <StarFilled style={{ fontSize: "12px", color: "rgb(253,216,54)" }} />
          <WrapperStyleTextSell> | Đã bán 1000+</WrapperStyleTextSell>
        </div>

        <WrapperPriceProduct>
          <WrapperPriceTextProduct>30.000.000</WrapperPriceTextProduct>
        </WrapperPriceProduct>

        <WrapperAddressProduct>
          <span>Giao đến</span>
          <span className="address">Bình Thạnh, P.11, TP. Hồ Chí Minh</span>
          <span className="change-address">Đổi địa chỉ</span>
        </WrapperAddressProduct>

        <div
          style={{
            margin: "10px 0 20px",
            borderTop: "1px solid #e5e5e5",
            borderBottom: "1px solid #e5e5e5",
            padding: "10px 0",
          }}
        >
          <div style={{ marginBottom: "20px" }}>Số lượng</div>

          <WrapperQualityProduct>
            <button style={{ border: "none", background: "transparent" }}>
              <MinusOutlined style={{ color: "#000", fontSize: "20px" }} />
            </button>

            <WrapperInputNumber
              defaultValue={10}
              onChange={onChange}
              size="small"
            />

            <button style={{ border: "none", background: "transparent" }}>
              <PlusOutlined style={{ color: "#000", fontSize: "20px" }} />
            </button>
          </WrapperQualityProduct>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <ButtonComponent
            bordered={false}
            size={40}
            styleButton={{
              background: " rgb(255, 57, 69)",
              height: "48px",
              width: "220px",
              border: "none",
              borderRadius: "4px",
            }}
            textButton={"Chọn mua"}
            styleTextButton={{ color: "#fff", fontWeight: "700" }}
          ></ButtonComponent>

          <ButtonComponent
            bordered={false}
            size={40}
            styleButton={{
              background: "#fff",
              height: "48px",
              width: "220px",
              border: "1px solid rgb(13,92,182)",
              borderRadius: "4px",
            }}
            textButton={"Mua trả sau"}
            styleTextButton={{ color: "rgb(13,92,182)", fontSize: "15px" }}
          ></ButtonComponent>
        </div>
      </Col>
    </Row>
  );
}
