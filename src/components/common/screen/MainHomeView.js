import React from "react";
import styled from "@emotion/styled";
import {
  color,
  font,
  floatClear,
  device,
  textUnderline,
  buttonPurple,
} from "@/styles/_common";
import { MainWrapper } from "@/components/common/wrapper";
import { TextRotator } from "@/components/common/rotator";

function MainHomeView(props) {
  const rotatorList = [
    "assets",
    "time",
    "health",
    "youth",
    "home",
    "peace",
    "assets",
  ];
  return (
    <Styled.MainHomeView>
      <div className="mainhome__bg_square"></div>
      <div className="mainhome__section_container">
        <div className="mainhome__bg_text">Keep it safe.</div>
        <MainWrapper>
          {/* SECTION: */}
          <div className="mainhome__section text">
            <p className="mainhome__text_section introduce">
              <img
                src="https://themebubble.com/demo/webify/wp-content/themes/webify/landing/assets/img/icons/24.png"
                alt=""
              />
              Welcome to the Hypercox invest v0.1
            </p>

            <div className="mainhome__text_section main_title">
              Keep it safe.
              <br /> <TextRotator prevText="Precious" list={rotatorList} />
            </div>
            {/* <div>Securely expand your assets.</div> */}

            <div className="mainhome__sub_text top">
              Experts protect your assets and respond to the market in real
              time.
            </div>
            <div className="mainhome__sub_text bottom">
              Save valuable time and save opportunity costs. <br /> Safely, it
              gives you more than a few times the return on your bank interest.
            </div>
            <div className="mainhome__sub_text per">
              Take a stable rate of 15% per year.
            </div>
            <div className="mainhome__button_container">
              <button className="mainhome__button contact">Contact Now</button>
              <button className="mainhome__button production">
                Production
              </button>
            </div>
          </div>

          {/* SECTION: */}
          <div className="mainhome__section picture">
            <img
              src="https://bridge197.qodeinteractive.com/wp-content/uploads/2018/03/slider-img-2.png"
              alt=""
              className="maingome__section_image"
            />
            {/* <img
              src="https://promo-theme.com/somo/wp-content/uploads/2019/11/bg7-scaled.jpg"
              alt=""
              className="maingome__section_image"
            /> */}
          </div>
        </MainWrapper>
      </div>
    </Styled.MainHomeView>
  );
}

const Styled = {
  MainHomeView: styled.div`
    position: relative;
    ${floatClear};
    height: 95vh;
    /* border: 1px solid red; */
    /* background: url("https://bridge197.qodeinteractive.com/wp-content/uploads/2018/03/slider-img-2.png")
      center center / cover no-repeat transparent; */
    padding: 0px;
    margin: 0px auto;
    overflow: visible;
    .mainhome__bg_square {
      position: absolute;
      width: 45%;
      right: 0;
      top: 0;
      height: 100%;
      background: #d3d3d3;
    }
    .maingome__section_image {
      width: 700px;
    }
    .mainhome__bg_text {
      position: absolute;
      font-weight: bold;
      ${font(250, "#f7f7f7")};
      z-index: -1;
      left: 0;
      top: 0;
    }

    .mainhome__section_container {
      ${floatClear};
      position: absolute;
      top: 42%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
    }
    .mainhome__section {
      position: relative;
      float: left;
      /* position: absolute; */
      /* top: 50%;
      transform: translateY(-50%); */
      &.text {
        width: 50%;
        left: 0;
        margin-top: 70px;
      }
      &.picture {
        right: 0;
        width: 50%;
        text-align: center;
      }
    }
    .mainhome__text_section {
      &.introduce {
        ${font(20, "#666")};
        font-weight: 300;
        margin-bottom: 20px;
        font-family: "Circular", sans-serif;
        -webkit-font-smoothing: antialiased;
      }
      &.main_title {
        ${font(70)};
        font-weight: bold;
        font-family: "Circular", sans-serif;
        -webkit-font-smoothing: antialiased;
      }
    }

    .mainhome__button {
      letter-spacing: 1px;
      &.contact {
        ${buttonPurple()};
        margin-right: 20px;
      }
      &.production {
        ${buttonPurple("white", "#cccccc")};
        &:hover {
          box-shadow: 0px 4px 8px 0px rgba(134, 130, 148, 0.3);
        }
      }
    }
    .mainhome__sub_text {
      ${font(20, "#666")};
      line-height: 25px;
      font-weight: 300;
      font-family: "Circular", sans-serif;
      -webkit-font-smoothing: antialiased;
      &.top {
        margin-top: 20px;
        margin-bottom: 10px;
      }
      &.bottom {
      }
      &.per {
        margin-top: 10px;
      }
    }
    .mainhome__button_container {
      margin-top: 40px;
    }
  `,
};

export default MainHomeView;
