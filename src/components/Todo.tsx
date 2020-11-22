import React from 'react'
import { ITodoProps } from '../interfaces'

const Todo: React.FC<ITodoProps> = ({ todo }) => (
    <li key={todo.id}>
        {todo.title}&nbsp;{todo.createdAt}
    </li>
)

export default Todo
