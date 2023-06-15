import { useState } from "react";
import ToDoList from "./TodoList";
import  "./style.css";

function ToDoCreate({onCreate, names,onDelete, onEdit}){
    const [title, setTitle]=useState('')

    const handleChange=(e)=>{
        setTitle(e.target.value)
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        onCreate(title)
        setTitle('')
    }
    return(
    
        <>
    
    <form className="form" onSubmit={handleSubmit}>
        <h1 className="primary">ToDo-List</h1>
        <input value={title} onChange={handleChange} className="input"/>
        <button>Add</button>
    </form>

    <ToDoList names={names} onDelete={onDelete} onEdit={onEdit}/>

    </>

    
    )


}

export default ToDoCreate;