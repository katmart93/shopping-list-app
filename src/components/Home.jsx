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
  const [currItems, setCurrItems] = useState([]);
  const [currId, setCurrId] = useState(null);
  const [item, setItem] = useState("");
  const [lists, setLists] = useState(
    JSON.parse(localStorage.getItem("SHOPPING_LIST")) || []
  );

  console.log(currentList);
  // saving data in local storage
  useEffect(() => {
    localStorage.setItem("SHOPPING_LIST", JSON.stringify(lists));
  }, [lists]);

  // NewListForm
  const addList = (list) => {
    setLists((prevLists) => [...prevLists, list]);
    setShowNewListForm(false);
  };

  const closeForm = () => {
    setTitle("");
    setDate("");
    setCurrItems([]);
    setCurrId(null);
    setShowNewListForm(false);
  };

  // ShoppingLists
  const showList = (id) => {
    setCurrentList(lists.filter((currList) => currList.id === id));
    setShowSingleList(true);
  };

  const editList = (list) => {
    setShowNewListForm(true);
    setTitle(list.title);
    setDate(list.date);
    setCurrItems(list.listItems);
    setCurrId(list.id);
  };
  console.log("id", currId);
  const removeList = (id) => {
    setLists(lists.filter((list) => list.id !== id));
  };

  // SingleList
  const closeList = () => {
    setCurrentList([]);
    setShowSingleList(false);
  };

  return (
    <div className="home-wrapper">
      <Title />
      <AddListButton setShowNewListForm={setShowNewListForm} />
      <ShoppingLists
        lists={lists}
        showList={showList}
        editList={editList}
        removeList={removeList}
      />
      {showNewListForm && (
        <NewListForm
          addList={addList}
          closeForm={closeForm}
          title={title}
          setTitle={setTitle}
          date={date}
          setDate={setDate}
          item={item}
          setItem={setItem}
          currItems={currItems}
          setCurrItems={setCurrItems}
          currId={currId}
        />
      )}
      {showSingleList && (
        <SingleList currentList={currentList} closeList={closeList} />
      )}
    </div>
  );
}
