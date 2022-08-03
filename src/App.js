import Header from "./Content/Header/Header.jsx";
import Pizzas from "./components/Pizzas.jsx";
import list from "./stateArray/StateArray";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Pizzas list={list} />
      
    </div>
  );
}

export default App;
