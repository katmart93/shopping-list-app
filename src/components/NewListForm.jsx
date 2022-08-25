import { useRef } from "react";
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
}) {
  const itemInput = useRef();

  const resetForm = () => {
    setTitle("");
    setDate("");
    setCurrItems([]);
    setCurrId(null);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const list = {
      title: title,
      date: date,
      id: uuidv4(),
      listItems: currItems,
    };

    currId ? updateList() : addList(list);
    resetForm();
    setShowNewListForm(false);
  };

  const addItem = (e) => {
    e.preventDefault();

    setCurrItems((prevItems) => [...prevItems, item]);
    setItem("");
    itemInput.current.focus();
  };
  console.log("current items", currItems);

  const removeItem = (item) => {
    setCurrItems(currItems.filter((currItem) => currItem !== item));
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
          <div className="items">
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
        <button>{currId !== null ? "Update" : "Create"}</button>
      </form>
    </ModalWrapper>
  );
}
