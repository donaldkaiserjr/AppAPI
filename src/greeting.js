import React from "react";

export default function Greeting() {
  const [state, setState] = React.useState("");
  const handleChange = (event) => setState(event.target.value);
  return (
    <div className="firstname">
      <form>
        <label htmlFor="Name">Name:</label>
        <input onChange={handleChange} id="name" />
      </form>
      {state ? <strong>Greetings {state} </strong> : "Please enter your name"}
    </div>
  );
}
