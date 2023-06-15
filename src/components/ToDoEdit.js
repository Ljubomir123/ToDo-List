import { useState } from "react"

function TodoEdit({name, onSubmit}){
const[title,setTitle]=useState(name.title)

const handleChange=(e)=>{
    setTitle(e.target.value)
}

const handleSubmit=(e)=>{
    e.preventDefault()
    onSubmit(name.id, title)
   

}
    return(
        <form onSubmit={handleSubmit}>
            <label>Edit:</label>
            <input value={title} onChange={handleChange}/>
            <button>Save</button>
        </form>
    )
}

export default TodoEdit

