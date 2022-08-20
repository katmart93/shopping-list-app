import { useEffect, useState } from "react";
// components
import ShoppingLists from "../components/ShoppingLists";
import AddListButton from "../components/AddListButton";
import Title from "../components/Title";
import Modal from "../components/Modal";
import NewListForm from "../components/NewListForm";

export default function Home() {
  // state
  const [showModal, setShowModal] = useState(false);
  const [lists, setLists] = useState(
    JSON.parse(localStorage.getItem("SHOPPING_LIST")) || []
  );

  useEffect(() => {
    localStorage.setItem("SHOPPING_LIST", JSON.stringify(lists));
  }, [lists]);

  const addList = (list) => {
    setLists((prevLists) => [...prevLists, list]);
    setShowModal(false);
  };

  return (
    <div>
      <Title />
      <ShoppingLists lists={lists} />
      <AddListButton setShowModal={setShowModal} />
      {showModal && (
        <Modal>
          <NewListForm addList={addList} />
        </Modal>
      )}
    </div>
  );
}
