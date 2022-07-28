import Header from "./Content/Header/Header.jsx";
import CardComponent from "./CardComponent/CardComponent.jsx";
import "./App.css";

function App() {
  const list = [
    {
      id: 1,
      img: "/REACT-PIZZA/PizzaImg/image11.png",
      title: "Чизбургер-пицца",
      price: "395",
    },
    {
      id: 2,
      img: "/REACT-PIZZA/PizzaImg/image22.png",
      title: "Сырная",
      price: "450",
    },
    {
      id: 3,
      img: "/REACT-PIZZA/PizzaImg/image33.png",
      title: "Креветки по-азиатски",
      price: "290",
    },
    {
      id: 4,
      img: "/REACT-PIZZA/PizzaImg/image44.png",
      title: "Сырный цыпленок",
      price: "385",
    },
    {
      id: 5,
      img: "/REACT-PIZZA/PizzaImg/image11.png",
      title: "Чизбургер-пицца",
      price: "395",
    },
    {
      id: 6,
      img: "/REACT-PIZZA/PizzaImg/image22.png",
      title: "Сырная",
      price: "450",
    },
    {
      id: 7,
      img: "/REACT-PIZZA/PizzaImg/image33.png",
      title: "Креветки по-азиатски",
      price: "290",
    },
    {
      id: 8,
      img: "/REACT-PIZZA/PizzaImg/image44.png",
      title: "Сырный цыпленок",
      price: "385",
    },
  ];

  return (
    <div className="App">
      <Header />
      <CardComponent list={list} />
    </div>
  );
}

export default App;
