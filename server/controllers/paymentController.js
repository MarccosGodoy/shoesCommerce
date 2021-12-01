const paymentController = {};
const Stripe = require("stripe");
const stripe = new Stripe(process.env.STRIPE_KEY);

//Accept Payment with stripe and store purchase information
paymentController.stripePayment = async (req, res) => {
  const { id, amount } = req.body;
  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "ARS",
      payment_method: id,
      confirm: true,
    });
    console.log(productId);

    res.json({ succes: true, payment });
  } catch (error) {
    console.log(error);
    res.json({ succes: false, message: error });
  }
};

paymentController.paypalPayment = async (req, res) => {};
paymentController.mercadopagoPayment = async (req, res) => {};

module.exports = paymentController;
