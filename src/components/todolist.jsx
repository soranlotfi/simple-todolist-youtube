import {useTodoContext} from "./provider/todoProvider";

const Todolist = () => {
    const {todoList,removeTodo} = useTodoContext()
    return (
        <ul>
            {
                todoList.map((todo, index) => (
                    <li key={index}>{todo}
                        <button onClick={()=>removeTodo(index)} > delete</button>
                    </li>
                ))
            }
        </ul>
    )
}
export default Todolist