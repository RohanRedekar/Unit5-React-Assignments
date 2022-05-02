import { useState } from "react";
import { Navigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { user } from "../Redux/actions";

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

  const handleSubmit = () => {
    dispatch(user( users ));
    auth.role === "admin" ? (
      <Navigate to='/orders' />
    ) : (
      <Navigate to='/neworder' />
    );
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
