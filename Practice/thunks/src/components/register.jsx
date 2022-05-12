import React, { useState } from "react";
import "./register.css";
import { useNavigate } from "react-router-dom";

// Params
/*{
  "name": "MASAI School",
  "email": "hello@masai.com"
  "password": "secret",
  "username": "masai-school",
  "mobile": "9876543210",
  "description": "A Transformation in education!" 
}*/

const Register = () => {
  const navigate = useNavigate();
  const [student, setStudent] = useState({
    name: "",
    email: "",
    password: "",
    username: "",
    mobile: "",
    description: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setStudent({ ...student, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Validation
      if (
        !student.name ||
        !student.email ||
        !student.password ||
        !student.username ||
        !student.mobile ||
        !student.description
      ) {
        alert("All fiels are mandatory");
        return;
      }
      // Post req
      let res = await fetch(
        "https://masai-api-mocker.herokuapp.com/auth/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(student),
        }
      )
        .then((res) => res.json())
        .then((data) =>
          data.message === "Registration Success"
            ? navigate("/login")
            : alert(data.message)
        );
    } catch (err) {
      console.log("error msg", err);
    }
  };

  return (
    <div className='register_container'>
      <h1>Resister</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type='text'
          id='name'
          placeholder='Enter your name'
        />
        <br />
        <input
          onChange={handleChange}
          type='email'
          id='email'
          placeholder='Enter your email'
        />
        <br />
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
          placeholder='Create a username'
        />
        <br />
        <input
          onChange={handleChange}
          type='number'
          id='mobile'
          placeholder='Enter you Mobile number'
        />
        <br />
        <textarea
          onChange={handleChange}
          id='description'
          cols='25'
          rows='3'
          placeholder='Enter description'
        ></textarea>
        <br />
        <input type='submit' />
      </form>
    </div>
  );
};

export default Register;
