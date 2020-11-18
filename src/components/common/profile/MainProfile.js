import React from "react";
import styled from "@emotion/styled";
import {
  main_profile,
  ceo_target3,
  ceo_target4,
  ceo_target5,
  ceo_target6,
  ceo_target7,
  ceo_target8,
} from "@/static/collection";
import {
  color,
  font,
  floatClear,
  device,
  textUnderline,
  buttonWideCircle,
} from "@/styles/_common";

import { capitalizeFirstLetter } from "@/lib/utils";

function MainProfile(props) {
  const aboutItems =
    [
      {
        label: "name",
        text: "Junyeong Lee",
      },
      {
        label: "zip code",
        text: "05465",
      },
      {
        label: "email",
        text: "monster2jy@gmail.com",
      },
      {
        label: "phone",
        text: "+82 10-5017-2132",
      },
      {
        label: "phone",
        text: "+82 10-5017-2132",
      },
      {
        label: "phone",
        text: "+82 10-5017-2132",
      },
    ] || [];

  const rbiItems = {
    logn_term: [
      {
        name: "POSCO",
        rate: "8",
        src: ceo_target3,
        text: "2020-10-18. POSCO 타점잡고 8%의 수익율 매도진행.",
      },
      {
        name: "POSCO",
        rate: "8",
        src: ceo_target3,
        text: "2020-10-18. POSCO 타점잡고 8%의 수익율 매도진행.",
      },
      {
        name: "POSCO",
        rate: "8",
        src: ceo_target3,
        text: "2020-10-18. POSCO 타점잡고 8%의 수익율 매도진행.",
      },
    ],
    stable: [
      {
        name: "POSCO",
        rate: "8",
        src: ceo_target3,
        text: "2020-10-18. POSCO 타점잡고 8%의 수익율 매도진행.",
      },
      {
        name: "SK하이닉스",
        rate: "8",
        src: ceo_target5,
        text: "2020-11-02. SK하이닉스 타점잡고 12%의 수익율 매도진행.",
      },
      {
        name: "삼성전자",
        rate: "8",
        src: ceo_target4,
        text: "2020-11-11. 삼성전자 타점잡고 6%의 수익율 매도진행.",
      },
    ],
    aggressive: [
      {
        name: "씨젠",
        rate: "8",
        src: ceo_target6,
        text: "2020-10-18. 씨젠 타점잡고 8%의 수익율 매도진행.",
      },
      {
        name: "대정화금",
        rate: "8",
        src: ceo_target7,
        text: "2020-11-02. 대정화금 타점잡고 12%의 수익율 매도진행.",
      },
      {
        name: "신풍제약",
        rate: "8",
        src: ceo_target8,
        text: "2020-11-11. 신풍제약 타점잡고 6%의 수익율 매도진행.",
      },
    ],
  };
  const [value, setValue] = React.useState(0);

  return (
    <Styled.MainProfile>
      <div className="profile__section_container">
        <div className="profile__section profile">
          <img src={main_profile} alt="" className="profile__img" />
        </div>
        <div className="profile__section about">
          <div className="profile__section_main_box">
            <div className="profile__section_title_box">
              <h1 className="profile__section_title">About Me</h1>
              <p className="profile__section_sub">
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </p>
            </div>

            <div className="profile__section_info_box">
              {aboutItems.map((item, key) => {
                return (
                  <div
                    className="profile__section_profile about_rows"
                    key={key}
                  >
                    <div className="profile__section_profile about_item label">
                      {capitalizeFirstLetter(item.label)}:
                    </div>
                    <div className="profile__section_profile about_item text">
                      {item.text}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="profile__section_cv_box">
              <p className="profile__section_complete">
                <span className="color-blue">120</span> Project complete
              </p>
              <button className="profile__section_download_btn">
                Download cv
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="profile__section_target_container">
        <h2 className="profile__section_target_title">Ceo's stock RBI</h2>
        <p className="profile__section_target_sub">
          {/* These RBIs are a reference. I'm not just showing off my profit
          margins, but by revealing my RBI, I'm going to reveal a few examples
          so that I don't feel ashamed when asked about it by the experts around
          me. I can find a lot of things in these pictures, and I'm willing to
          reveal my technology based on trust. These are the RBIs that are being
          built after anguish and research. Mid- and long-term investments,
          stability investments, and aggressive investments are divided into two
          types of RBIs. */}
          해당 타점들은 참고 사항입니다. 단순히 수익율을 자랑하는것이 아닌, 저의
          타점을 공개함으로써 주변 전문가들한태 타점을 물어봤을때 부끄럽지
          않게끔 몇가지 사례를 공개합니다. 해당 사진들에서 많은 것들을 찾을 수
          있고, 저의 영업 비밀이 될 수 있는 기술이 노출됨을 무릎쓰고 신뢰를
          바탕으로 공개합니다. 고뇌와 연구 끝에 만들어져가고 있는 타점들 입니다.
          중장기투자, 안정성투자, 공격형 투자로 나뉘어서 타점을 나눠 진행합니다.
        </p>

        <div className="profile__section_target_con">
          <h3 className="profile__section_target_sub_title">
            stable investment RBI
          </h3>
          <div className="profile__section_target_rows">
            {rbiItems.stable.map((item, idx) => {
              return (
                <div className="profile__section_target_box" key={idx}>
                  <div className="profile__section_target_info_box">
                    <div className="profile__section_target_info_item image">
                      <img src={item.src} alt="" className="no-drag" />
                    </div>
                    <div className="profile__section_target_info_item text">
                      <div>
                        <div className="profile__section_target_info_item_sub_title">
                          종목명 : {item.name}
                        </div>
                        {/* <div>상승률 : <span>{item.rate}%</span></div> */}
                      </div>
                      <div className="profile__section_target_info_item_sub">
                        {item.text}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <h3 className="profile__section_target_sub_title">
            aggressive investment RBI
          </h3>

          <div className="profile__section_target_rows">
            {rbiItems.aggressive.map((item, idx) => {
              return (
                <div className="profile__section_target_box" key={idx}>
                  <div className="profile__section_target_info_box">
                    <div className="profile__section_target_info_item image">
                      <img src={item.src} alt="" className="no-drag" />
                    </div>
                    <div className="profile__section_target_info_item text">
                      <div>
                        <div className="profile__section_target_info_item_sub_title">
                          종목명 : {item.name}{" "}
                        </div>
                        {/* <div>상승률 : <span>{item.rate}%</span></div> */}
                      </div>
                      <div className="profile__section_target_info_item_sub">
                        {item.text}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Styled.MainProfile>
  );
}

const Styled = {
  MainProfile: styled.div`
    position: relative;
    min-height: 95vh;
    padding-bottom: 120px;
    .no-drag {
      -ms-user-select: none;
      -moz-user-select: -moz-none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      user-select: none;
      pointer-events: none;
    }
    .target_info_kind {
      float: right;
    }
    .profile__section_target_sub_title {
      margin-bottom: 15px;
      ${font(16)};
      font-family: "Lora", serif;
      /* text-align: right; */
      color: #424242;
      font-weight: 600;
    }
    .profile__section_target_sub {
      ${font(16)};
      line-height: 18px;
    }

    .profile__section_target_info_item_sub_title {
      ${font(15)};
    }
    .profile__section_target_info_item_sub {
      margin-top: 10px;
      ${font(15)};
      line-height: 17px;
    }
    .profile__section_target_info_item {
      /* text-align: center; */
      margin-bottom: 20px;
      ${floatClear};
      img {
        display: inline-block;
        width: 100%;
        height: 220px;
      }
    }
    .profile__section_target_title {
      ${font(32)};
      font-weight: 500;
      margin-top: 30px;
      margin-bottom: 30px;
      font-family: "Lora", serif;
      border-bottom: 1px solid #ececec;
      padding-bottom: 10px;
    }
    .profile__section_target_rows {
      ${floatClear};
    }
    .profile__section_target_box {
      float: left;
      width: ${100 / 3}%;
      margin-bottom: 40px;
      /* border: 1px solid red; */
      padding-right: 20px;
      &:last-child {
        padding-right: 0;
      }
    }
    .profile__section_target_img_box {
      img {
        width: 100%;
      }
    }
    .profile__section_target_container {
      margin-top: 20px;
    }
    .profile__section_target_con {
      margin-top: 20px;
    }
    .profile__section_container {
      ${floatClear};
      /* border: 1px solid red; */
      position: relative;
      padding-top: 120px;
      padding-bottom: 50px;
    }
    .profile__section {
      float: left;
      width: 50%;
      /* border: 1px solid red; */
      &.profile {
      }
      &.about {
        padding: 0 60px;
      }
    }
    .profile__section_title {
      ${font(65)};
      font-weight: bold;
    }
    .profile__section_sub {
      ${font(21, "#aaaaaa")};
      font-family: "Lora", serif;
      line-height: 30px;
      margin-top: 50px;
    }
    .profile__section_info_box,
    .profile__section_cv_box {
      margin-top: 50px;
    }
    .profile__img {
      width: 100%;
    }
    .profile__section_profile {
      &.about_rows {
        ${floatClear};
        padding: 5px 0;
        /* border: 1px solid blue; */
        margin-top: 15px;
      }
      &.about_item {
        float: left;
        &.label {
          font-weight: 800;
          margin-right: 20px;
          width: 120px;
          ${font(20)};
          font-family: "Lora", serif;
        }
        &.text {
          ${font(20, "#aaaaaa")};

          font-family: "Lora", serif;
          font-weight: 400;
        }
      }
    }
    .profile__section_main_box {
      position: absolute;
      /* border: 1px solid blue; */
      top: 50%;
      transform: translateY(-50%);
    }
    .profile__section_complete {
      margin-bottom: 40px;
      ${font(22)};
    }
    .color-blue {
      color: #3e64ff;
      font-weight: bold;
    }
    .profile__section_download_btn {
      ${buttonWideCircle("white", "#3e64ff")};
      border-radius: 50px;
      ${font(18, "white")};
      letter-spacing: 1px;
    }
  `,
};

export default MainProfile;

{
  /* <h3 className="profile__section_target_sub_title">
medium and long term investment RBI
</h3>
<div className="profile__section_target_rows">
{rbiItems.logn_term.map((item, idx) => {
  return (
    <div className="profile__section_target_box" key={idx}>
      <div className="profile__section_target_info_box">
        <div className="profile__section_target_info_item image">
          <img src={item.src} alt="" className="no-drag" />
        </div>
        <div className="profile__section_target_info_item text">
          <div>
            <div className="profile__section_target_info_item_sub_title">
              종목명 : {item.name}
            </div>
          </div>
          <div className="profile__section_target_info_item_sub">
            {item.text}
          </div>
        </div>
      </div>
    </div>
  );
})}
</div> */
}
