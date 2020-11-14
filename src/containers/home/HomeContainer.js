import React from "react";
import Link from "next/link";
import { MainWrapper } from "@/components/common/wrapper";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import styled from "@emotion/styled";
import {
  color,
  font,
  floatClear,
  device,
  textUnderline,
} from "@/styles/_common";

function HomeContainer(props) {
  return (
    <Styled.HomeContainer>
      <MainWrapper>
        <section className="home__section main">
          <div>Welcome to the HYPERCOX INVEST</div>
          <div>Securely expand your assets.</div>
          <div>
            Experts protect your assets and respond to the market in real time.
          </div>
          <div>Take a stable rate of 15% per year.</div>
          <button>Contact</button>
        </section>
        <section className="home__section about">About me</section>
        <section className="home__section cooperation">Cooperation</section>
        <section className="home__section carrer">Carrer</section>
        <section className="home__section services">Services</section>
        <section className="home__section company">Company</section>
        <section className="home__section project">Project</section>
        <section className="home__section view">View</section>
        <section className="home__section contact">Contact Me</section>

        <div className="main__fixed_container">
          <div className="main__fixed limit_box">
            <div className="limit_box__container">
              <div className="limit_box_in count">19</div>
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
      </MainWrapper>
    </Styled.HomeContainer>
  );
}

const Styled = {
  HomeContainer: styled.div`
    .home__section {
      padding: 15px;
      border: 1px solid #ececec;
      height: 100vh;
    }
    .main__fixed_container {
      position: fixed;
      right: 10px;
      top: 64%;
      width: 205px;
      height: 250px;
    }
    .main__fixed {
      &.limit_box {
        padding: 14px 28px 11px 24px;
        background-color: #fafafa;
        box-shadow: 0 0 7.84px 0.16px rgba(0, 0, 0, 0.1);
        z-index: 9998;
        transition: all 0.25s cubic-bezier(0.23, 1, 0.32, 1) 0.45s;
      }
    }
    .limit_box__container {
      ${floatClear};
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
