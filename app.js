// import express from "express";
// import demoRoute from "./routes/demo.route.js";
const express = require("express");
const demoRoute = require("./routes/demo.route.js");

const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hey There!");
});

app.use("/demo", demoRoute);

app.listen(port, () => {
  console.log(`listening on port ${port}!`);
});
