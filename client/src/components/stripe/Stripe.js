import React, { useContext, useRef } from "react";
import "./Stripe.css";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import ProductContext from "../../context/productContext";

const Stripe = () => {
  const { cost } = useContext(ProductContext);
  const stripe = useStripe();
  const elements = useElements();
  const fullName = useRef();
  const phone = useRef();
  const email = useRef();

  const paymentStripe = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    if (!error) {
      console.log(paymentMethod);
      const { id } = paymentMethod;
      const response = await axios.post(
        "http://localhost:5000/payment/stripe",
        {
          id,
          amount: cost * 100,
        }
      );
      console.log(response.data);
      elements.getElement(CardElement).clear();
      fullName.current.value = "";
      email.current.value = "";
      phone.current.value = "";
    }
  };
  return (
    <form className="stripeForm" onSubmit={paymentStripe}>
      <h4 className="formTitle">Almost yours!</h4>
      <CardElement className="cardHolder" />
      <input type="text" placeholder="Name on card" ref={fullName} />
      <input type="email" placeholder="Email" name="" id="" ref={email} />
      <input type="number" placeholder="Phone" name="" id="" ref={phone} />
      <button type="submit">Buy</button>
    </form>
  );
};

export default Stripe;
