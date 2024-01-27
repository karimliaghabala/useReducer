import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "SET_NEWTODO":
      return {
        ...state,
        newTodo: action.value,
      };
    case "ADD_NEWTODO":
      return {
        ...state,
        todos: [...state.todos, action.todo],
        newTodo: " ",
      };
  }
}
const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, {
    todos: [{ id: 1, todo: "kod yaz!" }],
    newTodo: "",
  });
  const inputHandler = (e) => {
    dispatch({
      type: "SET_NEWTODO",
      value: e.target.value,
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_NEWTODO",
      todo: {
        id: state.todos.length + 1,
        todo: state.newTodo,
      },
    });
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="add to do"
          value={state.newTodo}
          onChange={inputHandler}
        />
        <button type="submit">Add Todo</button>
      </form>
      <hr />
      <ul>
        {state.todos.map(({ id, todo }) => {
          return <li key={id}>{todo}</li>;
        })}
      </ul>
    </>
  );
};

export default Reducer;
