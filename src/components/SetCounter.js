import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { set } from "../redux/actions/counter";

const SetCounter = () => {
  const dispatch = useDispatch();
  const { value: countFormStore } = useSelector((state) => state.counter);

  const [count, setCount] = useState(countFormStore);

  useEffect(() => {
    setCount(countFormStore);
  }, [countFormStore]);

  return (
    <section>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(set(count));
        }}
      >
        <label htmlFor="set-to">Set Count</label>
        <input
          id="set-to"
          type="number"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <input type="submit" />
      </form>
    </section>
  );
};

export default SetCounter;
