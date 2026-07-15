const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/plain"
  });

  res.end("Welcome to HBDMS Backend!");
});

server.listen(PORT, () => {
  console.log(`HBDMS Backend running on port ${PORT}`);
});
