import React from "react";
import styled from "@emotion/styled";
import { MainWrapper } from "@/components/common/wrapper";
function MainSaleSection(props) {
  return (
    <Styled.MainSaleSection>
      <MainWrapper>
        <div className="sale__section_container">
          <div className="sale__section title">
            <span className="sale__section title_tx">
              18% interest rate, last CEO line.
            </span>
          </div>
          <div className="sale__section sub_box">
            <div className="sale__section sub_tx">
              It is a CEO's product that is only implemented in pilot operations
              that require trust.
            </div>
            <div className="sale__section sub_tx">
              After the trial operation is over, the ceo line will be given a
              lifetime discount coupon and benefits.
            </div>
          </div>
        </div>
      </MainWrapper>
    </Styled.MainSaleSection>
  );
}

const Styled = {
  MainSaleSection: styled.div`
    background: url("https://bridge249.qodeinteractive.com/wp-content/uploads/2018/06/parallax-img.jpg");
    height: 570px;
    /* background-position: 50% 225px; */
    background-attachment: fixed;
    background-repeat: no-repeat;
    overflow: hidden;
    background-size: cover;
    .sale__section_container {
      color: white;
      text-align: center;
      padding: 130px 0;
    }
    .sale__section {
      &.title {
        display: inline-block;
        font-weight: 800;
        color: white;
        font-family: "Lora", serif;
        font-size: 70px;
        padding: 20px;
        text-align: center;
        .title_tx {
          display: inline-block;
          padding: 10px;
          background: rgba(218, 142, 43, 0.664);
        }
      }
    }
    .sale__section {
      &.sub_box {
        margin-top: 30px;
      }
      &.sub_tx {
        font-size: 23px;
        /* font-family: Georgia, "Times New Roman", Times, serif; */
        font-family: "Lato", sans-serif;
        font-weight: 300;
        line-height: 40px;
        letter-spacing: 1.5px;
      }
    }
  `,
};
export default MainSaleSection;
