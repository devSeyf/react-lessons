import React, { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
      };

    case 'TOGGLE':
      return {
        ...state,
        isOn: !state.isOn,
      };

    default:
      return state;
  }
}

const UseReducer3 = () => {
  const initialState = { count: 0, isOn: false };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <p>Count: {state.count}</p>
      <p>Status: {state.isOn ? 'ON' : 'OFF'}</p>

      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+1</button>
      <button onClick={() => dispatch({ type: 'TOGGLE' })}>Toggle</button>
    </>
  );
};

export default UseReducer3;
