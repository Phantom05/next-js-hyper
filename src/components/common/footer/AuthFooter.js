import React from "react";
import styled from "@emotion/styled";
import {
  color,
  font,
  floatClear,
  device,
  textUnderline,
} from "@/styles/_common";
function AuthFooter(props) {
  return (
    <Styled.AuthFooter>
      <span className="authfooter__text">
        2020 All Rights Reserved |{" "}
        <span className="authfooter__text_bold">HYPERCOX</span>
      </span>
    </Styled.AuthFooter>
  );
}

const Styled = {
  AuthFooter: styled.div`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    border-top: 1px solid #ececec;
    padding: 20px;
    text-align: center;
    .authfooter__text {
      ${font(14, "#ddd")}
      color:#4d4d4d
    }
    .authfooter__text_bold {
      font-weight: bold;
      margin-left: 5px;
    }
  `,
};

export default AuthFooter;
