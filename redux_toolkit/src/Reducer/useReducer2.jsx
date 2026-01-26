import React, { useReducer } from 'react';

function reducer(state, action) {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + action.payload };

        case 'DECREMENT':
            return { count: state.count - action.payload };

        case 'RESET':
            return { count: 0 };
        default:
            return state;
    }
}

const UseReducer2 = () => {
    const initialState = { count: 0 };
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <p>{state.count}</p>
            <button onClick={() => dispatch({ type: 'INCREMENT', payload: 5 })}>
                +5
            </button>

            <button onClick={() => dispatch({ type: 'DECREMENT', payload: 5 })}>
                -5
            </button>

            <button onClick={() => dispatch({ type: 'RESET' })}>RESET</button>
        </>
    );
};

export default UseReducer2;

