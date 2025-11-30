const path = require("path");
const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose
  .connect("mongodb://127.0.0.1:27017/wtwr_db")
  .then(() => {
    console.log("Connected to DB");
  })
  .catch(console.error);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  req.user = {
    _id: "692b95e93f4fb21354a05cab", // Replace with your actual test user ID
  };
  next();
});

app.use("/clothingItems", require("./routes/clothingItems"));
app.use("/users", require("./routes/users"));

const { PORT = 3001 } = process.env;

app.use(express.static(path.join(__dirname, "public")));
app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`);
});
