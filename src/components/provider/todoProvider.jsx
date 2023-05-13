import { createContext, useContext, useReducer, useEffect } from "react";
import { v4 as uuid } from "uuid";

const TodoContext = createContext();

export const ACTIONS = {
    ADD_TODO: 'ADD_TODO',
    TOGGLE_TODO: 'TOGGLE_TODO',
    DELETE_TODO: 'DELETE_TODO'
};

function todoListReducer(state, action) {
    switch (action.type) {
        case ACTIONS.ADD_TODO:
            return [
                ...state,
                { id: uuid(), text: action.payload }
            ];
        case ACTIONS.DELETE_TODO:
            return state.filter((todo) => todo.id !== action.payload);
        default:
            return state;
    }
}

// const initialTodoListState = ["learn react context api"]
const TodoProvider = ({ children }) => {
    const [todoList, dispatch] = useReducer(todoListReducer, []);

    useEffect(() => {
        todoList.map((todo) => console.log(todo.id));
    }, [todoList]);

    const addTodo = (newTodoItem) => {
        console.log("new Todo Item ");
        dispatch({ type: ACTIONS.ADD_TODO, payload: newTodoItem });
    };

    const removeTodo = (todoId) => {
        dispatch({ type: ACTIONS.DELETE_TODO, payload: todoId });
    };

    const TodosNumber = () => {
        return todoList.length;
    };

    const contextValue = {
        todoList,
        TodosNumber,
        addTodo,
        removeTodo
    };
    return (
        <TodoContext.Provider value={contextValue}>
            {children}
        </TodoContext.Provider>
    );
};

export const useTodoContext = () => useContext(TodoContext);

export default TodoProvider;