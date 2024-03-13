import React from "react"

export default function NewToDoForm({ addTodo }){
    const [task, setTask] = React.useState("")

   
   function handleChange(event){
    const{value} = event.target
    setTask(value)
   }

    const handleSubmit = (event) => {
        event.preventDefault();
        addTodo(task)
        setTask("")
    }
    return(
       <form onSubmit={handleSubmit}>
        <input 
            type="text"
            name="task"
            value={task}
            placeholder="Enter new task"
            onChange={handleChange}
        />

        <button>Add Todo</button>
       </form> 
    )
}