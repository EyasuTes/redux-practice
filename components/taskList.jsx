import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { addItems, removeItems } from "../store/slices/todoSlice";

function TaskList({ items, count, addItems, removeItems }) {
  const [task, setTask] = useState("");
  function handleAdd() {
    addItems({ id: Date.now(), text: task });
  }

  return (
    <div>
      <h1>Todo list</h1>
      {console.log(items)}
      <div>count:{count}</div>
      {items &&
        items.map((item) => (
          <div key={item.id}>
            <div>{item.text}</div>
            <button onClick={() => removeItems({ id: item.id })}>remove</button>
          </div>
        ))}

      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAdd}>add</button>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    items: state.todo.items,
    count: state.todo.count,
  };
};
export default connect(mapStateToProps, { addItems, removeItems })(TaskList);
