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
}) {
  const removeItem = (item) => {
    setCurrItems(currItems.filter((currItem) => currItem !== item));
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
    </ModalWrapper>
  );
}
