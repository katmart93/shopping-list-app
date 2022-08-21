// components
import Modal from "./Modal";
// styles
import "./ListModal.css";

export default function ListModal({ currentList }) {
  return (
    <Modal>
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
    </Modal>
  );
}
