// import express from "express";
// import demoRoute from "./routes/demo.route.js";
const express = require("express");
const demoRoute = require("./routes/demo.route.js");
const logger = require("./utils/logger");
const morgan = require("morgan");
const helmet = require("helmet");
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");
const cors = require("cors");
const { corsOptions } = require("./config/corsConfig");

const { port } = require("./config/envConfig");
const { swaggerOptions } = require("./utils/swagger.js");

const app = express();

app.use(cors(corsOptions));
app.use(morgan("tiny"));
app.use(helmet());
const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.get("/", (req, res) => {
  res.send("Hey There!");
});

app.use("/demo", demoRoute);

app.listen(port, () => {
  logger.info(`listening on port ${port}!`);
});
