import React, { useState } from "react";
import {
  WrapperContainerLeft,
  WrapperContainerRight,
  WrapperTextLight,
} from "./style";
import InputForm from "../../components/InputForm/InputForm";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import { Divider, Image } from "antd";
import logosignin from "../../assets/images/login-signin.png";
import { EyeFilled, EyeInvisibleFilled } from "@ant-design/icons";

export default function SignInPage() {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(0,0,0,0.53)",
        height: "100vh",
      }}
    >
      <div
        style={{
          width: "800px",
          height: "445px",
          borderRadius: "6px",
          background: "#fff",
          display: "flex",
        }}
      >
        <WrapperContainerLeft>
          <h1>Xin chào</h1>
          <p style={{ fontSize: "13px" }}>Đăng nhập và tạo tài khoản</p>

          <InputForm
            style={{ marginBottom: "10px" }}
            placeholder="abc@gmail.com"
          />

          <div style={{ position: "relative" }}>
            <span
              onClick={() => setIsShowPassword(!isShowPassword)}
              style={{
                zIndex: 10,
                position: "absolute",
                top: "4px",
                right: "8px",
              }}
            >
              {isShowPassword ? <EyeFilled /> : <EyeInvisibleFilled />}
            </span>
            <InputForm
              placeholder="password"
              type={isShowPassword ? "text" : "password"}
              value={password}
              // onChange={handleOnchangePassword}
            />
          </div>

          <ButtonComponent
            bordered={false}
            size={40}
            styleButton={{
              background: " rgb(255, 57, 69)",
              height: "48px",
              width: "100%",
              border: "none",
              borderRadius: "4px",
              margin: "26px 0 10px",
            }}
            textButton={"Đăng nhập"}
            styleTextButton={{ color: "#fff", fontWeight: "700" }}
          ></ButtonComponent>

          <p>
            <WrapperTextLight>Quên mật khẩu?</WrapperTextLight>
          </p>

          <p style={{ fontSize: "13px" }}>
            Chưa có tài khoản?
            <WrapperTextLight>Tạo tài khoản</WrapperTextLight>
          </p>
        </WrapperContainerLeft>

        <WrapperContainerRight>
          <Image
            src={logosignin}
            preview={false}
            alt="logo-signin"
            height="203px"
            width="203px"
          />
          <h4 style={{ fontSize: "13px" }}>Mua sắm tại BK-Shop</h4>
        </WrapperContainerRight>
      </div>
    </div>
  );
}
