// import express from "express";
// import demoRoute from "./routes/demo.route.js";
const express = require("express");
const demoRoute = require("./routes/demo.route.js");
const logger = require("./utils/logger");
const morgan = require("morgan");

const app = express();

app.use(morgan("tiny"));

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hey There!");
});

app.use("/demo", demoRoute);

app.listen(port, () => {
  logger.info(`listening on port ${port}!`);
});
