import React from 'react'
import Todo from "./Todo";

const TodoLIst: React.FC = ({ todos }) => (
    <ul>
        {todos.map(todo => (<Todo title={todo.title} />))}
    </ul>
    )


export default TodoLIst


