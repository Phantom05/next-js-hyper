import React from "react";
import styled from "@emotion/styled";
import {
  color,
  font,
  floatClear,
  device,
  textUnderline,
  buttonWideCircle,
} from "@/styles/_common";
import { MainWrapper } from "@/components/common/wrapper";

import Carousel from "react-elastic-carousel";
function MainPartner(props) {
  const partnerItems = [
    {
      id: 1,
      title: "금융감독원",
      src: "https://img.hankyung.com/photo/201908/01.20381235.1.jpg",
    },
    {
      id: 2,
      title: "금융투자협회",
      src:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRH-cLk1egKV2Sjy0aJEE8Hsh-B6d4Ksm41w&usqp=CAU",
    },
    {
      id: 3,
      title: "SGI서울보증",
      src:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcLpFY2V6UmLKVftziGdr7fAsUyUz_owNX6w&usqp=CAU",
    },
    {
      id: 4,
      title: "nice신용평가",
      src: "https://m.nicerating.com:444/images/common/logoTop.png",
    },
    {
      id: 1,
      title: "금융감독원",
      src: "https://img.hankyung.com/photo/201908/01.20381235.1.jpg",
    },
    {
      id: 2,
      title: "금융투자협회",
      src:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRH-cLk1egKV2Sjy0aJEE8Hsh-B6d4Ksm41w&usqp=CAU",
    },
    {
      id: 3,
      title: "SGI서울보증",
      src:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcLpFY2V6UmLKVftziGdr7fAsUyUz_owNX6w&usqp=CAU",
    },
  ];

  return (
    <Styled.MainPartner>
      <MainWrapper>
        <Carousel itemsToScroll={6} itemsToShow={6} itemPadding={[10, 10]}>
          {partnerItems.map((item, idx) => {
            return (
              <div key={idx} className="partner__item_box">
                <img src={item.src} alt="" className="no-drag" />
              </div>
            );
          })}
        </Carousel>

        {/* <div className="partners__big__bgtext">
          Build up Cooperation with a partner
        </div>
        <div className="partner__container">
          <div className="partner__box image">
            <img
              src="https://www.freeiconspng.com/uploads/handshake-icon-33.png"
              alt=""
              className="partner__box__img"
            />
          </div>
          <div className="partner__box partners">
            <h2 className="partner__title">
              Our Partners
            </h2>
            <p className="partner__title_info">
              투명하고 공정한 투자와 자본 운용을 함께할 파트너사들입니다.
              협력관계를 유지하며 더 나은 서비스와 사업 확장을 위하여 파트너쉽을
              맺고 있습니다. 맺고 있습니다. 맺고 있습니다.
            </p>
            <p className="partner__title_info">
              투명하고 공정한 투자와 자본 운용을 함께할 파트너사들입니다.
              협력관계를 유지하며 더 나은 서비스와 사업 확장을 위하여 파트너쉽을
              맺고 있습니다. 맺고 있습니다. 맺고 있습니다.
            </p>
            <div className="partner__item_con">
              <Carousel
                itemsToScroll={3}
                itemsToShow={3}
                itemPadding={[10, 10]}
              >
                {partnerItems.map((item, idx) => {
                  return (
                    <div key={idx} className="partner__item_box">
                      <img src={item.src} alt="" className="no-drag" />
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </div>
        </div> */}
      </MainWrapper>
    </Styled.MainPartner>
  );
}

const Styled = {
  MainPartner: styled.div`
    /* min-height: 10vh; */
    /* background: #adb3bd; */
    background: ${color.gray_bg3};
    padding: 20px 0;
    /* d8dadd */
    overflow: hidden;
    .partners__big__bgtext {
      position: absolute;
      font-size: 180px;
      font-family: "Lora", serif;
      z-index: 0;
      color: rgba(139, 139, 139, 0.336);
      top: 50%;
      transform: translateY(-50%);
      left: -170px;
      width: 700%;
    }

    .rec-arrow-left,
    .rec-arrow-right {
      background: transparent;
      border: 0;
      box-shadow: none;
      &:hover:enabled,
      &:focus:enabled {
        /* background: #2294c2; */
        background: transparent;
        box-shadow: none;
        color: ${color.gold};
      }
    }
    .rec-pagination {
      display: none;
    }
    .partner__title {
      ${font(50)};
      font-weight: 500;
      text-align: center;
      padding: 50px 0;
      padding-bottom: 40px;
      font-family: "Lora", serif;
    }
    .partner__title_info {
      margin-bottom: 30px;
      padding: 0 80px;
      ${font(16)};
      line-height: 22px;
    }
    .partner__title_point {
      color: ${color.gold};
    }
    .partner__item_con {
      ${floatClear};
    }
    .partner__item_box {
      border: 1px solid #c2c2c2;
      img {
        width: 100%;
        height: 60px;
        float: left;
        background: white;
      }
    }
    .partner__container {
      ${floatClear}
      margin-top:25px;
      padding-bottom: 100px;
      .partner__box {
        float: left;
        width: 50%;
        /* border: 1px solid red; */
        &.image {
          text-align: center;
        }
        &.partners {
          padding-top: 15px;
        }
      }
    }
    .partner__box__img {
      position: relative;
      z-index: 1;
      width: 400px;
      display: inline-block;
      margin-top: 58px;
      border-radius: 100%;
      box-shadow: 9px 11px 14px rgba(0, 0, 0, 0.5);
    }
  `,
};

export default MainPartner;
