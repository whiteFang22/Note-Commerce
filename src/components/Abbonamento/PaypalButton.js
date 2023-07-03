import React, { useEffect } from "react";

import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const CLIENT_ID = "ARv3e5mFPhzvwVSVzEZo7EFXRETB4YZFhk9QkG-ipwkVl_5-QN9C_dYepH1lpFiAhhqbi07lMeRRXL75";

function PaypalButton(props) {
  let {value} = props
  const buttonStyle = {
    layout: "vertical", // Opzioni: vertical | horizontal
    color: "blue", // Opzioni: gold | blue | silver | white | black
    shape: "pill", // Opzioni: pill | rect
    label: "paypal", // Opzioni: checkout | credit | paypal | pay
  };
  
  return (
    <PayPalScriptProvider options={{ "client-id": CLIENT_ID, "vault": true, "currency": "EUR" }}>
      <PayPalButtons
        style={buttonStyle}
        forceReRender={[value]}
        // creo l'ordine
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: value,
                },
              },
            ],
          })
        }}
        onApprove={function (data, actions) {
          return actions.order.capture().then(function () {
            // Your code here after capture the order
            alert("transaction completed")
          });
        }}
      />
    </PayPalScriptProvider>

  );
}
export default PaypalButton
// createSubscription={(data, actions) => {
      //   // Logica per creare l'iscrizione
      // }}
      // onApprove={(data, actions) => {
      //   // Logica da eseguire dopo l'approvazione del pagamento
      // }}
      // onError={(error) => {
      //   // Logica da eseguire in caso di errore
      // }} 