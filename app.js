const path = require("path");
const express = require("express");
const mongoose = require("mongoose");

const { NOT_FOUND } = require("./utils/errors");

const app = express();

mongoose
  .connect("mongodb://127.0.0.1:27017/wtwr_db")
  .then(() => {
    console.log("Connected to DB");
  })
  .catch(console.error);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use((req, res, next) => {
//   req.user = {
//     _id: "692b95e93f4fb21354a05cab",
//   };
//   next();
// });

app.use("/", require("./routes/index"));

app.use((req, res) => {
  res.status(NOT_FOUND).json({ message: "Requested resource not found" });
});

const { PORT = 3001 } = process.env;

app.use(express.static(path.join(__dirname, "public")));
app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`);
});
