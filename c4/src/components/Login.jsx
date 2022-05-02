import { useState } from "react";
import { Navigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../Redux/actions";

export const Login = () => {
  const [users, setUsers] = useState({});
  const auth = useSelector((store) => store.users);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setUsers({
      ...users,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/users")
      .then((response) => response.json())
      .then((data) => {
        data.map((e) => {
          if (e.username == users.name && e.pass == users.password) {
            dispatch(login({ isAuth: true }));
            if (e.role === "admin") {
              <Navigate to='/orders' />;
            } else {
              <Navigate to='/neworder' />;
            }
          }
        });
      });
  };

  return (
    <div>
      <input
        onChange={handleChange}
        className='username'
        type='text'
        name='username'
        placeholder='Enter Username'
      />
      <input
        onChange={handleChange}
        className='password'
        type='password'
        name='password'
        placeholder='Enter password'
      />
      {/* On this button click make network req to find user with same username and password */}
      {/* get his role, if role is `admin` take him to `/orders` page otherwise take him to `/neworder` */}
      <button onClick={handleSubmit} className='submit'>
        Login
      </button>
    </div>
  );
};
