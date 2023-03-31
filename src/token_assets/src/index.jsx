import ReactDOM from 'react-dom'
import React from 'react'
import App from "./components/App";
import { AuthClient } from "@dfinity/auth-client";

const init = async () => {
  // checking the internet identity authentication of ICP
  const authClient = await AuthClient.create();

  // if(await authClient.isAuthenticated()){
  //   handleAuthenticated();
  // }
  // else{
  //     await authClient.login({
  //     identityProvider: "https://identity.ic0.app/#authorize",
  //     onSucess:()=>{
  //       handleAuthenticated();
  //     },
  //   });
  // }
  // function handleAuthenticated(){
  //   ReactDOM.render(<App />, document.getElementById("root"));
  // } 
  ReactDOM.render(<App />, document.getElementById("root"));
}

init();


