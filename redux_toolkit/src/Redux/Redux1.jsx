import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, addByAmount } from "../store/counterSlice";

const Redux1 = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    return (
        <div>
            <h2>Counter</h2>
            <p>{count}</p>
            <button onClick={() => dispatch(increment())}>+1</button>
            <button onClick={() => dispatch(decrement())}>-1</button>
            <button onClick={() => dispatch(addByAmount(5))}>+5</button>
        </div>
    );
}

export default Redux1;
