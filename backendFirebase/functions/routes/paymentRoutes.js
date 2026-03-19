const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const router = express.Router();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

//get endpoint => home page: testing
router.get("/", (req, res) => {
  res.status(200).send("Firebase backend server is started and working fine!");
});

//post endpoint
router.post("/payment", async (req, res) => {
  const { total } = req.body;
  console.log("received total from frontend: ", total);
  if (total > 0) {
    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: Math.round(total * 100),
        currency: "pln",
        automatic_payment_methods: { enabled: true },
      });
      res.status(200).send(paymentIntent);
      console.log(paymentIntent.client_secret);
    } catch (error) {
      console.log("Error while creating a payment intent", error);
    }
  } else {
    res.send("The total must be greater than zero!");
    console.log("The total must be greater than zero");
  }
});

module.exports = router;
