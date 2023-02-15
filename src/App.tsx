import { Provider } from "react-redux";
import STORE from "./redux/store";
import TodoList from "./components/TodoList";

function App() {
  return (
    <Provider store={ STORE } >
      <TodoList />
    </Provider>
  );
}

export default App;
