import React from "react";
import { ProductCard } from "@/components/common/card";
import styled from "@emotion/styled";
import {
  color,
  font,
  floatClear,
  device,
  textUnderline,
} from "@/styles/_common";
function ProductCardList(props) {
  return (
    <Styled.ProductCardList>
      {(props.data || []).map((item, key) => {
        return (
          <ProductCard
            item={item}
            key={key}
            width="230"
            onClick={props.onClick}
          />
        );
      })}
    </Styled.ProductCardList>
  );
}

const Styled = {
  ProductCardList: styled.div`
    ${floatClear}
  `,
};

export default ProductCardList;
