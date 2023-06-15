import TodoShow from "./TodoShow"

function ToDoList({names, onDelete, onEdit}){
    
        const renderedNames = names.map((name)=>{
            return<TodoShow key={name.id} name={name} onDelete={onDelete} onEdit={onEdit} />
        })
    
        return(
            <div>{renderedNames}</div>
        )
    }
    

export default ToDoList;