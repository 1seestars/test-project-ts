import React, {useState} from 'react';
import AddTodo from "./AddTodo";
import { ITodo } from "../interfaces"
import TodoLIst from "./TodoList";

const App: React.FC = () => {

    const [todos, setTodos] = useState<Array<ITodo>>([])

    const addTodo = (newTodo) => {
        setTodos(prev => [...prev, newTodo])
    }

    return (
        <>
            <AddTodo addTodo={addTodo} />
            <TodoLIst todos={todos} />
            </>
     )
}

export default App;
