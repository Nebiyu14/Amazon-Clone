const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const router = express.Router();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

//get endpoint => testing
router.get("/", (req, res) => {
  res.status(200).send("Route is connected with express");
});

//post endpoint
router.post("/payment", async (req, res) => {
  const total = req.query.total;
  if (total > 0) {
    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
      });
      res.status(200).send(paymentIntent.client_secret);
    } catch (error) {
      console.log("Error while creating a payment intent", error);
    }
  } else {
    res.send("The total must be greater than zero!");
    console.log("The total must be greater than zero");
  }
});

module.exports = router;
