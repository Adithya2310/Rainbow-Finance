import React,{useState} from "react";
import { Principal } from "@dfinity/principal";
import { token }  from "../../../declarations/token";


function Balance() {

  const [inputValue,setInputValue]=useState("");
  const [balance,setBalance]=useState("");
  const [ticker,setTicker]=useState("");
  const [isHidden,setHidden]=useState(true);
  
  async function handleClick() {
    const balance=await token.balanceOf(Principal.fromText(inputValue));
    const ticker=await token.getTicker();
    console.log(ticker);
    setTicker(ticker);
    setHidden(false);
    setBalance(balance.toLocaleString());
    console.log("Balance Button Clicked");
  }


  return (
    <div className="window white">
      <label>Check account token balance:</label>
      <p>
        <input
          id="balance-principal-id"
          type="text"
          placeholder="Enter a Principal ID"
          value={inputValue}
          onChange={(e)=>setInputValue(e.target.value)}
        />
      </p>
      <p className="trade-buttons">
        <button
          id="btn-request-balance"
          onClick={handleClick}
        >
          Check Balance
        </button>
      </p>
      {!isHidden&&<p>This account has a balance of {balance} {ticker}</p>}
    </div>
  );
}

export default Balance;
