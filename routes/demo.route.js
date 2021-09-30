// import { Router } from "express";
// import { demoHandler } from "../controllers/demoController";
const Router = require("express");
const { demoHandler } = require("../controllers/demoController");

const router = Router();
/**
 * @swagger
 * tags:
 *  name: Demo Route
 *  description: This is for the main data
 * /demo:
 *  get:
 *      tags: [Demo Route]
 *      responses:
 *          default:
 *              description: This is the default response for it
 */
router.get("/", demoHandler);

module.exports = router;
