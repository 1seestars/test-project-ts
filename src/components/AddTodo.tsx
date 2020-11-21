import React, { useState } from 'react'
import { ITodo } from '../interfaces'
import { IAddTodoProps } from '../interfaces'

const uniqid = require('uniqid')

const AddTodo: React.FC = ({ addTodo }: IAddTodoProps) => {
    const [value, setValue] = useState<string>('')

    const handleSubmit = (e: React.ChangeEvent) => {
        e.preventDefault()

        if (value) {
            const newTodo: ITodo = {
                id: uniqid(),
                title: value.trim(),
                createdAt: `${Date.now()}`
            }

            addTodo(newTodo)

            setValue('')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type={'text'}
                name={'title'}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder={'Введите название'}
            />
        </form>
    )
}

export default AddTodo
