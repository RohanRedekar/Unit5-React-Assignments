import { useState } from "react";
import "./form.css";
import axios from "axios";

export const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    address: "",
    department: "", //select tag
    salary: "",
    marital_state: "", //checkbox
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/employeeData", formData);
    e.target.reset();
  };

  return (
    <form id='form' onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        type='text'
        placeholder='Enter your name'
        id='name'
      />
      <input
        onChange={handleChange}
        type='number'
        placeholder='Enter your age'
        id='age'
      />
      <input
        onChange={handleChange}
        type='text'
        placeholder='Enter your address'
        id='address'
      />
      <select onChange={handleChange} id='department'>
        <option value=''>Select Department</option>
        <option value='arts'>Arts</option>
        <option value='science'>Science</option>
        <option value='commerce'>Commerce</option>
        <option value='acting'>Acting</option>
      </select>
      <input
        onChange={handleChange}
        type='number'
        placeholder='Enter your salary'
        id='salary'
      />
      <label htmlFor='married'>
        Married:
        <input
          type='checkbox'
          name='married'
          id='marital_state'
          value={"married"}
          onChange={handleChange}
        />
      </label>
      <label htmlFor='unmarried'>
        Unmarried:
        <input
          type='checkbox'
          name='unmarried'
          id='marital_state'
          value={"unmarried"}
          onChange={handleChange}
        />
      </label>
      <input type='submit' value='submit' />
    </form>
  );
};
