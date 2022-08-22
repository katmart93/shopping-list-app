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
  // saving in local storage
  useEffect(() => {
    localStorage.setItem("SHOPPING_LIST", JSON.stringify(lists));
  }, [lists]);

  // NewListForm
  const addList = (list) => {
    setLists((prevLists) => [...prevLists, list]);
    setShowNewListForm(false);
  };

  // ShoppingLists
  const showList = (id) => {
    setCurrentList(lists.filter((currList) => currList.id === id));
    setShowSingleList(true);
  };

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
        <SingleList currentList={currentList} closeList={closeList} />
      )}
    </div>
  );
}
