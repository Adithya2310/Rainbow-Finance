import React,{useState} from "react";
import {token} from "../../../declarations/token/";

function Faucet() {

  const [bonusStatus,setBonusStatus]=useState("Claim");
  const [disabled,setDisabled]=useState(false);
  const [ID,setID]=useState("...");

  async function getId(){
     setID("ID: "+await token.getID());
  }
  getId();
  async function handleClick(event) {
    setDisabled(true);
    const status=await token.payOut();
    setBonusStatus(status);
  }

  return (
    <div className="blue window">
      <h2>
        <span role="img" aria-label="tap emoji">
          🚰
        </span>
        Faucet 
        <p className="ID">{ID}</p>
      </h2>
      <label>Get your free Rainbow tokens here! Claim 10,000 RAIN coins to your account.</label>
      <p className="trade-buttons">
        <button id="btn-payout" disabled={disabled} onClick={handleClick} value={bonusStatus}>
          {bonusStatus}
        </button>
      </p>
    </div>
  );
}

export default Faucet;
