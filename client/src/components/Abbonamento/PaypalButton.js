import React, { useEffect, useState, useContext } from "react";
import { StateContext } from "../States";
import axios from 'axios'

import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const CLIENT_ID = "ARv3e5mFPhzvwVSVzEZo7EFXRETB4YZFhk9QkG-ipwkVl_5-QN9C_dYepH1lpFiAhhqbi07lMeRRXL75";

function PaypalButton(props) {
  const [state, setState] = useContext(StateContext);
  let { value } = props
  const buttonStyle = {
    layout: "horizontal", // Opzioni: vertical | horizontal
    color: "blue", // Opzioni: gold | blue | silver | white | black
    shape: "pill", // Opzioni: pill | rect
    label: "paypal", // Opzioni: checkout | credit | paypal | pay
  };

  let subscriptionType=0
  if (value==2.99)  subscriptionType="Annuale"
  else if (value==4.99) subscriptionType="Trimestrale"

  const date = new Date()

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
          return actions.order.capture().then(async function () {
            // Your code here after capture the order

            axios.post('http://localhost:3500/create-subscription', {
              userId: state.userId,
              subscriptionType: subscriptionType,
              subscriptionDate: date
            })
              .then(response => {
                setState({
                  user: state.user,
                  userId: state.userId,
                  logged: true,
                  premium: true
                })
                alert(response.data)
              })
              .catch(error => {
                alert(error)
              })

          });
        }}
      />
    </PayPalScriptProvider>

    // <PayPalScriptProvider options={{ 
    //   "client-id": CLIENT_ID, 
    //   "vault": true,
    //   "currency": "EUR",
    //   "intent": "subscription" ,
    //   "components": "buttons"
    //   }}>
    //   <PayPalButtons
    //     style={buttonStyle}
    //     forceReRender={[value]}
    //     // creo l'ordine
    //     createSubscription={(data, actions) => {
    //       return actions.subscription.create({
    //         'plan_id': 'P-3KC12500464878940MSRORUI'
    //       })
    //       .then((orderId) => {
    //         // Your code here after create the order
    //         return orderId;
    //       });  
    //     }}

    //   />
    // </PayPalScriptProvider>

  );
}
export default PaypalButton

