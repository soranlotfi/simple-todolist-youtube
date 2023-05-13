import {useTodoContext} from "./provider/todoProvider";

const Todolist = () => {
    const {todoList,removeTodo} = useTodoContext()
    return (
        <ul>
            {
                todoList.map((todo,) => (
                    <li key={todo.id}>{todo.text}
                        <button onClick={()=>removeTodo(todo.id)} > delete</button>
                    </li>
                ))
            }
        </ul>
    )
}
export default Todolist