import React, { useEffect } from "react";
import styled from "@emotion/styled";
import { useImmer } from "use-immer";
import {
  color,
  font,
  floatClear,
  device,
  textUnderline,
} from "@/styles/_common";
const TextRotatorState = {};
function TextRotator(props) {
  const { list = [], prevText = "", color = "#4285F4" } = props;
  const [values, setValues] = useImmer(TextRotatorState);

  return (
    <Styled.TextRotator items={list}>
      <span className="rotator-text">{prevText}</span>
      <span className="rotator --six" style={{ color: color }}>
        <div className="rotator-container">
          {list.map((item, key) => {
            return (
              <div className="rotator-item" key={key}>
                {item}
              </div>
            );
          })}
        </div>
      </span>
    </Styled.TextRotator>
  );
}

const Styled = {
  TextRotator: styled.div`
    ${floatClear};

    .rotator-text {
      margin-right: 15px;
    }

    .rotator-text,
    .rotator {
      white-space: nowrap;
      position: relative;
      overflow: hidden;
      display: inline-block;
    }

    .rotator {
      border-bottom: 1px solid #ededed;
    }

    .rotator .rotator-container {
      display: inline-block;
    }

    .rotator .rotator-container .rotator-item {
      position: absolute;

      left: 0;
    }
    .rotator-text,
    .rotator-item {
      top: -7px;
      padding: 7px 3px;
    }

    .rotator .rotator-container .rotator-item:first-child {
      position: relative;
    }

    /* Max of 9 items */

    .rotator {
      ${({ items }) => {
        const itemsArray = items.map((item, key) => {
          return `.rotator-container .rotator-item:nth-child(${key + 2}) {
             transform: translateY(${key + 1}00%);
        }`;
        });
        return itemsArray.join("");
      }}
    }

    @keyframes rotate6fast {
      0% {
        transform: translateY(0%);
      }
      13.3% {
        transform: translateY(0%);
      }
      16.6% {
        transform: translateY(-100%);
      }
      30% {
        transform: translateY(-100%);
      }
      33.3% {
        transform: translateY(-200%);
      }
      46.6% {
        transform: translateY(-200%);
      }
      50% {
        transform: translateY(-300%);
      }
      63.3% {
        transform: translateY(-300%);
      }
      66.6% {
        transform: translateY(-400%);
      }
      80% {
        transform: translateY(-400%);
      }
      83.3% {
        transform: translateY(-500%);
      }
      96.6% {
        transform: translateY(-500%);
      }
      100% {
        transform: translateY(-600%);
      }
    }

    .rotator.--three .rotator-container {
      animation-duration: 12s; /* (3 * 2 * 2s) */
      animation-name: rotate3;
      animation-iteration-count: infinite;
    }

    .rotator.--six .rotator-container {
      /* animation-duration: 24s; */ /* (6 * 2 * 2s) */
      animation-duration: 18s; /* (6 * 2 * 1.5s) */
      animation-name: rotate6fast;
      animation-iteration-count: infinite;
    }
  `,
};

export default TextRotator;
