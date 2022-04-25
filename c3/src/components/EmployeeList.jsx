import { useState, useEffect } from "react";
import axios from "axios";
import { EmployeeDetails } from "./EmployeeDetails";
export const EmployeeList = () => {
  const [emp, setEmp] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get("http://localhost:8080/employee")
      .then((data) => setEmp(data.data));
  };
  console.log(emp);
  return (
    <div
      style={{
        margin: "20px",
      }}
      className='list_container'
    >
      {/* On clicking this card anywhere, user goes to user details */}
      {emp.map((e) => (
        <div
          style={{
            margin: "10px",
          }}
          className='employee_card'
        >
          <img className='employee_image' src={e.image} />
          <br />
          <span className='employee_name'>{e.employee_name}</span>
          <br />
          <span className='employee_title'>{e.title}</span>
        </div>
      ))}
    </div>
  );
};
