import React from "react";
import styled from "@emotion/styled";
import { MainWrapper } from "@/components/common/wrapper";
import {
  color,
  font,
  floatClear,
  device,
  textUnderline,
  buttonPurple,
} from "@/styles/_common";
function MainChapter(props) {
  return (
    <Styled.MainChapter>
      <MainWrapper>
        <div className="chapter__section_container">
          <h2 className="chapter__section title">Chapter I</h2>
          <div className="chapter__section_line box">
            <div className="chapter__section_line item"></div>
            <div className="chapter__section_line item"></div>
          </div>
          <div className="chapter__section_sub container">
            <div className="chapter__section_sub box">
              <div className="chapter__section_bg_tx">S</div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="chapter__section_sub box">
              <div className="chapter__section_sub box_title">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in
              </p>
            </div>
            <div className="chapter__section_sub box">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>

          <div className="chapter__section_box_container">
            <button className="chapter__section_btn buy">
              Watch for RBIs.
            </button>
          </div>
        </div>
      </MainWrapper>
    </Styled.MainChapter>
  );
}

const Styled = {
  MainChapter: styled.div`
    background: #f5f5f5 !important;
    .chapter__section_container {
      padding-bottom: 150px;
      padding-top: 150px;
    }
    .chapter__section_bg_tx {
      position: absolute;
      font-family: "Lora", serif;
      color: rgba(85, 85, 85, 0.123);
      font-weight: bold;
      font-size: 150px;
      top: -3px;
      left: -10px;
    }
    .chapter__section_line {
      &.box {
        ${floatClear};
      }
      &.item {
        float: left;
        position: relative;
        width: 50%;
        height: 3px;
        /* border: 1px solid red; */
        &:after {
          display: block;
          content: "";
          clear: both;
          position: absolute;
          width: 90%;
          height: 1px;
          left: 50%;
          transform: translateX(-50%);
          top: 0;
          background: #d6d6d6;
        }
      }
    }
    .chapter__section {
      &.title {
        ${font(67, "#282828")};
        text-align: center;
        /* font-family: "Lato", sans-serif; */
        letter-spacing: -0.3px;
        font-weight: 400;
        padding-bottom: 85px;
        font-family: "Lora", serif;
      }
    }
    .chapter__section_sub {
      &.container {
        ${floatClear};
        margin-top: 50px;
        margin-bottom: 90px;
      }
      &.box {
        position: relative;
        float: left;
        width: ${100 / 3}%;
        ${font(16, "#565656")};
        line-height: 28px;
        padding: 0 30px;
        font-family: "Lora", serif;
      }
      &.box_title {
        font-weight: bold;
        margin-bottom: 30px;
        ${font(22)};
        font-family: "Lora", serif;
      }
    }
    .chapter__section_box_container {
      text-align: center;
    }
    .chapter__section_btn {
      &.buy {
        color: #ffffff;
        border-color: #000000;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        background-color: #000000;
        border-radius: 0px;
        -moz-border-radius: 0px;
        -webkit-border-radius: 0px;
        letter-spacing: 1px;
        text-transform: none;
        padding: 15px 40px;
        font-family: "Lora", serif;
      }
    }
  `,
};

export default MainChapter;
