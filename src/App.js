import Header from "./Content/Header/Header.jsx";
import { useState } from "react";
import CardComponent from "./CardComponent/CardComponent.jsx";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Javascript", body: "Description" },
    { id: 2, title: "Javascript", body: "Description" },
    { id: 3, title: "Javascript", body: "Description" },
    { id: 3, title: "Javascript", body: "Description" },
    { id: 3, title: "Javascript", body: "Description" },
  ]);

  return (
    <div className="App">
      <Header />
      <CardComponent  posts={id}  title={title} />
    </div>
  );
}

export default App;
