const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.get("/", (req, res) => {
  res.send("Backend express server is running...");
  console.log();
  ("Backend express server is running...");
});

app.post("/payment", async (req, res) => {
  const { total } = req.body;
  console.log("received total from frontend: ", total);
  if (total > 0) {
    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: Math.round(total * 100),
        currency: "pln",
        automatic_payment_methods: { enabled: true },
      });
      res.status(200).json(paymentIntent);
      console.log(paymentIntent.client_secret);
    } catch (error) {
      console.log("Error while creating a payment intent", error);
    }
  } else {
    res.send("The total must be greater than zero!");
    console.log("The total must be greater than zero");
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`The sever is running at http://localhost:${PORT}`);
});
