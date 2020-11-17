import React from "react";
import Carousel from "react-elastic-carousel";
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

function MainCarousel(props) {
  const { items, pagination = true } = props;
  const handleClick = (config) => {
    const { type } = config;
    if (type === "view") {
      console.log(config);
      alert("wait.");
    }
  };

  return (
    <Styled.MainCarousel>
      <Carousel itemsToScroll={4} itemsToShow={4} itemPadding={[10, 40]}>
        {items.map((item, key) => {
          return (
            <div className="carousel__item_box" key={key}>
              <div
                className="carousel__item_img_tag"
                onClick={() => handleClick({ type: "view", id: item.id })}
              >
                <img src={item.src} alt="" className="no-drag" width="300" />
              </div>
            </div>
          );
        })}
      </Carousel>
    </Styled.MainCarousel>
  );
}

const Styled = {
  MainCarousel: styled.div`
    .carousel__item_box {
      padding: 20px;
      width: 100%;
      height: 250px;
      position: relative;
    }
    .no-drag {
      -ms-user-select: none;
      -moz-user-select: -moz-none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      user-select: none;
      pointer-events: none;
    }
    .rec-pagination {
      display: none;
    }
    .carousel__item_img_tag {
      position: absolute;
      background-size: cover;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      cursor: pointer;
      img {
        width: 100%;
        height: 100%;
      }
      transition: 0.5s ease;
      &:hover {
        transform: scale(1.1);
      }
    }
    .rec-arrow-left,
    .rec-arrow-right {
      background: transparent;
      &:hover:enabled {
        background: #2294c2;
        color: #ffffff;
      }
    }
    /* .rec-arrow-right {
      background: transparent;
      &:hover:enabled {
        background: #4e9dbd;
        color: #cccccc;
      }
    } */
  `,
};

export default MainCarousel;
