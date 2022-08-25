// components
import ModalWrapper from "./ModalWrapper";
// styles
import "./SingleList.css";
// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function SingleList({
  closeList,
  currItems,
  setCurrItems,
  title,
  date,
  removedItems,
  setRemovedItems,
}) {
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

  return (
    <ModalWrapper>
      <div className="options-wrapper">
        <FontAwesomeIcon
          icon={faXmark}
          onClick={closeList}
          className="icon x-mark-icon"
        />
      </div>
      <div className="shopping-list">
        <h2>{title}</h2>
        <p>{date}</p>
        {currItems.length > 0 && (
          <h3 style={{ color: "#4A0700" }}>
            You have {currItems.length}{" "}
            {currItems.length > 1 ? `items` : `item`} to buy
          </h3>
        )}
        {currItems.length === 0 && (
          <h3 style={{ color: "#0d721f" }}>Shopping done!</h3>
        )}
        <ul className="current-list-items">
          {currItems.map((item) => (
            <li key={item} onClick={() => removeItem(item)}>
              {item}
            </li>
          ))}
        </ul>
        <ul className="removed-list-items">
          {removedItems &&
            removedItems.map((item) => (
              <li key={item} onClick={() => restoreItem(item)}>
                {item}
              </li>
            ))}
        </ul>
      </div>
    </ModalWrapper>
  );
}
