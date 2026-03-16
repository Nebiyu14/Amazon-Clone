const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend express server is running...");
  console.log();
  ("Backend express server is running...");
});

app.post("/payment-intent", async (req, res) => {
  //   const total = req.body.total;
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 2000,
    currency: "usd",
  });
  res.status(200).send(paymentIntent.client_secret);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`The sever is running at http://localhost:${PORT}`);
});
