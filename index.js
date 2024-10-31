const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// // Endpoints Authorization
// const authEndpoints = require("./endpoints/auth");
// app.use("/api/auth", authEndpoints);

// Endpoints Users
const userEndpoints = require("./endpoints/users");
app.use("/api/users", userEndpoints);

// // Endpoints Transactions
// const incomeEndpoints = require("./endpoints/incomes");
// app.use("/api/incomes", incomeEndopoints);

// // Middleware ErrorHandler
// const errorHandler = require("./middlewares/errorHandler");
// app.use(errorHandler);

// Connection

mongoose
  .connect(process.env.MONGODB_APIKEY)
  .then((response) => {
    console.log("DB Connected...");
    app.listen(process.env.PORT, async () =>
      console.log("Server listening on port " + process.env.PORT)
    );
  })
  .catch((err) => console.error(err));
