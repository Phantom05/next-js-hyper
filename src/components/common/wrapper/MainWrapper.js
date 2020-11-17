import React from "react";
import styled from "@emotion/styled";
import { device, floatClear } from "@/styles/_common";

function MainWrraper(props) {
  const { children = "" } = props;
  return (
    <Styled.MainWrraper>
      <div className="wrap">{children}</div>
    </Styled.MainWrraper>
  );
}

const Styled = {
  MainWrraper: styled.div`
    .wrap {
      position: relative;
      width: ${device.main_pc};
      margin: auto;
      ${floatClear};
    }
    @media screen and (max-width: ${device.main_pc}) {
      .wrap {
        width: 100%;
      }
    }
  `,
};

export default MainWrraper;
