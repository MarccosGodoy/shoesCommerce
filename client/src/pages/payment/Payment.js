import React, { useContext, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Stripe from "../../components/stripe/Stripe";
import ProductContext from "../../context/productContext";
import "./Payment.css";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
const stripePromise = loadStripe(
  "pk_test_51JNV8VJg4nBS2nvq28N1xHPow3qRbQRhyo2TDUv8jDpWoj78NVX5gzIrdehtacryy1Y71yZiia4MlK5qBZawzDHL00zXCySUmC"
);

const Payment = () => {
  const stripe = (
    <Elements stripe={stripePromise} className="stripeFormContainer">
      <Stripe />
    </Elements>
  );

  const paypal = <p className="paypalComingsoon">Coming Soon</p>;
  const mp = <p className="mpComingsoon">Coming Soon</p>;
  const { name, img, cost } = useContext(ProductContext);
  const [paymentMethod, setPaymentMethod] = useState(stripe);

  const payWithStripe = () => {
    setPaymentMethod(stripe);
  };
  const payWithPaypal = () => {
    setPaymentMethod(paypal);
  };
  const payWithMp = () => {
    setPaymentMethod(mp);
  };

  return (
    <div className="payment">
      <Navbar />
      <main>
        <section className="infoSection">
          <ul className="productInfo">
            <li className="imageContainer">
              <img src={img} alt={name} />
            </li>
            <li className="productName">{name}</li>
            <li className="productCost">${cost}</li>
            <li className="productSize">Size: 42 AR</li>
          </ul>
          <ul className="paymentSelection">
            <li className="paymentSelectionTitle">Payment Method</li>
            <li className="creditCard" onClick={payWithStripe}>
              Credit Card
            </li>
            <li className="paypal" onClick={payWithPaypal}>
              Paypal
            </li>
            <li className="mercadoPago" onClick={payWithMp}>
              Mercado Pago
            </li>
          </ul>
        </section>
        <section className="paymentSection">{paymentMethod}</section>
      </main>
    </div>
  );
};

export default Payment;
