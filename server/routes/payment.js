const router = require("express").Router();
const { stripePayment } = require("../controllers/paymentController");

//Rutas
router.route("/stripe").post(stripePayment);

module.exports = router;
