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
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [currItems, setCurrItems] = useState([]);
  const [removedItems, setRemovedItems] = useState([]);
  const [currId, setCurrId] = useState(null);
  const [item, setItem] = useState("");
  const [lists, setLists] = useState(
    JSON.parse(localStorage.getItem("SHOPPING_LIST")) || []
  );
  // saving data in local storage
  useEffect(() => {
    localStorage.setItem("SHOPPING_LIST", JSON.stringify(lists));
  }, [lists]);

  // reusable
  const updateList = () => {
    setLists(
      lists.map((list) =>
        list.id === currId
          ? {
              title: title,
              date: date,
              id: list.id,
              listItems: currItems,
              removedListItems: removedItems,
            }
          : list
      )
    );
  };

  // NewListForm
  const addList = (list) => {
    setLists((prevLists) => [...prevLists, list]);
  };

  const closeForm = () => {
    setTitle("");
    setDate("");
    setCurrItems([]);
    setCurrId(null);
    setShowNewListForm(false);
  };

  // ShoppingLists
  const showList = (list) => {
    setShowSingleList(true);
    setTitle(list.title);
    setDate(list.date);
    setCurrItems(list.listItems);
    setRemovedItems(list.removedListItems);
    setCurrId(list.id);
  };

  const editList = (list) => {
    setShowNewListForm(true);
    setTitle(list.title);
    setDate(list.date);
    setCurrItems(list.listItems);
    setRemovedItems(list.removedListItems);
    setCurrId(list.id);
  };

  const removeList = (id) => {
    setLists(lists.filter((list) => list.id !== id));
  };

  // SingleList
  const closeList = () => {
    updateList();
    setTitle("");
    setDate("");
    setCurrItems([]);
    setRemovedItems([]);
    setCurrId(null);
    setShowSingleList(false);
  };
  console.log(
    title,
    date,
    "current",
    currItems,
    currId,
    "removed",
    removedItems
  );
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
          updateList={updateList}
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
          setCurrId={setCurrId}
          setShowNewListForm={setShowNewListForm}
          removedItems={removedItems}
        />
      )}
      {showSingleList && (
        <SingleList
          closeList={closeList}
          currItems={currItems}
          setCurrItems={setCurrItems}
          title={title}
          date={date}
          removedItems={removedItems}
          setRemovedItems={setRemovedItems}
        />
      )}
    </div>
  );
}
