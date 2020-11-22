import * as actions from "@/store/actions";
import { handleActions } from "redux-actions";
import produce from "immer";

export const initialState = {
  number: 0,
  sagaTest: {
    pending: null,
    succesS: null,
    failure: null,
  },
};

export default handleActions(
  {
    [actions.COUNT_PLUS]: (state, { payload: diff }) => {
      return produce(state, (draft) => {
        draft.number += 1;
      });
    },
    [actions.COUNT_MINUS]: (state, { payload: diff }) => {
      return produce(state, (draft) => {
        draft.number -= 1;
      });
    },
    [actions.COUNT_SET_PLUS]: (state, { payload: diff }) => {
      return produce(state, (draft) => {
        draft.number += diff;
      });
    },
    [actions.COUNT_SET_MINUS]: (state, { payload: diff }) => {
      return produce(state, (draft) => {
        console.log(diff);
        draft.number -= diff;
      });
    },
    [actions.SAGA_TEST_PENDING]: (state, { payload: diff }) => {
      return produce(state, (draft) => {
        console.log("SAGA_TEST_PENDING");
        draft.sagaTest.pending = true;
        draft.sagaTest.success = null;
        draft.sagaTest.failure = null;
      });
    },
    [actions.SAGA_TEST_SUCCESS]: (state, { payload: diff }) => {
      return produce(state, (draft) => {
        console.log("SAGA_TEST_SUCCESS");
        draft.sagaTest.pending = null;
        draft.sagaTest.success = true;
        draft.sagaTest.failure = null;
      });
    },
    [actions.SAGA_TEST_FAILURE]: (state, { payload: diff }) => {
      return produce(state, (draft) => {
        console.log("SAGA_TEST_FAILURE");
        draft.sagaTest.pending = null;
        draft.sagaTest.success = null;
        draft.sagaTest.failure = true;
      });
    },
  },
  initialState
);

// const reducer = (state = initialState, action) => {
//   // 리듀서

//   console.log(action, "reducer");
//   switch (
//     action.type // 액션의 type이 COUNT_PLUS일땐 state에 + 1 COUNT_MINUS 일 땐 state에 -1
//   ) {
//     case actions.COUNT_PLUS:
//       console.log("여기로 와야하는데..");
//       return {
//         ...state,
//         number: state.number + 1,
//       };
//     case actions.COUNT_MINUS:
//       return {
//         ...state,
//         number: state.number - 1,
//       };
//     case actions.COUNT_SET_PLUS:
//       return {
//         ...state,
//         number: state.number + action.payload,
//       };
//     case actions.COUNT_SET_MINUS:
//       return {
//         ...state,
//         number: state.number - action.payload,
//       };
//     default:
//       return state;
//   }
// };
