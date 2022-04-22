import { useState, useEffect } from "react";
import "./App.css";
import { Form } from "./components/form";
import axios from "axios";

function App() {
  const [employeeDetails, setEmployeeDetails] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get("http://localhost:8080/employeeData")
      .then(function (response) {
        // console.log(response.data);
        setEmployeeDetails(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className='App'>
      <Form />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Marital state</th>
          </tr>
        </thead>
        <tbody>
          {employeeDetails.map((e) => {
            return (
              <tr>
                <td>{e.name}</td>
                <td>{e.age}</td>
                <td>{e.address}</td>
                <td>{e.department}</td>
                <td>{e.salary}</td>
                <td>{e.marital_state}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
