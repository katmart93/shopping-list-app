// styles
import "./FormModal.css";

export default function FormModal({ children }) {
  return (
    <div className="modal-backdrop">
      <div className="modal">{children}</div>
    </div>
  );
}
