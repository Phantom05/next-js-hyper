import { useEffect } from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import { Global, css } from "@emotion/react";
import { PersonCircle } from "react-bootstrap-icons";
import {
  color,
  font,
  floatClear,
  device,
  textUnderline,
} from "@/styles/_common";
import { useImmer } from "use-immer";
import cx from "classnames";
import _ from "lodash";
import { useRouter } from "next/router";

const HeaderState = {
  hide: true,
  pageYOffset: 0,
  ready: false,
};

function HeaderController(props) {
  const [values, setValues] = useImmer(HeaderState);
  const handleScroll = () => {
    const { pageYOffset } = window;
    const deltaY = pageYOffset - values.pageYOffset;
    const hide = pageYOffset <= 10;
    // && deltaY >= 0;

    console.log("wow", deltaY, pageYOffset, hide);
    console.log(values);
    setValues((draft) => {
      draft.hide = hide;
      draft.pageYOffset = pageYOffset;
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", _.throttle(handleScroll, 300));
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setValues((draft) => {
        draft.ready = true;
      });
    }, 1000);
  }, []);

  return (
    <Styled.HeaderController>
      <div
        className={cx("header_scroll", {
          active: !values.hide,
          hidden: props.crossEnabled === false,
        })}
      >
        <Header theme={"white"} ready={values.ready} />
      </div>
      <div className="header__top">
        <Header theme={props.theme} ready={values.ready} fixed={props.fixed} />
      </div>
    </Styled.HeaderController>
  );
}

function Header(props) {
  const { theme = "white", fixed = false } = props;
  const router = useRouter();
  const [values, setValues] = useImmer(HeaderState);
  const isMainPage = router.pathname === "/";

  const handleClick = (config) => {
    const { type } = config;
    if (type === "upScroll") {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  };

  return (
    <Styled.Header theme={theme} className="header__container" fixed={fixed}>
      {fixed && (
        <Global
          styles={css`
            body {
              padding-top: 112px;
            }
          `}
        />
      )}
      <div className="header__wrap">
        <div className="header__section brand">
          {isMainPage ? (
            <a
              className="header-brand-logo"
              onClick={() => handleClick({ type: "upScroll" })}
            >
              <h2 className="header-brand-logo-text">
                <span>H</span>
                YPERCOX INVEST
              </h2>
            </a>
          ) : (
            <Link href="/">
              <a className="header-brand-logo">
                <h2 className="header-brand-logo-text">
                  <span>H</span>
                  YPERCOX INVEST
                </h2>
              </a>
            </Link>
          )}
        </div>
        <div className="header__section nav">
          <ul className="header__list container">
            <li className="header__list box">
              {isMainPage ? (
                <a
                  className="header__link link"
                  onClick={() => handleClick({ type: "upScroll" })}
                >
                  <span className="header__list-text">Home</span>
                </a>
              ) : (
                <Link href="/">
                  <a className="header__link link">
                    <span className="header__list-text">Home</span>
                  </a>
                </Link>
              )}
            </li>
            <li className="header__list box">
              <Link href="/#vision">
                <a className="header__link link">
                  <span className="header__list-text">Vision</span>
                </a>
              </Link>
            </li>
            <li className="header__list box">
              <Link href="/#profile">
                <a className="header__link link">
                  <span className="header__list-text">About</span>
                </a>
              </Link>
            </li>
            <li className="header__list box">
              <Link href="/#service">
                <a className="header__link link">
                  <span className="header__list-text">Services</span>
                </a>
              </Link>
            </li>

            {/* <li className="header__list box">
              <Link href="">
                <a className="header__link link">
                  <span className="header__list-text">Notice</span>
                </a>
              </Link>
            </li> */}

            <li className="header__list box">
              <Link href="/#contact">
                <a className="header__link link">
                  <span className="header__list-text">Contact</span>
                </a>
              </Link>
            </li>
            <li className="header__list box">
              <Link href="/support">
                <a className="header__link link">
                  <span className="header__list-text">Support</span>
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

export default HeaderController;

const Styled = {
  HeaderController: styled.div`
    .header_scroll {
      position: fixed;
      left: 0;
      width: 100%;
      /* height: 70px; */
      top: -70px;
      transition: 0.3s linear;
      opacity: 0;
      background: white;
      z-index: 5000;
      border-bottom: #ececec;
      box-shadow: 3px 3px 3px rgba(163, 163, 163, 0.171);
      .header__container {
        padding-top: 7px;
      }
      &.active {
        top: 0;
        opacity: 1;
      }
      &.hidden {
        display: none;
      }
    }
  `,
  Header: styled.div`
    ${floatClear};
    background: white;
    ${({ theme }) => theme === "black" && `background: black;`};
    box-shadow: 3px 3px 3px rgba(163, 163, 163, 0.171);
    z-index: 5000;
    padding-top: 20px;
    ${({ fixed }) =>
      fixed === true && `position:fixed;left:0;top:0;width:100%;`};
    .header__link {
      cursor: pointer;
    }
    .header__wrap {
      width: ${device.header_pc};
      margin: auto;
      position: relative;
      ${floatClear};
      padding: 15px 0;

      /* border: 1px solid red; */
    }
    @media screen and (max-width: ${device.main_pc}) {
      .header__wrap {
        width: 100%;
      }
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
          ${({ theme }) => theme === "black" && `color: #fff;`};
          margin-top: 16px;
          cursor: pointer;
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
      color: #272727;
      ${({ theme }) => theme === "black" && `color: #ececec;`};
      padding-bottom: 4px;
    }
    .link {
      position: relative;
      letter-spacing: 1.5px;
      display: inline-block;
      padding: 20px 20px;
      ${font(16, "#000")}
      ${({ theme }) => theme === "black" && `color: #ececec;`};
      /* color:#ececec; */
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
      color: #c2c2c2;
      position: relative;
      top: 3px;
    }
    .header-brand-logo-text {
      ${({ theme }) => theme === "black" && `color: #ececec;`};
      span {
        color: white;
      }
    }
  `,
};
