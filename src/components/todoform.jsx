import {useTodoContext} from "./provider/todoProvider";
import {useState} from "react";
const TodoForm = ()=>{
    const {TodosNumber,addTodo} = useTodoContext()
    const [todoItem ,setTodoItem] = useState('')

    function handleSubmit(e){
        e.preventDefault()
        if(!todoItem){
            return;
        }
        addTodo(todoItem)
        setTodoItem("")
        console.log("todo Item "  + todoItem)
    }

    return(
        <form onSubmit={handleSubmit}>
            <h3>Number Of Todos : {TodosNumber()} </h3>
            <input
                type="text"
                value={todoItem}
                onChange={(e)=>setTodoItem(e.target.value)}
            />
            <button type="submit">Submit</button>
        </form>
    )
}
export default TodoForm;