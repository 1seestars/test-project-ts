export interface ITodo {
    id: string
    title: string
    createdAt: string
}

export interface IAddTodoProps {
    addTodo: (todo: ITodo) => void
}
