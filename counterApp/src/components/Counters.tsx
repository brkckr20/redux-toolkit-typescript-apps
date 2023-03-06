import { useState, FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../redux/counter/counterSlice";
import { RootState } from "../redux/store";

const Counters: FC = () => {
  const { value } = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);
  return (
    <div>
      <h1>{value}</h1>
      <div>
        <button onClick={() => dispatch(increment())}>Arttir</button>
        <button onClick={() => dispatch(decrement())}>Azalt</button>
        <br />
        <br />
        <div>
          <input
            type="number"
            onChange={(e) => setAmount(Number(e.target.value))}
          />
          <br />
          <br />
          <button onClick={() => dispatch(incrementByAmount(amount))}>
            Değer kadar artır
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counters;
