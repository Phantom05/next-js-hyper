export const COUNT_PLUS = "COUNT_PLUS";
export const COUNT_MINUS = "COUNT_MINUS";
export const COUNT_SET_PLUS = "COUNT_SET_PLUS";
export const COUNT_SET_MINUS = "COUNT_SET_MINUS";

export const countPlusAction = () => ({
  // 액션 생성 함수
  type: COUNT_PLUS,
});

export const countMinusAction = () => ({
  type: COUNT_MINUS,
});

export const countSetPlusAction = (count) => ({
  type: COUNT_SET_PLUS,
  payload: count,
});

export const countSetMinusAction = (count) => ({
  type: COUNT_SET_MINUS,
  payload: count,
});
