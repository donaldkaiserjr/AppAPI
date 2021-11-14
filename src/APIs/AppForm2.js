import React, { Component } from "react";

// https://reactjs.org/docs/forms.html
// https://coursework.vschool.io/travel-form

class AppForm2 extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      destination: "",
      dietaryRestrictions: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  }

  handleSubmit(event) {
    alert(`First name: ${this.state.firstName} 
    Last name: ${this.state.lastName} 
    Age: ${this.state.age}
    Gender: ${this.state.gender}
    Destination: ${this.state.destination}
    Dietary restrictions: ${this.state.vegetarian}
    `);
    event.preventDefault();
  }

  render() {
    return (
      <main>
        <form onSubmit={this.handleSubmit}>
          <input
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
            placeholder="First Name"
          />
          <br />
          <label>
            <input
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleChange}
              placeholder="Last Name"
            />
          </label>

          <label>
            <input
              name="age"
              value={this.state.age}
              onChange={this.handleChange}
              placeholder="age"
            />
          </label>

          <br />

          <br />

          <label>
            {/* the <label> allows users to click on the "Male" text 
          and the radio still gets filled in */}
            <input
              type="radio"
              name="gender"
              value="male"
              // checked={this.state.gender === "male"}
              onChange={this.handleChange}
            />
            Male
          </label>
          <br />

          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              // checked={this.state.gender === "male"}
              onChange={this.handleChange}
            />
            Female
          </label>

          <br />
          <label>
            <input
              type="checkbox"
              name="newYork"
              checked={this.state.newYork}
              onChange={this.handleChange}
            />
            New York
          </label>

          <br />
          <label>
            <input
              type="checkbox"
              name="losAngeles"
              checked={this.state.losAngeles}
              onChange={this.handleChange}
            />
            Los Angeles
          </label>

          <br />
          <label>
            <input
              type="checkbox"
              name="chicago"
              checked={this.state.chicago}
              onChange={this.handleChange}
            />
            Chicago
          </label>

          <br />
          <label>
            <input
              type="checkbox"
              name="vegetarian"
              checked={this.state.vegetarian}
              onChange={this.handleChange}
            />
            Vegetarian
          </label>

          <br />
          <label>
            <input
              type="checkbox"
              name="kosher"
              checked={this.state.kosher}
              onChange={this.handleChange}
            />
            Kosher
          </label>

          <br />
          <label>
            <input
              type="checkbox"
              name="dairyFree"
              checked={this.state.dairyFree}
              onChange={this.handleChange}
            />
            Dairy Free
          </label>

          <br />
          <button type="submit">Submit</button>
        </form>

        <hr />
        <h2>Entered information:</h2>
        <p>
          Your name:{" "}
          <strong>
            {this.state.firstName} {this.state.lastName}
          </strong>
        </p>
        <p>Your age: {this.state.age} </p>
        <p>Your gender: {this.state.gender} </p>
        <p>Your destination: </p>
        <p>Your dietary restrictions:</p>
      </main>
    );
  }
}

export default AppForm2;
