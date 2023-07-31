import "./styles.css";
import { useState } from "react";
export default function Todo() {
  const [tasks, setTasks] = useState([{}]);
  const [value, setValue] = useState("");

  function additem(e) {
    e.preventDefault();
    if (!value) return;
    const newTask = [...tasks, { text: `${value}` }];
    setTasks(newTask);
    setValue(" ");
  }
  function removeItem(e, id) {
    e.preventDefault();
    let temp = [...tasks];
    temp.splice(id, 1);
    setTasks(temp);
  }

  return (
    <>
      <div className="Name">
        <h1 style={{ color: "purple" }}>TO - DO</h1>
      </div>
      <div>
        <form className="submit" onClick={additem}>
          <input
            type="text"
            className="input"
            placeholder="ADD"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          ></input>
          <br />
          <br />
          <button className="btn_remove"> SUBMIT </button> <br />
          <br />
        </form>
        {tasks.map((item, id) => (
          <div className="task" key={id} id={id}>
            <br />
            {item.text}
            <button className="btn_remove" onClick={(e) => removeItem(e, id)}>
              Done
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
