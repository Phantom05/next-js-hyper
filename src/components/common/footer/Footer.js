import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import {
  color,
  font,
  floatClear,
  device,
  textUnderline,
  buttonWideCircle,
} from "@/styles/_common";
import { MainWrapper } from "@/components/common/wrapper";
import TwitterIcon from "@material-ui/icons/Twitter";
import MailIcon from "@material-ui/icons/Mail";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import TextsmsIcon from "@material-ui/icons/Textsms";

function Footer(props) {
  const recentPosts = [
    {
      title: "sk하이닉스 타점",
      date: "November 8, 2020",
    },
    {
      title: "삼성전자 타점",
      date: "November 9, 2020",
    },
    {
      title: "현대차 타점",
      date: "November 12, 2020",
    },
    {
      title: "대우조선해양 타점",
      date: "November 12, 2020",
    },
  ];
  const recentComments = [
    {
      title: "카카오 타점",
      date: "November 9, 2020",
    },
    {
      title: "네이버 타점",
      date: "November 10, 2020",
    },
    {
      title: "대우조선해양 타점",
      date: "November 10, 2020",
    },
  ];

  return (
    <Styled.Footer>
      <MainWrapper>
        <footer className="main__footer">
          <div className="main__footer_con">
            <div className="main__footer_box">
              <h4 className="main__footer_title logo">HYPERCOX.</h4>
              <div>{/* <input type="email" /> */}</div>
              <div className="main__footer_info_box info">
                HYPERCOX는 안정성을 추구하며, 변화하는 시장에 실시간 대응합니다.
                지속적인 연구로 전문가와 자본의 성장을 추구하며 운용합니다.
              </div>
              <div className="main__footer_info_bottom_line"></div>
              <div className="main__footer_info_bottom">
                <div className="main__footer_info_bottom_item">
                  (주)하이퍼콕스 | 사업자등록번호 164-15-05642
                </div>
                <div className="main__footer_info_bottom_item">대표 이준영</div>
                <div className="main__footer_info_bottom_item">
                  서울시 여의도구 금융대로 526-23 7층
                </div>
              </div>
            </div>
            <div className="main__footer_box">
              <h4 className="main__footer_title">Address</h4>
              <div className="main__footer_info_box">
                <div className="main__footer_addres_box">
                  <div className="main__footer_addres_rows">
                    <span className="main__footer_addres_title">
                      Contactable time:
                    </span>
                    <span className="main__footer_addres_item">
                      6:00 PM-10:00PM
                    </span>
                  </div>
                  <div className="main__footer_addres_rows">
                    <span className="main__footer_addres_title">Phone:</span>
                    <span className="main__footer_addres_item">
                      +2 1050172132
                    </span>
                  </div>
                  <div className="main__footer_addres_rows">
                    <span className="main__footer_addres_title">Email:</span>
                    <span className="main__footer_addres_item">
                      info@yourdomain.com
                    </span>
                  </div>
                </div>
                <div className="main__footer_sns_box">
                  <span className="main__footer_sns_icon">
                    <TwitterIcon />
                  </span>
                  <span className="main__footer_sns_icon">
                    <MailIcon />
                  </span>
                  <span className="main__footer_sns_icon">
                    <WhatsAppIcon />
                  </span>
                  <span className="main__footer_sns_icon">
                    <TextsmsIcon />
                  </span>
                </div>
              </div>
            </div>
            <div className="main__footer_box">
              <h4 className="main__footer_title">Recent Posts</h4>
              <div className="main__footer_info_box">
                <div className="main__footer_target_box">
                  {recentPosts.map((item, key) => {
                    return (
                      <div className="main__footer_target_rows" key={key}>
                        <div className="main__footer_target_title">
                          {item.title}
                        </div>
                        <div className="main__footer_target_date">
                          {item.date}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="main__footer_box">
              <h4 className="main__footer_title">
                Get the latest deals and more
              </h4>
              <div className="main__footer_info_box">
                <div>Get the latest deals and more</div>
                <div className="main_-footer_payment_box">
                  <div className="footer_payment_title">Payment options</div>
                  <div className="footer_payment_item">
                    <span className="footer_payment_item_title">
                      카카오뱅크
                    </span>
                    <span className="footer_payment_item_text">
                      3333-12-9510082
                    </span>
                  </div>
                  <div className="footer_payment_item">
                    <span className="footer_payment_item_title">신한은행</span>
                    <span className="footer_payment_item_text">
                      011-434-608319
                    </span>
                  </div>
                  <div className="footer_payment_item">
                    <span className="footer_payment_item_title">키움증권</span>
                    <span className="footer_payment_item_text">5526-4910</span>
                  </div>
                  <div className="footer_payment_item">
                    <span className="footer_payment_item_title">신한증권</span>
                    <span className="footer_payment_item_text">
                      270-25-338008
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </MainWrapper>
      <div className="main__footer_bottom">
        <MainWrapper>
          <span className="main__footer__bootom_text left">
            Copyright ©2020 All rights reserved |
            <span className="footer__author_name">HYPERCOX</span>
          </span>
          <span className="main__footer__bootom_text right">
            {/* All Right Reserved. */}
            <span className="main__footer_bottom_text_link">이용약관</span>
            <span className="main__footer_bottom_text_link">
              이메일무단수집거부
            </span>
            <span className="main__footer_bottom_text_link blue">
              개인정보처리방침
            </span>
            <span className="main__footer_bottom_text_link">아이디어 정책</span>
          </span>
        </MainWrapper>
      </div>
    </Styled.Footer>
  );
}

const Styled = {
  Footer: styled.footer`
    background: #282828;
    background: #151515;
    .main__footer_info_bottom {
      padding-top: 20px;
    }
    .main__footer_info_bottom_line {
      width: 30%;
      height: 1px;
      background: #757575;
      margin-top: 20px;
    }
    .main__footer_info_bottom_item {
      margin-bottom: 10px;
      ${font(14)};
      color: #bbbbbb;
    }

    .main__footer_link_ul {
      li {
        list-style: circle;
        color: #cacaca;
        margin-left: 20px;
        a {
          ${textUnderline("#cacaca")};
        }
      }
    }
    .main__footer_sns_box {
      margin-top: 30px;
    }
    .main__footer_sns_icon {
      display: inline-block;
      margin-right: 10px;
      cursor: pointer;
      transition: 0.3s ease;
      color: #cacaca;
      &:hover {
        color: #ddac61;
      }
    }
    .main__footer_info_box {
      padding-right: 70px;
      ${font(17, "gray")};
      line-height: 25px;
      &.info {
        line-height: 20px;
        ${font(15, "gray")};
      }
    }
    .main__footer_title {
      ${font(20, "white")};
      font-weight: bold;
      margin-bottom: 32px;
      position: relative;
      z-index: 2;
      &.logo {
        margin-left: 10px;
        /* font-size: 25px; */
        &:after {
          display: block;
          content: "";
          clear: both;
          position: absolute;
          top: 50%;
          left: -10px;
          transform: translateY(-50%);
          width: 5px;
          height: 5px;
          background: orange;
          border-radius: 100%;
          animation: ticktick 2s infinite alternate ease-in;
        }
        @keyframes ticktick {
          0% {
            opacity: 1;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }
        &:before {
          position: absolute;
          display: block;
          content: "";
          clear: both;
          width: 40px;
          height: 40px;
          left: -17px;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(0, 0, 0, 0.226);
          border-radius: 100%;
          z-index: -1;
          display: none;
        }
      }
    }
    .main__footer_con {
      ${floatClear};
      padding: 70px 0;
    }
    .main__footer_box {
      float: left;
      width: ${100 / 4}%;
    }
    .main__footer {
      width: 100%;
      ${font(14, "white")};
    }

    .footer__author_name {
      display: inline-block;
      margin-left: 10px;
      font-weight: bold;
      font-size: 13px;
    }
    .main__footer_bottom {
      background: black;
      /* text-align: left; */
      padding: 20px;
      ${font(14, "white")};
      ${floatClear};
      color: #bbbbbb;
    }
    .main__footer__bootom_text {
      &.left {
        float: left;
      }
      &.right {
        float: right;
        font-size: 12px;
        margin-right: 100px;
      }
    }
    .main__footer_target_box {
      line-height: 23px;
    }
    .main__footer_target_rows {
      margin-bottom: 12px;
      cursor: pointer;
      transition: 0.3s;
      &:hover {
        background: #3f3f3f;
      }
    }
    .main__footer_target_title {
      font-weight: bold;
      ${font(16, "gray")};
      color: #9b9b9b;
      font-family: "proxima-nova", sans-serif;
      letter-spacing: -1px;
    }
    .main__footer_target_date {
      ${font(16, "white")};
      font-family: "proxima-nova", sans-serif;
    }
    .main__footer_addres_item {
      ${font(15)};
      color: #ececec;
    }
    .main__footer_addres_title {
      font-weight: bold;
      margin-right: 10px;
    }
    .main__footer_bottom_text_link {
      display: inline-block;
      margin-right: 7px;
      font-size: 12px;
      cursor: pointer;
      transition: 0.3s ease-out;
      &:hover {
        /* text-decoration: underline; */
        color: #ececec;
      }
      &.blue {
        color: rgba(0, 204, 255, 0.712);
        &:hover {
          color: rgba(0, 204, 255, 0.815);
        }
      }
    }
    .footer_payment_title {
      ${font(20)};
      color: #d6d6d6;
      margin-top: 30px;
      margin-bottom: 20px;
      font-family: "Nunito Sans", sans-serif;
    }
    .footer_payment_item {
      font-size: 14px;
    }
    .footer_payment_item_title {
      font-weight: bold;
      margin-right: 10px;
    }
    .footer_payment_item_text {
    }
  `,
};
export default Footer;

{
  /* <style jsx>{`
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
          
        }

        footer img {
          margin-left: 0.5rem;
          width: 70px;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 14px;
        }

        a {
          color: inherit;
          text-decoration: none;
        }
      `}</style> */
}

{
  /* <ul className="main__footer_link_ul">
                  <li>
                    <Link href="/#home">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/#profile">
                      <a>About</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/#home">
                      <a>{"Q & A"}</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/#home">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/#home">
                      <a>Home</a>
                    </Link>
                  </li>
                </ul> */
}
