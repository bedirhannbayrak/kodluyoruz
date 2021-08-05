import {useState} from "react";

const Header = ({addTodo}) => {

    const [todo,setTodo] = useState({todo:"",completed:false,id:""})

    const handleChange= (e)=>{
        setTodo({todo:e.target.value,completed:false})
    }

    function handleClick(e) {
        e.preventDefault()
        addTodo(todo)
        setTodo({todo:"",completed:false})
    }

    return (
       <header className="header">
           <h1>todos</h1>
           <form onSubmit={handleClick}>
               <input value={todo.todo} onChange={handleChange} className="new-todo" placeholder="What needs to be done?" autoFocus />
           </form>
       </header>
  );
}

export default Header