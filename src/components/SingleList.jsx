// components
import ModalWrapper from "./ModalWrapper";
// styles
import "./SingleList.css";
// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function SingleList({ currentList }) {
  return (
    <ModalWrapper>
      {currentList.map((list) => (
        <div key={list.id} className="shopping-list">
          <div className="options-wrapper">
            <FontAwesomeIcon icon={faXmark} className="x-mark-icon" />
          </div>
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
