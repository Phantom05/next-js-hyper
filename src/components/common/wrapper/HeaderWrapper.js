import React from "react";
import styled from "@emotion/styled";
import {
  color,
  font,
  floatClear,
  device,
  textUnderline,
} from "@/styles/_common";

function HeaderWrapper(props) {
  const { childred = "" } = props;
  return (
    <Styled.HeaderWrapper>
      <div className="header__wrap">{childred}</div>
    </Styled.HeaderWrapper>
  );
}
const Styled = {
  HeaderWrapper: styled.div`
    .header__wrap {
      width: ${device.header_pc};
      margin: auto;
      position: relative;
      ${floatClear};
      padding: 15px 0;
    }
    @media screen and (max-width: ${device.main_pc}) {
      .header__wrap {
        width: 100%;
      }
    }
  `,
};

export default HeaderWrapper;
