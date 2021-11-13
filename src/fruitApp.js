import React from "react";

const allItems = [
  { id: "a", value: "apple" },
  { id: "o", value: "orange" },
  { id: "g", value: "grape" },
  { id: "p", value: "pear" }
];

export default function FruitApp() {
  const [items, setItems] = React.useState(allItems);

  function addItem() {
    setItems([...items, allItems.find((i) => !items.includes(i))]);
  }

  function removeItem(item) {
    setItems(items.filter((i) => i !== item));
  }

  return (
    <div>
      <button
        className="btn btn--orange"
        disabled={items.length >= allItems.length}
        onClick={addItem}
      >
        add item
      </button>
      <ul style={{ listStyle: "none", paddingLeft: 0 }}>
        {items.map((item) => (
          <li key={item.id}>
            <button className="removebtn" onClick={() => removeItem(item)}>
              delete
            </button>{" "}
            <label htmlFor={`${item.value}-input`}>{item.value}</label>
            {""}
            <input id={`${item.value}-input`} defaultValue={item.value} />
          </li>
        ))}
      </ul>
    </div>
  );
}
