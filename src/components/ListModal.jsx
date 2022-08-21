// components
import Modal from "./Modal";

export default function ListModal({ currentList }) {
  return (
    <Modal>
      {currentList.map((list) => (
        <div key={list.id}>
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
