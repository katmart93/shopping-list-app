// styles
import "./AddListButton.css";
// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

export default function AddListButton({ setShowNewListForm }) {
  return (
    <div className="plus-icon-wrapper">
      <FontAwesomeIcon
        icon={faCirclePlus}
        onClick={() => setShowNewListForm(true)}
        className="plus-icon"
      />
    </div>
  );
}
