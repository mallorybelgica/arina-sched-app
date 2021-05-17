"use strict";
const express = require("express");
const morgan = require("morgan");
const userClasses = require("./userClasses.json");

const PORT = 8000;
const app = express();

app
  .use(express.json())
  .use(morgan("dev"))

  .get("/", async (req, res) => {
    await res.status(200).json({ message: "Greetings from the backend!" });
  })

  .get("/classes", async (req, res) => {
    await res.status(200).json({ status: 200, data: userClasses });
  })

  .listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
