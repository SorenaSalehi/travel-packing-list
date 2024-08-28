export default function Stats({ items }) {
  //if no item
  if (items.length === 0)
    return (
      <p className="stats">
        <em>Start Adding some Item to Your Packing List 🚀</em>
      </p>
    );

  //new(drived states:using the another state for updating auto)
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const Percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {/* //cm:if full packed */}
        {Percentage === 100
          ? `You got everything , Ready to GOOOO ✈️`
          : //cm: not yet packed
            `You have ${numItems} item on your list, and you already packed "${numPacked}"
         (${Percentage}%)`}
      </em>
    </footer>
  );
}
