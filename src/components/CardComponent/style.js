import { Card } from "antd";
import styled from "styled-components";

export const WrapperCardStyle = styled(Card)`
  width: 200px;
  & img {
    height: 200px;
    width: 200px;
  }
  position: relative;
`;

export const WrapperImageStyle = styled.img`
  top: -1px;
  left: -1px;
  border-top-left-radius: 3px;
  position: absolute;
  height: 14px !important;
  width: 68px !important;
`;

export const StyleNameProduct = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: rgb(56, 56, 61);
`;

export const WrapperReportText = styled.div`
  display: flex;
  font-size: 11px;
  align-items: center;
  color: rgb(128, 128, 137);
`;

export const WrapperPriceText = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: rgb(256, 66, 78);
`;

export const WrapperDiscountText = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: rgb(256, 66, 78);
`;

export const WrapperStyleTextSell = styled.span`
  font-size: 15px;
  line-height: 24px;
  color: rgb(120, 120, 120);
`;
