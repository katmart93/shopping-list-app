// components
import NewListForm from "./NewListForm";
// styles
import "./Modal.css";

export default function Modal() {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        <NewListForm />
      </div>
    </div>
  );
}
