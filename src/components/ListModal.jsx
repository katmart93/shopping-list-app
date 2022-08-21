export default function ListModal({ currentList }) {
  return (
    <div className="modal-backdrop">
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
    </div>
  );
}
