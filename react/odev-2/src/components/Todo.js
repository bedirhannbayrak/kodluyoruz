import {useState} from "react";

const Todo = ({editTodo,item,deleteTodo,toggleComplete}) => {

    const [input,setInput]=useState(item.todo)

    function handeToggle(e) {
        toggleComplete(item.todo)
        if (item.completed) {
            e.target.checked=true;
        }
    }

    function handleChange(e) {
        setInput(() => e.target.value)
    }

    function addInput(e) {
        if (e.charCode === 13) {
            editTodo(item.id,{...item,todo:input})
        }
    }

    return (
      <li  className={item.completed ? "completed" : null}>
          <div className="view">
              <input checked={item.completed} onChange={handeToggle} className="toggle" type="checkbox"/>
              <label>
                  <input onKeyPress={addInput} onChange={handleChange} value={input} className={`input-todo ${item.completed ? "completed" : null}`} />
              </label>
              <button onClick={() => {deleteTodo(item.todo)}} className="destroy" />
          </div>
      </li>
  );
}

export default Todo