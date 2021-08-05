import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import {useEffect, useState} from "react";
import Footer from "./components/Footer";

function App() {

    const initialTodos = () => JSON.parse(window.localStorage.getItem("todos")) || []
    const [todos,setTodos] = useState(initialTodos)
    const [filteredTodos,setFilteredTodos] = useState(todos)
    const [remain,setRemain]=useState(0)

    useEffect(()=> {
        setRemain(unCompletedTodosCount())
        setFilteredTodos(todos)
        window.localStorage.setItem("todos",JSON.stringify(todos))
    },[todos])

    useEffect(()=> {
        setFilteredTodos(todos)
    },[])

    const addTodo = function (todo) {
        if (todo.todo.length > 0) {
            if (!todos.some((i) => {
                return i.todo === todo.todo
            })) {
                setTodos([...todos, {...todo,id:new Date().getTime()}]);
            }
        }
    };


    const deleteTodo = (todo)=> {
        setTodos([...todos].filter(i => i.todo !==todo))
    }

    const editTodo = (todoId,todo)=> {
        setTodos([...todos].map(
            i => {
                if (i.id === todoId) {
                    return todo
                }
                return i
            }
        ))
    }

    const deleteCompletedTodos = (todo)=> {
        setTodos([...todos].filter(i => i.completed ==false))
    }

    function toggleComplete (todo){
        setTodos(todos.map((i) => {
            if (i.todo === todo) {
                console.log(i)
                return {...i,completed :!i.completed}
            }
            return i
        }))
    }

    function filterTodos(filterBy) {
        if (filterBy === "uncompleted") {
            setFilteredTodos(todos.filter(i => i.completed!==true));
        }else if (filterBy === "completed") {
            setFilteredTodos(todos.filter(i => i.completed===true));
        }else{
            setFilteredTodos(todos)
        }
    }

    function unCompletedTodosCount(){
        return todos.filter( i => i.completed!=true).length
    }

    function toggleAll (todo){
        if(todos.every(i => i.completed === true)){
            setTodos([...todos].map(i => ({...i,completed:false})))
        }else{
            setTodos([...todos].map(i => ({...i,completed:true})))
        }
    }

    return (
        <section className="todoapp">
            <Header addTodo={addTodo} />
            <Main editTodo={editTodo} toggleAll={toggleAll} toggleComplete ={toggleComplete} deleteTodo={deleteTodo} todos={filteredTodos}  />
            {todos.length>0 ? <Footer deleteCompletedTodos={deleteCompletedTodos} remain={remain} filterTodos={filterTodos} /> : null }
        </section>
    );
}

export default App;
