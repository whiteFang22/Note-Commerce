import React from "react";
import ReactDOM from "react-dom"

import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const CLIENT_ID = "ARv3e5mFPhzvwVSVzEZo7EFXRETB4YZFhk9QkG-ipwkVl_5-QN9C_dYepH1lpFiAhhqbi07lMeRRXL75";

function PaypalButton() {
  const buttonStyle = {
    layout: "vertical", // Opzioni: vertical | horizontal
    color: "blue", // Opzioni: gold | blue | silver | white | black
    shape: "pill", // Opzioni: pill | rect
    label: "paypal", // Opzioni: checkout | credit | paypal | pay
  };

  return (
    <PayPalScriptProvider options={{ "client-id": CLIENT_ID, "vault": true }}>
      <PayPalButtons
        style={buttonStyle}
        createSubscription={(data, actions) => {
          // Logica per creare l'iscrizione
        }}
        onApprove={(data, actions) => {
          // Logica da eseguire dopo l'approvazione del pagamento
        }}
        onError={(error) => {
          // Logica da eseguire in caso di errore
        }} />
    </PayPalScriptProvider>
  );
}
export default PaypalButton
