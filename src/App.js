import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
//components
import Title from "./components/Title";
import ShoppingLists from "./components/ShoppingLists";
// styles
import "./App.css";

function App() {
  const [lists, setLists] = useState([
    { title: "Home", date: "05.06.2022", id: uuidv4() },
    { title: "Grill", date: "2.02.2022", id: uuidv4() },
  ]);

  return (
    <div className="App">
      <Title />
      <ShoppingLists lists={lists} />
    </div>
  );
}

export default App;
