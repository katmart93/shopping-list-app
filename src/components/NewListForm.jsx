import { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
// components
import ModalWrapper from "./ModalWrapper";
// styles
import "./NewListForm.css";
// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function NewListForm({
  addList,
  updateList,
  closeForm,
  setTitle,
  title,
  date,
  setDate,
  item,
  setItem,
  currItems,
  setCurrItems,
  currId,
  setCurrId,
  setShowNewListForm,
  removedItems,
  setRemovedItems,
}) {
  const [itemsMessage, setItemsMessage] = useState(false);
  const itemInput = useRef();

  const resetForm = () => {
    setTitle("");
    setDate("");
    setCurrItems([]);
    setRemovedItems([]);
    setCurrId(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setItemsMessage(true);
    if (title.trim() === "") return;
    if (currItems.length <= 0) return;
    if (date === "") return;

    const list = {
      title: title.trim(),
      date: date,
      id: uuidv4(),
      listItems: currItems,
      removedListItems: [],
    };

    currId ? updateList() : addList(list);
    resetForm();
    setShowNewListForm(false);
  };

  const addItem = (e) => {
    e.preventDefault();

    if (item.trim() === "") return;
    setCurrItems((prevItems) => [...prevItems, item.toLowerCase().trim()]);
    setItem("");
    itemInput.current.focus();
  };

  const removeItem = (item) => {
    setCurrItems(currItems.filter((currItem) => currItem !== item));
    setRemovedItems(removedItems.filter((removedIt) => removedIt !== item));
  };

  return (
    <ModalWrapper>
      <div className="options-wrapper">
        <FontAwesomeIcon
          icon={faXmark}
          onClick={closeForm}
          className="icon x-mark-icon"
        />
      </div>
      <form className="new-list-form" onSubmit={handleSubmit}>
        <label>
          <span>List title:</span>
          {!/[a-zA-Z]/.test(title) && /\s/.test(title) && (
            <small>Please enter a title!</small>
          )}
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </label>
        <label>
          <span>Shopping date:</span>
          <input
            type="date"
            onChange={(e) => setDate(e.target.value)}
            value={date}
            required
          />
        </label>
        <label>
          <span>What do you want to buy?</span>
          {!/[a-zA-Z]/.test(item) && /\s/.test(item) && (
            <small>Please enter an item!</small>
          )}
          <div className="add-items">
            <input
              type="text"
              onChange={(e) => setItem(e.target.value)}
              value={item}
              ref={itemInput}
            />
            <button onClick={addItem}>add</button>
          </div>
        </label>
        <ul>
          <span>Items to buy:</span>
          {itemsMessage && currItems.length <= 0 && (
            <small>
              You can't create an empty list! Please enter some items.
            </small>
          )}
          {currItems.map((item) => (
            <li key={item}>
              {item}
              <FontAwesomeIcon
                icon={faXmark}
                className="icon delete-item-icon"
                onClick={() => removeItem(item)}
              />
            </li>
          ))}
        </ul>
        {currId !== null && (
          <ul>
            <span>Items bought:</span>
            {removedItems.map((item) => (
              <li key={item}>
                {item}
                <FontAwesomeIcon
                  icon={faXmark}
                  className="icon delete-item-icon"
                  onClick={() => removeItem(item)}
                />
              </li>
            ))}
          </ul>
        )}
        <button>{currId !== null ? "Update" : "Create"}</button>
      </form>
    </ModalWrapper>
  );
}
