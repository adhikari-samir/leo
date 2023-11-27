import React, { useState } from "react";

const Counter = () => {
  const [formdata, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target; // Destructure the name and value from the event target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newData = {
      username: formdata.username,
      email: formdata.email,
      password: formdata.password,
    };

    console.log(newData);
    setFormData({
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username: </label>
          <input
            name="username"
            type="text"
            value={formdata.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email: </label>
          <input
            type="email"
            value={formdata.email}
            name="email"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            name="password"
            type="password"
            value={formdata.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  );
};
export default Counter;
