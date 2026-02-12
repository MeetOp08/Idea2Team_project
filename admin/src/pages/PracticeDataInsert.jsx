import React from "react";
import axios from "axios";
import "./PracticeDataInsert.css";

function PracticeDataInsert() {

  function Add() {

    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const role = document.querySelector("#role").value;

    if (name === "" || email === "" || password === "" || role === "") {
      alert("Please fill all fields");
      return;
    }

    axios.post("http://localhost:1337/api/ApiName", {
      name: name,
      email: email,
      password: password,
      role: role
    })
    .then(function (response) {
      alert("Data Inserted Successfully");
      console.log(response.data);
    })
    .catch(function (error) {
      console.log("Insert Error:", error);
      alert("Insert Failed");
    });
  }

  return (
    <div className="page-container">
      <h2 className="page-title">Add Admin</h2>

      <label>Name:</label><br />
      <input type="text" id="name" /><br /><br />

      <label>Email:</label><br />
      <input type="email" id="email" /><br /><br />

      <label>Password:</label><br />
      <input type="password" id="password" /><br /><br />

      <label>Role:</label><br />
      <select id="role">
        <option value="">Select Role</option>
        <option value="Admin">Admin</option>
        <option value="Manager">Manager</option>
        <option value="User">User</option>
      </select><br /><br />

      <button className="btn" onClick={Add}>
        Insert Data
      </button>
    </div>
  );
}

export default PracticeDataInsert;
