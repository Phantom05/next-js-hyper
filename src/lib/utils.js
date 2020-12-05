import React, { useEffect, useRef, useReducer } from "react";
import _ from "lodash";
/**
 *
 * @param {*} string
 * foo => Foo
 */
export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function setPriceData(array = []) {
  return array.map((item) => {
    const rate = item.interestRate;
    const setRateText = `${(rate[0] * 100).toFixed(0)}% ~ ${(
      rate[1] * 100
    ).toFixed(0)}%`;

    if (item.name === "VIP") {
      item.contractList = item.contractList.concat(
        `수익율 개별 상의`,
        `계약기간 개별 상의`
      );
      item.label = `${item.seed[0]} club`;
    } else {
      // item.contractList.unshift(`가입비 ${item.fee}만`);
      item.contractList.push(`수익율 ${setRateText}`);
      item.contractList.push(`최소 계약기간 ${item.contractPeriod}년`);
      item.label = `${item.seed[0]} club`;
    }

    return item;
  });
}
