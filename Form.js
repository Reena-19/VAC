import "./styles.css";
import { useState } from "react";
export default function Form() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState([]);
  const [dob, setDob] = useState([]);

  function main() {
    if (!name) {
      alert("Please Enter Your Name!!!");
    }
    if (number.length > 10) {
      alert("Number should not exceed 10 values");
    }
    if (number.length < 10) {
      alert("Invalid Number");
    }
    if (!dob) {
      alert("Please enter Date of Birth");
    }
    if (
      document.getElementById("name").value === name &&
      document.getElementById("number").value === number &&
      document.getElementById("dob").value === dob
    ) {
      alert("Submitted successfully!!!");
    }
  }
  return (
    <div className="Form">
      <h1>Form!!!</h1>
      <form>
        <label>Name</label>
        <br />
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          id="name"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <label>Phone Number</label>
        <br />
        <input
          type="number"
          maxLength="10"
          placeholder="Enter your phone number"
          value={number}
          id="number"
          onChange={(e) => setNumber(e.target.value)}
        />
        <br />
        <br />
        <label>Date Of Birth</label>
        <br />
        <input
          type="date"
          value={dob}
          id="dob"
          onChange={(e) => setDob(e.target.value)}
        />
        <br />
        <br />
        <button onClick={main}>SUBMIT</button>
      </form>
    </div>
  );
}
