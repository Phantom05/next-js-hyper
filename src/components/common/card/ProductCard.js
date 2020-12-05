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

const ProductCardState = {
  year: 1,
};
function ProductCard(props) {
  const { item = {} } = props;
  const [values, setValues] = useImmer(ProductCardState);
  // console.log(item, "item");

  let fee = item.fee === "-" ? " 개별 상의" : `￦${item.fee}(만)`;
  let contractList = item.contractList || [];
  return (
    <Styled.ProductCard width={props.width}>
      <div className="productCard__container">
        <div className="productCard__box">
          <div className="productCard__item">
            <h2 className="productCard__title">
              {item.name.toUpperCase()}
              <div>{item.seed[0]}</div>
            </h2>
            <h3>{`${item.seed[0]} ~ ${item.seed[1] || ""}`}</h3>
            <h3>{fee} </h3>
          </div>
          <div className="productCard__item">
            {/* <div>{item.info}</div> */}

            <div>
              {(item.contractList || []).map((in_item, key) => {
                return <div key={key}>- {in_item}</div>;
              })}
            </div>

            <div>
              In stock. <span>view term</span>
            </div>
            <button
              onClick={() => props.onClick({ type: "selectItem", id: item.id })}
            >
              SELECT CLUB
            </button>
          </div>
        </div>
      </div>
    </Styled.ProductCard>
  );
}

const Styled = {
  ProductCard: styled.div`
    float: left;
    ${({ width }) => (width ? `width:${width}px` : "width:auto")};

    .productCard__box {
      ${floatClear};
    }
    .productCard__item {
      /* float: left; */
      /* width: 50%; */
    }
    .productCard__container {
      border: 1px solid red;
      padding: 20px;
      height: 300px;
    }
    .productCard__title {
      ${font(30)};
      font-weight: bold;
    }
  `,
};
export default ProductCard;
