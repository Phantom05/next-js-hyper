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
import TextField from "@material-ui/core/TextField";

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
            noValidate
            autoComplete="off"
          >
            <div className="contact__form_rows">
              <div className="contact__name_con">
                <div className="contact__name_box">
                  <TextField
                    id="outlined-basic"
                    label="First Name"
                    variant="outlined"
                    fullWidth
                  />
                </div>
                <div className="contact__name_box">
                  <TextField
                    id="outlined-basic"
                    label="Last Name"
                    variant="outlined"
                    fullWidth
                  />
                </div>
              </div>
            </div>
            <div className="contact__form_rows">
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                fullWidth
              />
            </div>
            <div className="contact__form_rows">
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                className="contact__textarea"
                placeholder="Write something.."
              ></textarea>
            </div>
            <div className="contact__section_btn_box">
              <button className="contact__section_btn">Send</button>
            </div>
          </form>
        </div>
        <div className="contact__section__box">
          <img
            src="https://bridge249.qodeinteractive.com/wp-content/uploads/2018/06/h1-img-6-700x689.png"
            alt=""
            className="contact__image"
          />
        </div>
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
      padding: 15px 60px;
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
    .contact__textarea {
      border-color: rgba(202, 202, 202, 1);
      border-width: 1px;
      border-style: solid;
      color: #424242;
      font-family: Lato;
      font-size: 17px;
      line-height: 22px;
      font-style: normal;
      letter-spacing: 0px;
      text-transform: none;
      margin-bottom: 22px;
      resize: none;
      width: 100%;
      padding: 15px;
      &::placeholder {
        color: #a8a8a8;
        font-weight: 400;
      }
    }
    .contact__name_con {
      ${floatClear};
    }
    .contact__name_box {
      float: left;
      width: 50%;
    }
    .contact__form_rows {
      margin-bottom: 20px;
    }
    .contact__image {
    }
  `,
};

export default MainContact;
