import React, { useState } from "react";

const State = () => {
  const [todos, setTodos] = useState([
    { id: 1, todo: "kod yaz!" },
    { id: 2, todo: "react oyren!" },
    { id: 3, todo: "derse get!" },
  ]);
  const [todo1, setTodo1] = useState("");
  const addTodoFunc = (e) => {
    e.preventDefault();
    setTodos([...todos, { id: todos.legth + 1, todo: todo1 }]);
    setTodo1("");
  };
  return (
    <>
      <form onSubmit={addTodoFunc}>
        <input
          type="text"
          placeholder="add to do"
          value={todo1}
          onChange={(e) => setTodo1(e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>
      <hr />
      <ul>
        {todos.map(({ id, todo }) => {
          return <li key={id}>{todo}</li>;
        })}
      </ul>
    </>
  );
};

export default State;
