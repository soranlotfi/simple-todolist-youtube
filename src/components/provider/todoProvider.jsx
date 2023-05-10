import {createContext, useContext, useState} from "react";
import todolist from "../todolist";


const TodoContext = createContext()
const initialTodoListState = ["learn react context api"]
const TodoProvider = ({children}) => {
    const [todoList, setTodolist] = useState(initialTodoListState)

    const addTodo = (newTodoItem) => {
        console.log("new Todo Item ")
        setTodolist([...todoList , newTodoItem])
        console.log("Todolist " + todoList)
    }

    const removeTodo = (todoIndex)=>{
        const newList = todoList.filter((_, index ) => index!== todoIndex)
        setTodolist(newList)
    }
    const TodosNumber = () => {
        return todoList.length
    }

    const contextValue = {
        todoList,
        TodosNumber,
        addTodo,
        removeTodo
    }
    return <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>
}

export const useTodoContext = () => useContext(TodoContext)
export default TodoProvider