// import { Router } from "express";
// import { demoHandler } from "../controllers/demoController";
const Router = require("express");
const { demoHandler } = require("../controllers/demoController");

const router = Router();

router.get("/", demoHandler);

module.exports = router;
