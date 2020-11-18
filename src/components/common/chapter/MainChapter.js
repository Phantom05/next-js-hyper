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
  buttonWideCircle,
} from "@/styles/_common";

import { MainCarousel } from "@/components/common/carousel";

const sliderItems = [
  {
    id: 1,
    src:
      "https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F999E06345A640A762F",
  },
  {
    id: 2,
    src:
      "https://img.etoday.co.kr/pto_db/2019/12/600/20191210145343_1400051_501_284.jpg",
  },
  {
    id: 3,
    src:
      "https://img.etoday.co.kr/pto_db/2019/12/600/20191210145343_1400051_501_284.jpg",
  },
  {
    id: 4,
    src:
      "https://img.etoday.co.kr/pto_db/2019/12/600/20191210145343_1400051_501_284.jpg",
  },
  {
    id: 5,
    src:
      "https://img.etoday.co.kr/pto_db/2019/12/600/20191210145343_1400051_501_284.jpg",
  },
  {
    id: 6,
    src:
      "https://img.etoday.co.kr/pto_db/2019/12/600/20191210145343_1400051_501_284.jpg",
  },
  {
    id: 7,
    src:
      "https://img.etoday.co.kr/pto_db/2019/12/600/20191210145343_1400051_501_284.jpg",
  },
  {
    id: 8,
    src:
      "https://img.etoday.co.kr/pto_db/2019/12/600/20191210145343_1400051_501_284.jpg",
  },
  {
    id: 9,
    src: "https://news.einfomax.co.kr/news/photo/201802/3435818_49764_571.jpg",
  },
];

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
            <button className="chapter__section_btn buy">Watch for RBIs</button>
          </div>
        </div>
      </MainWrapper>

      <div className="chapter__carousel_container">
        <MainCarousel items={sliderItems} pagination={false} />
      </div>
    </Styled.MainChapter>
  );
}

const Styled = {
  MainChapter: styled.div`
    background: ${color.gray_bg3};
    padding-bottom: 150px;
    padding-top: 150px;
    .chapter__carousel_container {
      padding: 0 20px;
    }
    .chapter__section_container {
      padding-bottom: 150px;
    }
    .chapter__section_bg_tx {
      position: absolute;
      font-family: "Lora", serif;
      color: rgba(109, 109, 109, 0.082);
      font-weight: bold;
      font-size: 200px;
      top: -20px;
      left: -20px;
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
        ${buttonWideCircle("white", "black")};
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
