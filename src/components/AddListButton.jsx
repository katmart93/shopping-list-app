export default function AddListButton({ setShowFormModal }) {
  return (
    <div>
      <button onClick={() => setShowFormModal(true)}>Add Shopping List</button>
    </div>
  );
}
