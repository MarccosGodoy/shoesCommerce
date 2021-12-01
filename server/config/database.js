const mongoose = require("mongoose");

const URL = process.env.DB;

const connectDb = async () => {
  mongoose.connect(URL, () => {
    console.log("shoesEcommerce db is connected");
  });
};

module.exports = connectDb;