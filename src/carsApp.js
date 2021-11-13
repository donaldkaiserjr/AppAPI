import React from "react";

const allItems = [
  { id: "9909", value: "lexus" },
  { id: "8897", value: "honda" },
  { id: "5689", value: "4Runner" },
  { id: "8795", value: "chevy" },
  { id: "9934", value: "infiniti" },
  { id: "8852", value: "mazda" },
  { id: "4414", value: "ford" }
];

export default function CarsApp() {
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
        type="button"
        disabled={items.length >= allItems.length}
        onClick={addItem}
        className="btn btn--orange"
      >
        add item
      </button>
      <ul style={{ listStyle: "none", paddingLeft: 0 }}>
        {items.map((item) => (
          <li key={item.id}>
            <button className="removebtn" onClick={() => removeItem(item)}>
              remove
            </button>{" "}
            <label htmlFor={`${item.value}-input`}>{item.value}</label>{" "}
            <input id={`${item.value}-input`} defaultValue={item.value} />
          </li>
        ))}
      </ul>
    </div>
  );
}
