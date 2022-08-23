// components
import ModalWrapper from "./ModalWrapper";
// styles
import "./SingleList.css";
// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function SingleList({ currentList, closeList }) {
  const [clicked, setClicked] = useState(false);
  // console.log(clicked);
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
              <li
                key={listItem}
                onClick={() => {
                  setClicked(!clicked);
                  console.log(listItem, "is clicked");
                }}
              >
                {listItem}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </ModalWrapper>
  );
}
