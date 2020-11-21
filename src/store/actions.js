import { createAction } from "redux-actions";

export const COUNT_PLUS = "COUNT_PLUS";
export const COUNT_MINUS = "COUNT_MINUS";
export const COUNT_SET_PLUS = "COUNT_SET_PLUS";
export const COUNT_SET_MINUS = "COUNT_SET_MINUS";

export const countPlusAction = createAction(COUNT_PLUS);
export const countMinusAction = createAction(COUNT_MINUS);
export const countSetPlusAction = createAction(COUNT_SET_PLUS);
export const countSetMinusAction = createAction(COUNT_SET_MINUS);

// NOTE: sagas
export const SAGA_TEST = "SAGA_TEST";
export const SAGA_TEST_INIT = "SAGA_TEST_INIT";
export const SAGA_TEST_PENDING = "SAGA_TEST_PENDING";
export const SAGA_TEST_SUCCESS = "SAGA_TEST_SUCCESS";
export const SAGA_TEST_FAILURE = "SAGA_TEST_FAILURE";

export const sagaTestAction = createAction(SAGA_TEST);
export const sagaTestAction_init = createAction(SAGA_TEST_INIT);
export const sagaTestAction_pending = createAction(SAGA_TEST_PENDING);
export const sagaTestAction_success = createAction(SAGA_TEST_SUCCESS);
export const sagaTestAction_failure = createAction(SAGA_TEST_FAILURE);
