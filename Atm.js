import "./styles.css";
import { useState } from "react";
export default function Atm() {
  const [option, setOption] = useState();
  const [value, setValue] = useState();
  const [amount, setAmount] = useState(0);
  function main(e) {
    e.preventDefault();
    if (!option) alert("Please select Deposit or Withdraw");
    else if (option === "Deposit") {
      setAmount(Number(value) + amount);
      console.log(amount);
    } else {
      const temp = amount - Number(value);
      if (temp < 0) {
        alert("Insufficient Balance");
      } else {
        setAmount(temp);
      }
    }
    setValue("");
  }

  return (
    <div className="First">
      <h1 className="head">ATM </h1>
      <form onSubmit={main}>
        <br></br>
        <div>
          <label className="label">
            Please Choose Your Transaction
            <br></br>
            <select onChange={(e) => setOption(e.target.value)}>
              <option />
              <option> Deposit </option>
              <option> Withdraw </option>
            </select>
            <br></br>
            <br></br>
            <h2> Your Balance is Rs.{amount}</h2>
            Enter the amount
          </label>
        </div>
        <br></br>
        <input
          type="Number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <div>
          <br></br>
          <button className="ok"> SUBMIT </button>
        </div>
      </form>
    </div>
  );
}
