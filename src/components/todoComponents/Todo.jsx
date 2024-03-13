import React from "react"

export default function Todo({task, removeTodo}){
    return(
    <div>
        {task}
        <button onClick={removeTodo}>X</button>
    </div>
    )
}