
import './App.css';
import TodoProvider from "./components/provider/todoProvider";
import Todolist from "./components/todolist";
import Todoform from "./components/todoform";

function App() {
  return (
    <div className="App">
        <h1>Todo list</h1>
        <TodoProvider>
            <Todoform/>
            <Todolist/>
        </TodoProvider>
    </div>
  );
}

export default App;
