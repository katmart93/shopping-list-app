export default function ShoppingLists({ lists }) {
  return (
    <div>
      {lists.map((list) => (
        <div>
          <h2>{list.title}</h2>
          <p>{list.date}</p>
        </div>
      ))}
    </div>
  );
}
