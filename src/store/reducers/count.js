import * as actions from "@/store/actions";

export const initialState = {
  number: 0,
}; // 처음 state값으로 count 0을 주었다. state값은 객체, 배열로도 사용할 수 있다.

const reducer = (state = initialState, action) => {
  // 리듀서

  console.log(action, "reducer");
  switch (
    action.type // 액션의 type이 COUNT_PLUS일땐 state에 + 1 COUNT_MINUS 일 땐 state에 -1
  ) {
    case actions.COUNT_PLUS:
      console.log("여기로 와야하는데..");
      return {
        ...state,
        number: state.number + 1,
      };
    case actions.COUNT_MINUS:
      return {
        ...state,
        number: state.number - 1,
      };
    case actions.COUNT_SET_PLUS:
      return {
        ...state,
        number: state.number + action.payload,
      };
    case actions.COUNT_SET_MINUS:
      return {
        ...state,
        number: state.number - action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
