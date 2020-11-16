import React from "react";
import Link from "next/link";
import { MainWrapper } from "@/components/common/wrapper";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import styled from "@emotion/styled";
import DetailsIcon from "@material-ui/icons/Details";
import {
  color,
  font,
  floatClear,
  device,
  textUnderline,
} from "@/styles/_common";
import { MainProfile } from "@/components/common/profile";
import { MainHomeView } from "@/components/common/screen";
import { MainChapter } from "@/components/common/chapter";
import { MainSaleSection } from "@/components/common/sale";
import { MainContact } from "@/components/common/form";

function HomeContainer(props) {
  return (
    <Styled.HomeContainer>
      <section className="home__section main" id="home">
        <MainHomeView />
      </section>
      <section id="chapter1">
        <MainChapter />
      </section>

      <MainWrapper>
        <section className="home__section about" id="profile">
          <MainProfile />
        </section>

        <section className="home__section cooperation">Cooperation</section>
      </MainWrapper>

      <section className="home__section sale">
        <MainSaleSection />
      </section>

      <MainWrapper>
        <section id="contact">
          <MainContact />
        </section>
        <section className="home__section services">Services</section>
        <section className="home__section company">Company</section>
        <section className="home__section project">Project</section>
        <section className="home__section contact">Contact Me</section>

        <FixedLimitContactButtonBox />
        <FixedUpArrow />
      </MainWrapper>
      <style global jsx>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </Styled.HomeContainer>
  );
}

function FixedLimitContactButtonBox() {
  return (
    <Styled.FixedLimitContactButtonBox>
      <div className="main__fixed_container">
        <div className="main__fixed limit_box">
          <div className="limit_box__container">
            <div className="limit_box_in count">12</div>
            <div className="limit_box_in text">
              Limit number <br /> of Persons
            </div>
          </div>
        </div>

        <div className="main__fixed contact__box">
          <div className="limit_box__container">
            <Link href="/">
              <a className="contact__fixed ">
                <WhatsAppIcon />
                <span className="contact__fixed_text">CONTACT US</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Styled.FixedLimitContactButtonBox>
  );
}

function FixedUpArrow() {
  const handleClick = (config) => {
    const { type } = config;
    if (type === "up") {
      console.log("up");
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  };
  return (
    <Styled.FixedUpArrow>
      <span
        className="fixedup__box"
        onClick={() => handleClick({ type: "up" })}
      >
        <span className="fixedup__box_icon">
          <DetailsIcon />
        </span>
      </span>
    </Styled.FixedUpArrow>
  );
}
const Styled = {
  HomeContainer: styled.div`
    /* background: ${color.bodyPurpleGradient}; */
    .home__section {
      position: relative;
      /* border: 1px solid #ececec; */
    }
    .main__fixed_container {
      position: fixed;
      right: 10px;
      top: 78%;
      width: 205px;
      height: 250px;
    }

    .limit_box__container {
      ${floatClear};
    }
  `,
  FixedUpArrow: styled.div`
    position: fixed;
    display: inline-block;
    right: 25px;
    bottom: 30px;
    padding: 10px;
    .fixedup__box {
      display: inline-block;
      width: 35px;
      height: 30px;
      background: black;
      /* border-radius: 100%; */
      border-radius: 3px;
      text-align: center;
      cursor: pointer;
    }
    .fixedup__box_icon {
      display: inline-block;
      color: #d6d6d6;
      transform: rotate(180deg);
      text-align: center;
    }
  `,
  FixedLimitContactButtonBox: styled.div`
    .main__fixed {
      &.limit_box {
        padding: 14px 28px 11px 24px;
        background-color: #fafafa;
        box-shadow: 0 0 7.84px 0.16px rgba(0, 0, 0, 0.1);
        z-index: 9998;
        transition: all 0.25s cubic-bezier(0.23, 1, 0.32, 1) 0.45s;
      }
    }
    .limit_box_in {
      float: left;

      &.count {
        font-weight: bold;
        ${font(43, "#272727")};
        letter-spacing: -0.5px;
      }
      &.text {
        margin-left: 15px;
        margin-top: 8px;
        ${font(14, "#272727")};
        font-weight: 600;
        letter-spacing: -0.5px;
      }
    }
    .contact__box {
      background-color: #f21e4e;
      box-shadow: 0 0 7.84px 0.16px rgba(0, 0, 0, 0.1);
      z-index: 9998;
      transition: all 0.25s cubic-bezier(0.23, 1, 0.32, 1) 0.45s;
      margin-top: 20px;
    }
    .contact__fixed {
      display: block;
      ${font(14, "white")};
      letter-spacing: 0px;
      padding: 20px;
      font-weight: 600;
      padding-left: 29px;
    }
    .contact__fixed_text {
      position: relative;
      top: -6px;
      margin-left: 5px;
    }
  `,
};

export default HomeContainer;
