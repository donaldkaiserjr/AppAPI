import React from "react";

export default function Greeting2() {
  const [name, setName] = React.useState(
    () => window.localStorage.getItem("name") || ""
  );

  React.useEffect(() => {
    window.localStorage.setItem("name", name);
  }, [name]);

  const handleChange = (event) => setName(event.target.value);

  return (
    <div className="lastname">
      <form>
        <label htmlFor="name">Last Name:</label>
        <input onChange={handleChange} id="name" />
      </form>
      {name ? (
        <strong>Your last name is: {name}</strong>
      ) : (
        "Enter your last name"
      )}
    </div>
  );
}
