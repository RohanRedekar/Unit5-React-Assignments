import React from "react";
import { useState } from "react";

const Login = () => {
  // Params
  // {
  //   "password": "secret",
  //   "username": "masai-school"
  // }

  const [student, setStudent] = useState({
    password: "",
    username: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setStudent({ ...student, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = await fetch("https://masai-api-mocker.herokuapp.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(student),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type='text'
          id='password'
          placeholder='Enter your password'
        />
        <br />
        <input
          onChange={handleChange}
          type='text'
          id='username'
          placeholder='Enter your username'
        />
        <br />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
