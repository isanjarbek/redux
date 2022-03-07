import { useSelector } from "react-redux";
import { useActions } from "./useActions";
import { increment, decrement, set } from "../redux/actions";

export const useCounter = () => {
  const count = useSelector((state) => state.count);
  const actions = useActions({ increment, decrement, set });

  return { count, ...actions };
};
