import React from "react";
import styled from "@emotion/styled";
import { capitalizeFirstLetter } from "@/lib/utils";
import { useImmer } from "use-immer";
import {
  color,
  font,
  floatClear,
  device,
  textUnderline,
} from "@/styles/_common";

function PriceCard(props) {
  const { data = {} } = props;
  console.log(data, "priceCard");
  console.log(data.id);
  let fee = data.fee === "-" ? " 개별 상의" : `￦${data.fee}(만)`;
  if (data.id === undefined) {
    fee = "";
  }
  return (
    <Styled.PriceCard>
      <h2>{(data.name || "").toUpperCase()}</h2>
      <h3>{data.label}</h3>
      <div>{fee}</div>
      <span>CONSTACT YEAR</span>
      <button>l</button> 1 <button>r</button>
    </Styled.PriceCard>
  );
}

const Styled = {
  PriceCard: styled.div`
    margin-top: 20px;
    border: 1px solid blue;
  `,
};
export default PriceCard;
