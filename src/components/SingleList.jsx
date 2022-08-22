// components
import ModalWrapper from "./ModalWrapper";
// styles
import "./SingleList.css";
// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faPenClip } from "@fortawesome/free-solid-svg-icons";

export default function SingleList({ currentList, setShowSingleList }) {
  return (
    <ModalWrapper>
      {currentList.map((list) => (
        <>
          <div className="options-wrapper">
            <FontAwesomeIcon icon={faPenClip} className="icon pen-clip-icon" />
            <FontAwesomeIcon
              icon={faXmark}
              onClick={() => setShowSingleList(false)}
              className="icon x-mark-icon"
            />
          </div>
          <div key={list.id} className="shopping-list">
            <h2>{list.title}</h2>
            <p>{list.date}</p>
            <ul>
              {list.listItems.map((listItem) => (
                <li key={listItem}>{listItem}</li>
              ))}
            </ul>
          </div>
        </>
      ))}
    </ModalWrapper>
  );
}
