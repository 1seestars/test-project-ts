export interface ITodo {
    id: string
    title: string
    createdAt: string
}

export interface IAddTodoProps {
    addTodo: (todo: ITodo) => void
}

export interface ITodoListProps {
    todos: Array<ITodo> | []
}

export interface ITodoProps {
    todo: ITodo
}
