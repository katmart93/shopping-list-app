import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
//components
import Title from "./components/Title";
// styles
import "./App.css";

function App() {
  const [shoppingLists, setShoppingLists] = useState([
    { title: "Home", date: "05.06.2022", id: uuidv4() },
    { title: "Grill", date: "2.02.2022", id: uuidv4() },
  ]);

  return (
    <div className="App">
      <Title />
    </div>
  );
}

export default App;
