import { TodoProvider } from "./context/TodoContext";
import TodoApp from "./views/pages/TodoApp";

const App = () => {
    return (
        <TodoProvider>
            <TodoApp/>
        </TodoProvider>
    );
};

export default App;