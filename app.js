const express = require("express");

const memberRoutes = require("./src/src/routes/memberRoutes");

const app = express();

app.use(express.json());

app.use("/api/members", memberRoutes);

app.get("/", (req, res) => {
  res.send("HYPA Brotherhood Digital Management System API");
});

module.exports = app;
