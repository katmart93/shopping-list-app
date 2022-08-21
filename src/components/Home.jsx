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
    <div>
      <Title />
      <ShoppingLists lists={lists} showList={showList} />
      <AddListButton setShowFormModal={setShowFormModal} />
      {showFormModal && (
        <FormModal>
          <NewListForm addList={addList} />
        </FormModal>
      )}
      {showListModal && <ListModal currentList={currentList} />}
    </div>
  );
}
