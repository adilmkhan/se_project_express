require("dotenv").config();

const path = require("path");

const express = require("express");

const mongoose = require("mongoose");

const cors = require("cors");

const app = express();

const errorHandler = require("./middlewares/error-handler");

const { errors } = require("celebrate");

const { requestLogger, errorLogger } = require("./middlewares/logger");

app.use(cors());

mongoose
  .connect("mongodb://127.0.0.1:27017/wtwr_db")
  .then(() => {
    console.log("Connected to DB");
  })
  .catch(console.error);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/crash-test", () => {
  setTimeout(() => {
    throw new Error("Server will crash now");
  }, 0);
});

app.use(requestLogger);

app.use("/", require("./routes/index"));

app.use(errorLogger);

app.use(errors());

app.use(errorHandler);

const { PORT = 3001 } = process.env;

app.use(express.static(path.join(__dirname, "public")));
app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`);
});
