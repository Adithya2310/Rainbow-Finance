import React,{useState} from "react";
import {Principal} from "@dfinity/principal";
import { token } from "../../../declarations/token";

function Transfer() {
  const [amount,setAmount]=useState();
  const [recieverId,setId]=useState();
  const [disabled,setDisabled]=useState(false);
  const [isHidden,setHidden]=useState(true);
  const [akn,setAkn]=useState();
  
  async function handleClick() {
    setDisabled(true);
    Principal.fromText(recieverId)
    const ID=Principal.fromText(recieverId);
    console.log(typeof(amount));
    const result=await token.transfer(ID,Number(amount));
    setAkn(result);
    console.log("transfer initiated");
    setDisabled(false);
    setHidden(false);
  }

  return (
    <div className="window white">
      <div className="transfer">
        <fieldset>
          <legend>To Account:</legend>
          <ul>
            <li>
              <input
                type="text"
                id="transfer-to-id"
                value={recieverId}
                onChange={e=>setId(e.target.value)}
              />
            </li>
          </ul>
        </fieldset>
        <fieldset>
          <legend>Amount:</legend>
          <ul>
            <li>
              <input
                type="number"
                id="amount"
                value={amount}
                onChange={e=>setAmount(e.target.value)}
              />
            </li>
          </ul>
        </fieldset>
        <p className="trade-buttons">
          <button id="btn-transfer" disabled={disabled} onClick={handleClick} >
            Transfer
          </button>
          {!isHidden&&<p>{akn}</p>}
        </p>
      </div>
    </div>
  );
}

export default Transfer;
