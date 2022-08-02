import Header from "./Content/Header/Header.jsx";
import CardComponent from "./CardComponent/CardComponent.jsx";
import list from "./stateArray/StateArray"
import "./App.css";

function App() {
 

  return (
    <div className="App">
      <Header />
      <CardComponent list={list} />
    </div>
  );
}

export default App;
