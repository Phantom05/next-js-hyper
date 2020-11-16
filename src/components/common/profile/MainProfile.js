import React from "react";
import styled from "@emotion/styled";
import { main_profile } from "@/static/collection";
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
    </Styled.MainProfile>
  );
}

const Styled = {
  MainProfile: styled.div`
    position: relative;
    height: 95vh;
    .profile__section_container {
      ${floatClear};
      /* border: 1px solid red; */
      position: relative;
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
