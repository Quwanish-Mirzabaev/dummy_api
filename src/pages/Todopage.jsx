import { observer } from "mobx-react";
import axios from "axios";
import { useEffect } from "react";
import "./Todopage.css";
import todoStore from "./TodoStore";

const src = "https://dummyjson.com/todos";

const TodoItem = observer(({ todo, index }) => {
  return (
    <li className={todo.completed ? "completed" : ""} key={todo.id}>
      <input
        className="inp-check"
        type="checkbox"
        checked={todo.completed}
        onChange={() => todoStore.toggleCompleted(index)}
      />
      {todo.todo}
    </li>
  );
});

function TodoPage() {
  useEffect(() => {
    axios.get(src).then((res) => {
      todoStore.setTodos(res.data.todos);
    });
  }, []);

  return (
    <>
      <div className="div-to">
        <ul className="ul-todos">
          {todoStore.getTodos().map((item, index) => {
            return <TodoItem todo={item} index={index} key={item.id} />;
          })}
        </ul>
      </div>
    </>
  );
}

export default observer(TodoPage);