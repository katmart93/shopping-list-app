// styles
import "./FormModal.css";

export default function FormModal({ children }) {
  return (
    <div className="modal-backdrop">
      <div className="modal-wrapper">{children}</div>
    </div>
  );
}
