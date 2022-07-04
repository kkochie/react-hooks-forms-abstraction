import React, { useState } from "react";

function Form() {
  //make an object representing all of the input fields & use useState just once
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Henry",
  });

  //As long as the name attributes of our <input> fields match the keys in our
  //state, we can write a generic handleChange function like so:
  function handleChange(event) {
    // name is the KEY in the formData object we're trying to update
    const name = event.target.name;
    let value = event.target.value;

    // use `checked` property of checkboxes instead of `value`
    if (event.target.type === "checkbox") {
      value = event.target.checked;
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  // function handleFirstNameChange(event) {
  //   setFormData({
  //     // formData is an object, so we need to copy all the key/value pairs
  //     ...formData,
  //     // we want to overwrite the lastName key with a new value
  //     firstName: event.target.value,
  //   });
  // }

  // function handleLastNameChange(event) {
  //   setFormData({
  //     ...formData,
  //     lastName: event.target.value,
  //   });
  // }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        onChange={handleChange}
        value={formData.firstName}
      />
      <input
        type="text"
        name="lastName"
        onChange={handleChange}
        value={formData.lastName}
      />
      <input
        type="checkbox"
        name="admin"
        onChange={handleChange}
        checked={formData.admin}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
