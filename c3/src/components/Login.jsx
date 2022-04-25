import axios from "axios";
import { useState } from "react";

export const Login = () => {
  const [status, setStatus] = useState(false);
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { id, value } = target.value;
    setUser({ ...user, [id]: value });
  };

  const handleSubmit = () => {
    if (status) {
      setStatus(false);
    }
    axios.post("https://reqres.in/api/login", user).then(setStatus(true));
  };

  return (
    <form className='loginform' onClick={handleSubmit}>
      <input
        onChange={handleChange}
        name='username'
        type='text'
        placeholder='Enter username'
        className='login_username'
      />
      <input
        onChange={handleChange}
        name='password'
        type='text'
        placeholder='Enter password'
        className='login_password'
      />
      <input type='submit' value='SIGN IN' className='login_submit' />
    </form>
  );
};
