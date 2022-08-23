// components
import ModalWrapper from "./ModalWrapper";
// styles
import "./SingleList.css";
// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function SingleList({ currentList, closeList }) {
  console.log("currentList", currentList[0].listItems);
  return (
    <ModalWrapper>
      <div className="options-wrapper">
        <FontAwesomeIcon
          icon={faXmark}
          onClick={closeList}
          className="icon x-mark-icon"
        />
      </div>
      {currentList.map((list) => (
        <div key={list.id} className="shopping-list">
          <h2>{list.title}</h2>
          <p>{list.date}</p>
          <ul>
            {list.listItems.map((listItem) => (
              <li key={listItem}>{listItem}</li>
            ))}
          </ul>
        </div>
      ))}
    </ModalWrapper>
  );
}
