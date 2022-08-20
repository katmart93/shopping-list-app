import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
// components
import ShoppingLists from "../components/ShoppingLists";
import AddListButton from "../components/AddListButton";
import Title from "../components/Title";
import Modal from "../components/Modal";
import NewListForm from "../components/NewListForm";

export default function Home() {
  // state
  const [showModal, setShowModal] = useState(false);
  const [currentList, setCurrentList] = useState([]);
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

  const navigate = useNavigate();
  console.log(currentList);

  const addList = (list) => {
    setLists((prevLists) => [...prevLists, list]);
    setShowModal(false);
  };

  const showList = (id) => {
    setCurrentList(lists.filter((currList) => currList.id === id));
    navigate("/shopping-list");
  };

  return (
    <div>
      <Title />
      <ShoppingLists lists={lists} showList={showList} />
      <AddListButton setShowModal={setShowModal} />
      {showModal && (
        <Modal>
          <NewListForm addList={addList} />
        </Modal>
      )}
    </div>
  );
}
