// components
import ModalWrapper from "./ModalWrapper";
// styles
import "./SingleList.css";
// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function SingleList({
  closeList,
  currItems,
  setCurrItems,
  title,
  date,
}) {
  const [removedItems, setRemovedItems] = useState([]);

  const removeItem = (item) => {
    setCurrItems(currItems.filter((currItem) => currItem !== item));
    const removed = currItems.filter((currItem) => currItem === item);
    setRemovedItems((prev) => [...prev, ...removed]);
  };

  const restoreItem = (item) => {
    setRemovedItems(removedItems.filter((removedItem) => removedItem !== item));
    const restored = removedItems.filter((removedItem) => removedItem === item);
    setCurrItems((prev) => [...prev, ...restored]);
  };

  console.log("removed", removedItems, "current", currItems);
  return (
    <ModalWrapper>
      <div className="options-wrapper">
        <FontAwesomeIcon
          icon={faXmark}
          onClick={closeList}
          className="icon x-mark-icon"
        />
      </div>
      <div className="shopping-list"></div>
      <h2>{title}</h2>
      <p>{date}</p>
      <ul>
        {currItems.map((item) => (
          <li key={item} onClick={() => removeItem(item)}>
            {item}
          </li>
        ))}
      </ul>
      <ul>
        {removedItems &&
          removedItems.map((item) => (
            <li
              key={item}
              style={{ color: "red" }}
              onClick={() => restoreItem(item)}
            >
              {item}
            </li>
          ))}
      </ul>
    </ModalWrapper>
  );
}
