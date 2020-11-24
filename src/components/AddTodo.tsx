import React, { FormEvent, useState } from 'react'
import { ITodo } from '../interfaces'
import uniqid from 'uniqid'
import moment from 'moment'

interface IAddTodoProps {
    addTodo: (todo: ITodo) => void
}

const AddTodo: React.FC<IAddTodoProps> = ({ addTodo }) => {
    const [value, setValue] = useState<string>('')

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (value.trim()) {
            const newTodo: ITodo = {
                id: uniqid(),
                title: value.trim(),
                createdAt: moment().format('DD.MM.YYYY h:mm:ss')
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
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setValue(e.target.value)
                }
                placeholder={'Title'}
            />
        </form>
    )
}

export default AddTodo
