import { Col } from "antd";
import styled from "styled-components";

export const WrapperProducts = styled.div`
  display: flex;
  /* justify-content: center; */
  gap: 12px;
  margin-top: 20px;
  flex-wrap: wrap;
`;

export const WrapperNavbar = styled(Col)`
  background-color: #fff;
  margin-right: 10px;
  border-radius: 4px;
  padding: 10px;
  height: fit-content;
  margin-top: 20px;
  width: 200px;
`;
