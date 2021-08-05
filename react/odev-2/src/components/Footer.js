import {useEffect, useState} from "react";

const Footer = ({remain,filterTodos,deleteCompletedTodos}) => {

    const [status,setStatus] = useState("all")


    useEffect(()=> {
        filterTodos(status)
    },[status])

  return (
      <footer className="footer">
          <span className="todo-count">
			<strong>{remain}</strong>items left
          </span>

          <ul className="filters">
              <li>
                  <a className={status==="all" ? "selected" : null} onClick={()=> setStatus("all")}>All</a>
              </li>
              <li>
                  <a className={status==="uncompleted" ? "selected" : null} onClick={()=> setStatus("uncompleted")}>Active</a>
              </li>
              <li>
                  <a className={status==="completed" ? "selected" : null} onClick={()=> setStatus("completed")}>Completed</a>
              </li>
          </ul>
          <button onClick={deleteCompletedTodos} className="clear-completed">
              Clear completed
          </button>
      </footer>
  );
}

export default Footer