import React from "react";

export default function NewListForm() {
  return (
    <form className="new-list-form">
      <label>
        <span>List title:</span>
        <input type="text" />
      </label>
      <label>
        <span>Shopping date:</span>
        <input type="date" />
      </label>
      <label>
        <span>Items:</span>
        <input type="text" />
        <button>add</button>
      </label>
    </form>
  );
}
