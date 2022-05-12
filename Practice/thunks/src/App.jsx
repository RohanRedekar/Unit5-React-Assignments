import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Register from "./components/register";
import { Routes, Route } from "react-router-dom";
import Login from "./components/login";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
