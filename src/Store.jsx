import { createStore } from "redux";

const reducer = (state, type) => {
  if (type.type === "change") {
    return {
      value: type.payload,
    };
  }

  if (type.type === "none") {
    return {
        value: "none"
    };
  }

  return state;
};

const initilState = {
  value: "none",
};

export const store = createStore(reducer, initilState);
