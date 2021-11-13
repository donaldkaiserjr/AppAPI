export default function UsernameForm() {
  function handleSubmit(event) {
    event.preventDefault();
    const username = event.target.elements.usernameInput.value;
    alert(username ? `You entered: ${username}` : "Please enter a username");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input id="usernameInput" placeholder="Enter a username" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
