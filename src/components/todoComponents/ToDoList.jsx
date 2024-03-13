import React from "react"
import Todo from "./Todo"
import NewToDoForm from "./NewTodoForm"

export default function TodoList() {
    const [todos, setTodos] = React.useState([]);

    const addTodo = (task) => {
        setTodos([...todos, task]);
    };

    const removeTodo = (index) => {
        setTodos(todos.filter((todo, i) => i !== index));
    };

    return (
        <div>
            <NewToDoForm addTodo={addTodo} />
            {todos.map((todo, index) => (
                <Todo key={index} task={todo} removeTodo={() => removeTodo(index)} />
            ))}
        </div>
    );
}