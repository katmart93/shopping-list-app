// styles
import "./ModalWrapper.css";

export default function Modal({ children }) {
  return (
    <div className="modal-backdrop">
      <div className="modal-wrapper">{children}</div>
    </div>
  );
}
