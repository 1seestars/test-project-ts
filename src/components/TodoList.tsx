import React from 'react'
import Todo from './Todo'
import { ITodo } from '../interfaces'
import { ITodoListProps } from '../interfaces'

const TodoLIst: React.FC<ITodoListProps> = ({ todos }) => (
    <ul>
        {(todos as Array<ITodo>).map((todo) => (
            <Todo todo={todo} />
        ))}
    </ul>
)

export default TodoLIst
