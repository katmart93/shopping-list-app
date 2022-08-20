// components
import NewListForm from "./NewListForm";
// styles
import "./Modal.css";

export default function Modal({ children }) {
  return (
    <div className="modal-backdrop">
      <div className="modal">{children}</div>
    </div>
  );
}
