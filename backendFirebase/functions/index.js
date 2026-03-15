const { onRequest } = require("firebase-functions/https");
const express = require("express");
const customPaymentRoute = require("./routes/paymentRoutes");

const app = express();
app.use(express.json());

// routes
app.use("/", customPaymentRoute);

exports.api = onRequest(app);
