export default function Product(props) {
  function handleSubmit(event) {
    event.preventDefault();
    alert(
      `Item: ` +
        " " +
        `${props.product.name}` +
        "   Price: " +
        "$" +
        `${props.product.price}` +
        "  Description: " +
        `${props.product.description}`
    );
  }

  return (
    <div>
      <h2>{props.product.name}</h2>
      <p>
        {props.product.price.toLocaleString("en-US", {
          style: "currency",
          currency: "USD"
        })}
        - {props.product.description}
      </p>

      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}
