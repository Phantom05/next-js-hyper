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

function MainContact(props) {
  const handleSubmit = (config) => {
    const { e } = config;
    e.preventDefault();
    console.log("handleSubmit");
  };
  return (
    <Styled.MainContact>
      <div className="contact__section__conatiner">
        <div className="contact__section__box">
          <h2 className="contact__section__title">Order a signed copy</h2>
          <p className="contact__section_sub">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <form
            action=""
            className="contact__section_form"
            onSubmit={(e) => handleSubmit({ e, type: "send" })}
          >
            <div>
              <input type="text" />
              <input type="text" />
            </div>
            <div>
              <input type="text" />
            </div>
            <div>
              <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
            <div className="contact__section_btn_box">
              <button className="contact__section_btn">Send</button>
            </div>
          </form>
        </div>
        <div className="contact__section__box">.</div>
      </div>
    </Styled.MainContact>
  );
}

const Styled = {
  MainContact: styled.div`
    .contact__section__conatiner {
      padding-top: 150px;
      padding-bottom: 80px;
      ${floatClear};
    }
    .contact__section__title {
      ${font(50, "black")};
      font-family: "Lora", serif;
      margin-bottom: 30px;
    }
    .contact__section_sub {
      ${font(19, "black")};
      font-family: "Lato", serif;
      font-weight: 300;
      line-height: 30px;
      margin-bottom: 40px;
    }
    .contact__section_btn {
      ${buttonWideCircle("white", "black")};
      border-radius: 0;
      padding: 15px 40px;
      font-family: "Lora", serif;
      font-weight: 600;
    }
    .contact__section_btn_box {
      margin-top: 20px;
    }
    .contact__section__box {
      float: left;
      width: 50%;
    }
  `,
};

export default MainContact;
