import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function NewListForm({ addList }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  console.log(title, date);

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
    };

    addList(list);
    resetForm();
  };

  return (
    <form className="new-list-form" onSubmit={handleSubmit}>
      <label>
        <span>List title:</span>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </label>
      <label>
        <span>Shopping date:</span>
        <input
          type="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
      </label>
      <label>
        <span>Items:</span>
        <input type="text" />
        <button>add</button>
      </label>
      <button>submit</button>
    </form>
  );
}
