// styles
import "./ShoppingLists.css";

export default function ShoppingLists({ lists, showList }) {
  return (
    <div className="shopping-lists-wrapper">
      {lists.map((list) => (
        <div key={list.id} className="card">
          <h2>{list.title}</h2>
          <p>{list.date}</p>
          <ul>
            {list.listItems.slice(0, 2).map((listItem) => (
              <li key={listItem}>{listItem}</li>
            ))}
          </ul>
          <p>. . .</p>
          <button onClick={() => showList(list.id)}>Show</button>
        </div>
      ))}
    </div>
  );
}
