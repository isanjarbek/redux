import { DECREMENT, INCREMENT, SET } from "../constants/counter";

const initialState = {
  value: 0,
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { value: state.value + 1 };
    case DECREMENT:
      return { value: state.value + 1 };
    case SET:
      return { value: action.payload };
    default:
      return state;
  }
};
