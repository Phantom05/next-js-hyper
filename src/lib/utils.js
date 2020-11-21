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

export function useDidUpdateEffect(fn, inputs) {
  const didMountRef = useRef(false);
  useEffect(() => {
    if (didMountRef.current) {
      fn();
    } else {
      didMountRef.current = true;
    }
  }, inputs);
}
