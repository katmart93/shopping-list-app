// styles
import "./ShoppingLists.css";
// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPenClip } from "@fortawesome/free-regular-svg-icons";
import { faPencil } from "@fortawesome/free-solid-svg-icons";

export default function ShoppingLists({ lists, showList, removeList }) {
  return (
    <div className="shopping-lists-wrapper">
      {lists.map((list) => (
        <div key={list.id} className="card">
          <div className="list-icons-wrapper">
            <FontAwesomeIcon
              icon={faPencil}
              className="icon list-icon pen-clip-icon"
            />
            <FontAwesomeIcon
              icon={faTrashCan}
              onClick={() => removeList(list.id)}
              className="icon list-icon trash-icon"
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
