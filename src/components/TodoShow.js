import TodoEdit from "./ToDoEdit"

import { useState } from "react"



function TodoShow({name, onDelete, onEdit}){
    const[showEdit, setShowEdit]=useState(false)


    const handleSubmit=(id, newTitle)=>{
        onEdit(id, newTitle)
        setShowEdit(false)
    }

    const handleEdit=()=>{
        setShowEdit(!showEdit)
    }

    const deleteClick=()=>{
     onDelete(name.id)
    }
  
    let content=<div className="nameTitle">
        
       <h3 className="h3">{name.title}</h3> 
        
        </div>
    
    if(showEdit){
        return<TodoEdit onEdit={onEdit} name={name} onSubmit={handleSubmit}/>
    }



return<div className="content">{content}
<button className="buttond" onClick={deleteClick}>Delete</button>
<button className="buttone" onClick={handleEdit}>Edit</button>
</div>

}

export default TodoShow