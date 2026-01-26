import React, { useReducer } from "react";
const initialState = [
  { id: 1, text: "Learn useReducer", done: false },
];
function reducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: Date.now(),
          text: action.payload,
          done: false,
        },
      ];

    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, done: !todo.done }
          : todo
      );

    default:
      return state;
  }
}

 
const UseReducer4 = () => {
  const [todos, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h3>Todo List</h3>

 
      <button
        onClick={() =>
          dispatch({
            type: "ADD_TODO",
            payload: "New Todo",
          })
        }
      >
        Add Todo
      </button>

      
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{
                textDecoration: todo.done ? "line-through" : "none",
              }}
            >
              {todo.text}
            </span>

            <button
              onClick={() =>
                dispatch({
                  type: "TOGGLE_TODO",
                  payload: todo.id,
                })
              }
            >
              Toggle
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default UseReducer4;
