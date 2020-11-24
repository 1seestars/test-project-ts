import React from 'react'
import { ITodo } from '../interfaces'

interface ITodoProps {
    todo: ITodo
}

const Todo: React.FC<ITodoProps> = ({ todo }) => (
    <li key={todo.id}>
        {todo.title}&nbsp;{todo.createdAt}
    </li>
)

export default Todo
