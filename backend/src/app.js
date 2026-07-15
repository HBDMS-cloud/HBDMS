const http = require("http");

const app = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "application/json"
  });

  res.end(JSON.stringify({
    status: "success",
    message: "Welcome to HYPA Brotherhood Digital Management System (HBDMS) API"
  }));
});

module.exports = app;
