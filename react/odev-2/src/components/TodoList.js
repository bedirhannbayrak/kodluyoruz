import Todo from "./Todo";

const TodoList = ({editTodo,todos,deleteTodo,toggleComplete}) => {
  return (
      <ul className="todo-list">
          {
              todos.map((item,key)=> {
                  return <Todo editTodo={editTodo} toggleComplete={toggleComplete} deleteTodo={deleteTodo} item={item} key={item.id}/>
              })
          }
      </ul>
  );
}

export default TodoList