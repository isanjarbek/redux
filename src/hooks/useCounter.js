import { useSelector } from "react-redux";
import { useActions } from "./useActions";
import { increment, decrement, set } from "../redux/actions/counter";

export const useCounter = () => {
  const { value: count } = useSelector((state) => state.counter);
  const actions = useActions({ increment, decrement, set });

  return { count, ...actions };
};
