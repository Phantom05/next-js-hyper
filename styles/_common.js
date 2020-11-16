import { css } from "@emotion/react";
import { _device_size, _color } from "./_utils.js";

export const fontFamily = css`
  /* font-family: "Noto Sans", sans-serif; */
  font-family: "Circular", sans-serif;
  -webkit-font-smoothing: antialiased;
  /* font-family: "Poppins", Arial, sans-serif; */
`;
export const color = _color;
export const device = _device_size;

export const floatClear = css`
  &:after {
    content: "";
    display: block;
    clear: both;
  }
`;

export const positionCenterCenter = css`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const positionWidthCenter = css`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

export const positionHeightCenter = css`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;
export const positionWide = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const font = (size = 14, color = "black") => {
  return css`
    color: ${color};
    font-size: ${size}px;
    ${fontFamily};
    & :hover {
      color: $clr;
    }
    /* @content; */
  `;
};

export const buttonBlue = css`
  background: ${color.blue};
  color: ${color.white};
  transition: 0.3s;
  border: 0;
  padding: 5px 15px;
  border-radius: 3px;
  cursor: pointer;
  ${font(16, color.white)};
  &:hover {
    background: ${color.blue_hover};
  }
`;

export const buttonWhite = css`
  background: ${color.white};
  transition: 0.3s;
  border: 1px solid ${color.blue};
  padding: 5px 15px;
  border-radius: 3px;
  text-transform: uppercase;
  cursor: pointer;
  ${font(16, color.blue)};
  &:hover {
    /* background:${color.blue_hover}; */
  }
`;

export const buttonPink = css`
  display: inline-block;
  background: ${color.pinkGradient};
  border-radius: 3px;
  border: 0;
  box-shadow: 0 3px 5px 2px rgba(255, 105, 135, 0.3);
  cursor: pointer;
  text-align: center;
  ${font(15, color.white)};
  &:hover {
    /* background:${color.blue_hover}; */
    background: linear-gradient(45deg, #f16483 30%, #ff8e53 100%);
  }
`;

export const buttonPupple = (color = "white", bg = _color.puppleGradient) => {
  return css`
    position: relative;
    display: inline-block;
    background: ${bg};
    ${font(15, color)};
    font-weight: bold;
    border-radius: 40px;
    padding: 17px 50px;
    border: 0;
    box-shadow: 0px 2px 4px 0px rgba(113, 74, 253, 0.2);
    transition: all 0.3s ease;
    cursor: pointer;
    top: 0;
    &:hover {
      top: -2px;
      box-shadow: 0px 4px 8px 0px rgba(113, 74, 253, 0.3);
    }
  `;
};

export const dotdotdot = css`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const textUnderline = (
  $color = color.black_font,
  $size = 1,
  $duration = 0.25
) => {
  const bottomSize = 0 - $size / 2 + "px";
  return css`
    color: ${$color};
    display: inline-block;
    position: relative;
    text-decoration: none;
    &:before {
      background-color: ${$color};
      content: "";
      height: ${$size}px;
      position: absolute;
      bottom: ${bottomSize};
      transition: width ${$duration}s ease-in-out;
      right: 0;
      top: 100%;
      width: 0;
    }
    &:hover {
      &:before {
        left: 0;
        width: 100%;
      }
    }
  `;
};
