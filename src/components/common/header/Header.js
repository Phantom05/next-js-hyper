import Link from "next/link";
import styled from "@emotion/styled";
import { PersonCircle } from "react-bootstrap-icons";
import {
  color,
  font,
  floatClear,
  device,
  textUnderline,
} from "@/styles/_common";

export default function Header() {
  return (
    <Styled.Header>
      <div className="header__wrap">
        <div className="header__section brand">
          <Link href="/">
            <a className="header-brand-logo">
              <h2 className="header-brand-logo-text">
                <span>H</span>
                YPERCOX INVEST
              </h2>
            </a>
          </Link>
        </div>
        <div className="header__section nav">
          <ul className="header__list container">
            <li className="header__list box">
              <Link href="/">
                <a className="header__link link">
                  <span className="header__list-text">Home</span>
                </a>
              </Link>
            </li>
            <li className="header__list box">
              <Link href="">
                <a className="header__link link">
                  <span className="header__list-text">About</span>
                </a>
              </Link>
            </li>
            <li className="header__list box">
              <Link href="">
                <a className="header__link link">
                  <span className="header__list-text">Services</span>
                </a>
              </Link>
            </li>
            <li className="header__list box">
              <Link href="">
                <a className="header__link link">
                  <span className="header__list-text">Vision</span>
                </a>
              </Link>
            </li>
            <li className="header__list box">
              <Link href="">
                <a className="header__link link">
                  <span className="header__list-text">Project</span>
                </a>
              </Link>
            </li>
            <li className="header__list box">
              <Link href="">
                <a className="header__link link">
                  <span className="header__list-text">Support</span>
                </a>
              </Link>
            </li>
            <li className="header__list box">
              <Link href="">
                <a className="header__link link">
                  <span className="header__list-text">Contact</span>
                </a>
              </Link>
            </li>
            <li className="header__list box">
              <Link href="/auth/signin">
                <a className="header__list-login">
                  <PersonCircle size={30} />
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Styled.Header>
  );
}

const Styled = {
  Header: styled.div`
    ${floatClear};
    padding-top: 20px;
    .header__wrap {
      width: ${device.header_pc};
      margin: auto;
      position: relative;
      ${floatClear};
      padding: 15px 0;
      /* border: 1px solid red; */
    }
    .header__section {
      float: left;
      position: relative;
      &.brand {
        ${floatClear};
        position: relative;
        z-index: 0;
        height: 100%;
        .header-brand-logo {
          display: inline-block;
          font-family: "Poppins", Arial, sans-serif;
          font-weight: 900;
          font-size: 26px;
          position: relative;
          width: 285px;
          color: #000000;
          margin-top: 16px;
          &:after {
            position: absolute;
            top: 50%;
            left: -12px;
            width: 40px;
            height: 40px;
            content: "";
            background: #3e64ff;
            z-index: -1;
            -webkit-transform: translateY(-50%);
            transform: translateY(-50%);
            border-radius: 50%;
          }
        }
      }
      &.nav {
        margin-left: 130px;
        float: right;
      }
    }
    .header__list {
      &.container {
        display: inline-block;
        ${floatClear};
      }
      &.box {
        float: left;
      }
    }
    .header__list-text {
      display: inline-block;
      ${textUnderline(color.blue_font, 2, 0.25)};
      color: #000;
      padding-bottom: 4px;
    }
    .link {
      position: relative;
      letter-spacing: 1.5px;
      display: inline-block;
      padding: 20px 20px;
      ${font(16, "#000")}
      /* border:1px solid #ececec; */
      &:hover .header__list-text {
        &:before {
          left: 0;
          width: 100%;
        }
      }
    }
    .header__list-login {
      display: inline-block;
      /* border: 1px solid red; */
      padding: 15px;
      padding-top: 12px;
      margin-left: 17px;
      color: gray;
      position: relative;
      top: 3px;
    }
    .header-brand-logo-text {
      span {
        color: white;
      }
    }
  `,
};
