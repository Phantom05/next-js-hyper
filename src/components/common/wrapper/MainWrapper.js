import React from "react";
import styled from "styled-components";
import { device } from "@/styles/_common";

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
      width: ${device.main_pc};
      margin: auto;
    }
    @media screen and (max-width: 1200px) {
      .wrap {
        width: 100%;
      }
    }
  `,
};

export default MainWrraper;
