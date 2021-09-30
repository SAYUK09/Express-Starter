// import express from "express";
// import demoRoute from "./routes/demo.route.js";
const express = require("express");
const demoRoute = require("./routes/demo.route.js");
const logger = require("./utils/logger");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const { corsOptions } = require("./config/corsConfig");

const { port } = require("./config/envConfig");

const app = express();

app.use(cors(corsOptions));
app.use(morgan("tiny"));
app.use(helmet());

app.get("/", (req, res) => {
  res.send("Hey There!");
});

app.use("/demo", demoRoute);

app.listen(port, () => {
  logger.info(`listening on port ${port}!`);
});
