import axios from "axios";
import { useEffect, useState } from "react";
import "./Todopage.css";
const src = "https://dummyjson.com/todos";

function Todopage() {
  const [todos, setTodo] = useState([]);

  console.log(todos);
  useEffect(() => {
    axios.get(src).then((res) => {
      setTodo(res.data.todos);
    });
  }, []);

  return (
    <>
      <ul className="ul-todos">
        {todos.map((item) => {
          return (
            <>
              <li>
                <input className="inp-check" type="checkbox"></input>
                {item.todo}
              </li>
            </>
          );
        })}
      </ul>
    </>
  );
}
export default Todopage;