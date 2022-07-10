require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const Router = require("./routes")

const app = express();

app.use(express.json());
app.use(Router);

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running at port 3000");
});

mongoose.connect(process.env.Connection_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});