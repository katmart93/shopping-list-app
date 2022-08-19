import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
// components
import ShoppingLists from "./ShoppingLists";
import AddListButton from "./AddListButton";
import Title from "./Title";
import Modal from "./Modal";

export default function Home() {
  const [lists, setLists] = useState([
    {
      title: "Home",
      date: "05.06.2022",
      id: uuidv4(),
      listItems: ["sushi", "carrots", "apples"],
    },
    {
      title: "Grill",
      date: "2.02.2022",
      id: uuidv4(),
      listItems: ["bananas", "kiwis", "bread", "chips"],
    },
  ]);
  return (
    <div>
      <Title />
      <ShoppingLists lists={lists} />
      <AddListButton />
      <Modal />
    </div>
  );
}
