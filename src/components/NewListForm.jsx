import { useState } from "react";

export default function NewListForm() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  console.log(title, date);

  return (
    <form className="new-list-form">
      <label>
        <span>List title:</span>
        <input type="text" onChange={(e) => setTitle(e.target.value)} />
      </label>
      <label>
        <span>Shopping date:</span>
        <input type="date" onChange={(e) => setDate(e.target.value)} />
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
