// components
import ModalWrapper from "./ModalWrapper";
// styles
import "./ListModal.css";

export default function ListModal({ currentList }) {
  return (
    <ModalWrapper>
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
