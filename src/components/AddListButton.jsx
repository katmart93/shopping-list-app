export default function AddListButton({ setShowModal }) {
  return (
    <div>
      <button onClick={() => setShowModal(true)}>Add Shopping List</button>
    </div>
  );
}
