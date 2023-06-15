import ToDoCreate from "./components/ToDoCreate";
import { useState, useEffect } from "react";
import axios from 'axios'

function App() {
const[names, setNames]=useState([])

const fetchNames= async ()=>{

  const response= await axios.get('http://localhost:3001/names ');

  setNames(response.data)
}

useEffect(()=>{
  fetchNames();
},[])



const editNameById= async (id,newTitle)=>{

  const response= await axios.put(`http://localhost:3001/names/${id}`, {
    title: newTitle
  })

  console.log(response)
  const updatedNames=names.map((name)=>{
    if (name.id===id){
      return{...name, ...response.data}
    }

    return name;
  })
  setNames(updatedNames)
}



const onDelete=async (id)=>{

  await axios.delete(`http://localhost:3001/names/${id}`)
  const updatedNames=names.filter((name)=>{
    return name.id!==id
  })

  setNames(updatedNames)
}
const onCreate= async (title)=>{

const response= await axios.post('http://localhost:3001/names',{
    title
  })

  console.log(response)
   const updatedNames=[
       ...names,
  response.data
  ]

   setNames(updatedNames)
 
}

  
return<ToDoCreate onCreate={onCreate} names={names} onDelete={onDelete} onEdit={editNameById}/>

}



export default App;
