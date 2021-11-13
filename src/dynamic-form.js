import React from "react";

export default function UsernameForm2() {
  const [username, setUsername] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    alert(`You entered: ${username}`);
  }

  function handleChange(event) {
    setUsername(event.target.value.toLowerCase());
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <label htmlFor="usernameInput">Username:</label>
        <input
          id="usernameInput"
          type="text"
          onChange={handleChange}
          value={username}
          className="input"
        />
      </div>
      <button className="btn__text" type="submit">
        Submit
      </button>
    </form>
  );
}
