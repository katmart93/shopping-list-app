// styles
import "./ShoppingLists.css";
// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

export default function ShoppingLists({ lists, showList, removeList }) {
  return (
    <div className="shopping-lists-wrapper">
      {lists.map((list) => (
        <div key={list.id} className="card">
          <div className="remove-icon-wrapper">
            <FontAwesomeIcon
              icon={faTrashCan}
              onClick={() => removeList(list.id)}
              className="icon trash-icon"
            />
          </div>
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
