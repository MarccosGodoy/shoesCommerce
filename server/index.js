require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connectDb = require("./config/database");

// Middlewares
app.use(cors());
app.use(express.json());

//Db connection
connectDb();

// Port sertup
const PORT = 5000;

//Routes

//Welcome route
app.get("/", (req, res) => {
  res.send("Welcome to FBot API");
});
//Auth route
app.use("/products", require("./routes/product"));
app.use("/payment", require("./routes/payment"));

//Server Start
app.listen(PORT, () => {
  console.log("server running on http://localhost:5000");
});
