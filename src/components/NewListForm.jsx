import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
// styles
import "./NewListForm.css";

export default function NewListForm({ addList }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [item, setItem] = useState("");
  const [currItems, setCurrItems] = useState([]);
  console.log(title, date, item, currItems);

  const resetForm = () => {
    setTitle("");
    setDate("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const list = {
      title: title,
      date: date,
      id: uuidv4(),
      listItems: currItems,
    };

    addList(list);
    resetForm();
  };

  const addItem = (e) => {
    e.preventDefault();

    setCurrItems((prevItems) => [...prevItems, item]);
    setItem("");
  };

  return (
    <form className="new-list-form" onSubmit={handleSubmit}>
      <label>
        <span>List title:</span>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          required
        />
      </label>
      <label>
        <span>Shopping date:</span>
        <input
          type="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
          required
        />
      </label>
      <label>
        <span>Items:</span>
        <input
          type="text"
          onChange={(e) => setItem(e.target.value)}
          value={item}
        />
        <button onClick={addItem}>add</button>
      </label>
      <button>submit</button>
    </form>
  );
}
