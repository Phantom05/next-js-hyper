import React, { useRef, useEffect } from "react";
import styled from "@emotion/styled";
import {
  color,
  font,
  floatClear,
  device,
  textUnderline,
  buttonPurple,
  buttonBlueGradient,
} from "@/styles/_common";
import { MainWrapper } from "@/components/common/wrapper";
import { TextRotator } from "@/components/common/rotator";
import { main_view_bg } from "@/static/collection";
import { useDidUpdateEffect } from "@/lib/utils";
import gsap from "gsap";
// console.log(TweenLite, "TweenLite");
// console.log(gsap, "gsap");

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

  const bgtextRef = useRef(null);
  const overlayFirst = useRef(null);
  const overlaySecond = useRef(null);
  const overlayThird = useRef(null);
  const mediaRef = useRef(null);
  const mainTitleFirstRef = useRef(null);
  const mainTitleSecondRef = useRef(null);
  const mainTitleThirdRef = useRef(null);
  const welcomeTextRef = useRef(null);

  const overlayFirstCur = overlayFirst.current;
  const overlaySecondCur = overlaySecond.current;
  const overlayThirdCur = overlayThird.current;
  const bgtextRefCur = bgtextRef.current;
  const mediaRefCur = mediaRef.current;
  const welcomeTextRefCur = welcomeTextRef.current;
  const mainTitleFirstRefCur = mainTitleFirstRef.current;
  const mainTitleSecondRefCur = mainTitleSecondRef.current;
  const mainTitleThirdRefCur = mainTitleThirdRef.current;

  const gsapAllReady =
    overlayFirstCur &&
    overlaySecondCur &&
    overlayThirdCur &&
    bgtextRefCur &&
    mediaRefCur &&
    welcomeTextRefCur &&
    mainTitleFirstRefCur &&
    mainTitleSecondRefCur &&
    mainTitleThirdRefCur;

  useEffect(() => {
    // if (!gsapAllReady) {
    //   return;
    // }
    setTimeout(() => {
      /* OVERLAY */
      gsap.to(overlayFirst.current, {
        duration: 1.5,
        delay: 0.5,
        top: "-100%",
        ease: "expo.inOut",
      });

      gsap.to(overlaySecond.current, {
        duration: 1.5,
        delay: 0.6,
        top: "-100%",
        ease: "expo.inOut",
      });

      gsap.to(overlayThird.current, {
        duration: 1.5,
        delay: 0.7,
        top: "-100%",
        ease: "expo.inOut",
      });

      /* BACKGROUND TEXT */
      gsap.from(bgtextRef.current, {
        duration: 2,
        delay: 1,
        x: "10%",
        ease: "expo.inOut",
        opacity: 0,
      });

      /* MEDIA */
      gsap.from(mediaRef.current, {
        duration: 2,
        delay: 1.5,
        stagger: 0.08,
        opacity: 0,
        x: "-20",
        ease: "expo.inOut",
      });

      /* MAIN TITLE TEXT */
      // welcomeTextRef;
      gsap.from(welcomeTextRef.current, {
        duration: 1.5,
        delay: 1,
        // y: "100%",
        ease: "expo.inOut",
        opacity: 0,
      });
      gsap.from(mainTitleFirstRef.current, {
        duration: 1.5,
        delay: 1,
        y: "100%",
        ease: "expo.inOut",
      });

      gsap.from(mainTitleSecondRef.current, {
        duration: 1.5,
        delay: 1.2,
        y: "100%",
        ease: "expo.inOut",
      });
      gsap.from(mainTitleThirdRef.current, {
        duration: 1.5,
        delay: 1.3,
        y: "200%",
        ease: "expo.inOut",
        yoyo: true,
      });
    }, 10);
    if (gsapAllReady) {
      // gsap.to(target, 1, { x: 100, y: 100 });
      // gsap.to(target, 1, { x: 100, y: 100 });
      // gsap.from(bgtextRef.current, {
      //   duration: 1.5,
      //   delay: 1.5,
      //   opacity: 0,
      //   y: "20",
      //   ease: "expo.inOut",
      //   stagger: 1,
      // });
    }
    return () => {
      // gsap.kill(mediaRef.current);
    };
  }, [
    overlayFirstCur ||
      overlaySecondCur ||
      overlayThirdCur ||
      bgtextRefCur ||
      mediaRefCur ||
      welcomeTextRefCur ||
      mainTitleFirstRefCur ||
      mainTitleSecondRefCur ||
      mainTitleThirdRefCur,
  ]);
  return (
    <Styled.MainHomeView>
      <div className="mainView__bg" ref={mediaRef}></div>
      {/* <div className="mainhome__bg_square"></div> */}
      <div className="overlay first" ref={overlayFirst}>
        {/* <div className="welcome">Welcome</div> */}
      </div>
      <div className="overlay second" ref={overlaySecond}></div>
      <div className="overlay third" ref={overlayThird}></div>
      <div className="mainhome__section_container">
        <div className="mainhome__bg_text" ref={bgtextRef}>
          Keep it safe.
        </div>
        <MainWrapper>
          {/* SECTION: */}
          <div className="mainhome__section text">
            <p
              className="mainhome__text_section introduce"
              ref={welcomeTextRef}
            >
              <img
                src="https://themebubble.com/demo/webify/wp-content/themes/webify/landing/assets/img/icons/24.png"
                alt=""
              />
              Welcome to the Hypercox invest v0.1
            </p>

            <div className="mainhome__text_section main_title">
              <div ref={mainTitleFirstRef}>
                Keep it safe.
                <br /> <TextRotator prevText="Precious" list={rotatorList} />
              </div>
            </div>
            {/* <div>Securely expand your assets.</div> */}

            <div className="mainhome__sub_text_container">
              <div ref={mainTitleSecondRef}>
                <div className="mainhome__sub_text top">
                  Experts protect your assets and respond to the market in real
                  time.
                </div>
                <div className="mainhome__sub_text bottom">
                  Save valuable time and save opportunity costs. <br /> Safely,
                  it gives you more than a few times the return on your bank
                  interest.
                </div>
                <div className="mainhome__sub_text per">
                  Take a stable rate of 15% per year.
                </div>
              </div>
            </div>

            <div className="mainhome__button_container">
              <div ref={mainTitleThirdRef}>
                <button className="mainhome__button contact">
                  Contact Now
                </button>
                <button className="mainhome__button production">
                  Production
                </button>
              </div>
            </div>
          </div>

          {/* SECTION: */}
          <div className="mainhome__section picture">
            {/* <img
              src="https://bridge197.qodeinteractive.com/wp-content/uploads/2018/03/slider-img-2.png"
              alt=""
              className="maingome__section_image"
            /> */}
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
    /* height: 60vh; */
    height: 92vh;
    /* background: url(${main_view_bg}); */
    /* border: 1px solid red; */
    /* background: url("https://bridge197.qodeinteractive.com/wp-content/uploads/2018/03/slider-img-2.png")
      center center / cover no-repeat transparent; */
    background-position: 40% 50%;
    background-size: cover;
    padding: 0px;
    margin: 0px auto;
    /* overflow: visible; */
    overflow: hidden;
    background: black;
    .mainView__bg {
      background: url(${main_view_bg});
      background-position: 40% 50%;
      background-size: cover;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: 0;
    }
    .overlay {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      z-index: 99;
      overflow: hidden;
      text-align: center;
      width: ${100 / 3}%;
      &.first {
        background: #181717;
      }
      &.second {
        background: #181717;
        left: 33.33%;
      }
      &.third {
        background: #181717;
        left: 66.66%;
      }
    }
    .welcome {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateY(-50%, -50%);
      color: white;
      text-align: center;
      width: 100%;
      border: 1px solid red;
    }
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
    @media screen and (max-width: 1400px) {
      .maingome__section_image {
        width: 100%;
      }
    }
    .mainhome__bg_text {
      position: absolute;
      font-weight: bold;
      ${font(250, "#f7f7f7")};
      z-index: -1;
      left: 0;
      top: 0;
      color: rgba(172, 172, 172, 0.089);
    }

    .mainhome__section_container {
      ${floatClear};
      position: absolute;
      top: 45%;
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
        z-index: 2;
      }
      &.picture {
        right: 0;
        width: 50%;
        text-align: center;
      }
    }
    .mainhome__text_section {
      img {
        margin-right: 10px;
      }
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
        color: #ececec;
        overflow: hidden;
        height: 160px;
      }
    }
    .mainhome__sub_text_container {
      height: 120px;
      overflow: hidden;
    }
    .mainhome__button_container {
      height: 54px;
      overflow: hidden;
    }

    .mainhome__button {
      letter-spacing: 1px;
      &.contact {
        ${buttonBlueGradient()};
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
