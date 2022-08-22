import { useEffect, useState } from "react";
// components
import ShoppingLists from "./ShoppingLists";
import AddListButton from "./AddListButton";
import Title from "./Title";
import NewListForm from "./NewListForm";
import SingleList from "./SingleList";

export default function Home() {
  // state
  const [showNewListForm, setShowNewListForm] = useState(false);
  const [showSingleList, setShowSingleList] = useState(false);
  const [currentList, setCurrentList] = useState([]);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [item, setItem] = useState("");
  const [currItems, setCurrItems] = useState([]);
  const [lists, setLists] = useState(
    JSON.parse(localStorage.getItem("SHOPPING_LIST")) || []
  );

  console.log(currentList);
  // effects
  useEffect(() => {
    localStorage.setItem("SHOPPING_LIST", JSON.stringify(lists));
  }, [lists]);

  // functions
  const addList = (list) => {
    setLists((prevLists) => [...prevLists, list]);
    setShowNewListForm(false);
  };

  const showList = (id) => {
    setCurrentList(lists.filter((currList) => currList.id === id));
    setShowSingleList(true);
  };

  const editList = (list) => {};

  const removeList = (id) => {
    setLists(lists.filter((list) => list.id !== id));
  };

  return (
    <div className="home-wrapper">
      <Title />
      <AddListButton setShowNewListForm={setShowNewListForm} />
      <ShoppingLists
        lists={lists}
        showList={showList}
        removeList={removeList}
      />
      {showNewListForm && (
        <NewListForm
          addList={addList}
          setShowNewListForm={setShowNewListForm}
          title={title}
          setTitle={setTitle}
          date={date}
          setDate={setDate}
          item={item}
          setItem={setItem}
          currItems={currItems}
          setCurrItems={setCurrItems}
        />
      )}
      {showSingleList && (
        <SingleList
          currentList={currentList}
          setShowSingleList={setShowSingleList}
        />
      )}
    </div>
  );
}
