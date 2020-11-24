import React from 'react'
import Todo from './Todo'
import { ITodo } from '../interfaces'

interface ITodoListProps {
    todos: Array<ITodo> | []
}

const TodoLIst: React.FC<ITodoListProps> = ({ todos }) => (
    <ul>
        {(todos as Array<ITodo>).map((todo) => (
            <Todo todo={todo} />
        ))}
    </ul>
)

export default TodoLIst
