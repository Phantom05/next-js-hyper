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
import FlipCameraIosIcon from "@material-ui/icons/FlipCameraIos";

function MainService(props) {
  return (
    <Styled.MainService>
      <MainWrapper>
        <div className="service__container">
          <div className="service__con">
            <div className="service__bg_text">Different Service</div>
            <div className="service__box info">
              <div className="service__title">
                {/* 하이퍼콕스의 서비스는 <br /> 이런분들께 적합합니다. */}
                Hypercox services are suitable for these people.
              </div>
              <p className="service__sub">
                하이퍼콕스의 서비스는 이런분들께 적합합니다.하이퍼콕스의
                서비스는 이런분들께 적합합니다.하이퍼콕스의 서비스는 이런분들께
                적합합니다.하이퍼콕스의 서비스는 이런분들께
                적합합니다.하이퍼콕스의 서비스는 이런분들께
                적합합니다.하이퍼콕스의 서비스는 이런분들께
                적합합니다.하이퍼콕스의 서비스는 이런분들께
                적합합니다.하이퍼콕스의 서비스는 이런분들께 적합합니다.
              </p>
            </div>
            <div className="service__box">
              <div className="service__image_box">
                <img
                  src="https://en.pimg.jp/053/830/765/1/53830765.jpg"
                  alt=""
                  className="service__box_image"
                />
              </div>
            </div>
          </div>
        </div>
      </MainWrapper>
    </Styled.MainService>
  );
}

const Styled = {
  MainService: styled.div`
    padding-bottom: 200px;
    padding-top: 100px;
    background: ${color.gray_bg3};
    .service__image_box {
      padding: 20px;
    }
    .service__box_image {
      width: 100%;
    }
    .service__con {
      ${floatClear};
      position: relative;
    }
    .service__bg_text {
      position: absolute;
      ${font(160)};
      z-index: 0;
      color: rgba(172, 172, 172, 0.089);
      font-weight: bold;
      left: -60px;
      top: -35px;
    }

    .service__box {
      float: left;
      width: 50%;
      &.info {
        padding-top: 60px;
        padding-right: 20px;
      }
    }
    .service__title {
      ${font(55)};
      line-height: 65px;
      font-weight: bold;
      margin-bottom: 50px;
    }
    .service__sub {
      ${font(16)};
      line-height: 30px;
    }
  `,
};

// function MainServiceCard(props) {
//   const { title = "", src = "", text = "" } = props;
//   return (
//     <>
//       <div className="service__box_item">
//         <div className="service__box_image_con">
//           <span className="service__box_image_icon">
//             <img src={src} alt="" className="service__box_image" />
//           </span>
//           <div className="service__box_image_title">{title}</div>
//           <div className="service__box_image_line_box">
//             <span className="service__box_image_line"></span>
//           </div>
//         </div>
//         <div className="service__box_info">{text}</div>
//         <div className="service__box_item_line"></div>
//       </div>
//     </>
//   );
// }

// function MainService(props) {
//   const cardItems = [
//     {
//       id: 1,
//       title: "virtuous cycle",
//       src: "https://icon.foundation/resources/image/og-img.png",
//       text:
//         "기존의 은행 경제 체제에서 벗어난 선순환 체제를 확립합니다. 기존의 은행 경제 체제에서 벗어난 선순환 체제를 확립합니다. ",
//     },
//     {
//       id: 1,
//       title: "high rate of interest",
//       src: "https://pngimg.com/uploads/gps/gps_PNG74.png",
//       text:
//         "기존의 은행 경제 체제에서 벗어난 선순환 체제를 확립합니다. 기존의 은행 경제 체제에서 벗어난 선순환 체제를 확립합니다.",
//     },
//     {
//       id: 1,
//       title: "real-time response",
//       src:
//         "https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png",
//       text:
//         "기존의 은행 경제 체제에서 벗어난 선순환 체제를 확립합니다. 기존의 은행 경제 체제에서 벗어난 선순환 체제를 확립합니다. ",
//     },
//   ];
//   return (
//     <Styled.MainService>
//       <MainWrapper>
//         <div className="service__container">
//           <h1 className="service__title">Services</h1>
//           <p className="service__sub">
//             Far far away, behind the word mountains, far from the countries
//             Vokalia and Consonantia
//           </p>
//           <div className="service__box_con">
//             <div className="service__box_rows">
//               {cardItems.map((item, idx) => {
//                 return (
//                   <div className="service__box_box" key={idx}>
//                     <MainServiceCard
//                       title={item.title.toLocaleUpperCase()}
//                       src={item.src}
//                       text={item.text}
//                     />
//                   </div>
//                 );
//               })}
//             </div>
//             <div className="service__box_rows">
//               {cardItems.map((item, idx) => {
//                 return (
//                   <div className="service__box_box" key={idx}>
//                     <MainServiceCard
//                       title={item.title.toLocaleUpperCase()}
//                       src={item.src}
//                       text={item.text}
//                     />
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </MainWrapper>
//     </Styled.MainService>
//   );
// }

// const Styled = {
//   MainService: styled.div`
//     padding: 150px 0;

//     .service__box_image_line_box {
//       text-align: center;
//       .service__box_image_line {
//         display: inline-block;
//         width: 40px;
//         height: 1px;
//         background: #2077da;
//       }
//     }
//     .service__box_image {
//       width: 80px;
//     }
//     .service__box_image_icon {
//       font-size: 40px;
//       color: blue;
//     }

//     .service__box_image_title {
//       letter-spacing: 2px;
//       ${font(18)};
//       font-weight: 500;
//       margin-top: 20px;
//       margin-bottom: 10px;
//     }
//     .service__box_info {
//       margin-top: 40px;
//       ${font(17)};
//       color: #616161;
//       line-height: 30px;
//     }
//     .service__box_rows {
//       ${floatClear};
//     }
//     .service__box_box {
//       float: left;
//       width: ${100 / 3}%;
//       padding: 15px;
//       text-align: center;
//     }
//     .service__box_item_line {
//       position: absolute;
//       left: 50%;
//       transform: translateX(-50%);
//       bottom: 0;
//       height: 2px;
//       width: 0;
//       background: #4588be;
//       transition: 0.3s ease;
//     }

//     .service__box_item {
//       position: relative;
//       background: rgba(255, 255, 255, 0.1);
//       box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
//       padding: 45px;
//       transition: 0.3s ease;
//       cursor: pointer;
//       &:hover {
//         .service__box_item_line {
//           width: 100%;
//         }
//       }
//     }
//     .service__title {
//       ${font(67)};
//       font-family: "Lora", serif;
//       text-align: center;
//       margin-bottom: 20px;
//       /* font-weight: bold; */
//     }
//     .service__sub {
//       ${font(20)};
//       padding: 20px 0;
//       text-align: center;
//       margin-bottom: 40px;
//       color: gray;
//     }
//     .service__container {
//     }
//   `,
// };

export default MainService;
