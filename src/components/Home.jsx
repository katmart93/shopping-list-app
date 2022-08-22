import { useEffect, useState } from "react";
// components
import ShoppingLists from "./ShoppingLists";
import AddListButton from "./AddListButton";
import Title from "./Title";
import FormModal from "./FormModal";
import NewListForm from "./NewListForm";
import ListModal from "./ListModal";

export default function Home() {
  // state
  const [showFormModal, setShowFormModal] = useState(false);
  const [showListModal, setShowListModal] = useState(false);
  const [currentList, setCurrentList] = useState([]);
  const [lists, setLists] = useState(
    JSON.parse(localStorage.getItem("SHOPPING_LIST")) || []
  );

  console.log(currentList);
  // effects
  useEffect(() => {
    localStorage.setItem("SHOPPING_LIST", JSON.stringify(lists));
  }, [lists]);

  const addList = (list) => {
    setLists((prevLists) => [...prevLists, list]);
    setShowFormModal(false);
  };

  const showList = (id) => {
    setCurrentList(lists.filter((currList) => currList.id === id));
    setShowListModal(true);
  };

  return (
    <div className="home-wrapper">
      <Title />
      <AddListButton setShowFormModal={setShowFormModal} />
      <ShoppingLists lists={lists} showList={showList} />
      {showFormModal && (
        <FormModal>
          <NewListForm addList={addList} setShowFormModal={setShowFormModal} />
        </FormModal>
      )}
      {showListModal && <ListModal currentList={currentList} />}
    </div>
  );
}
