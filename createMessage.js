const fs = require("fs");
const http = require("http");
const open = require("open");

const hostname = "127.0.0.1";
const port = 3000;

// Create the server and load the html file
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html; charset=utf-8");

  fs.readFile("message.html", "utf8", (err, html) => {
    res.end(html);
  });
});

server.listen(port, hostname, async () => {
  console.log(`Server running at http://${hostname}:${port}/`);

  // Open the page in browser
  await open("http://localhost:3000");

  // Close the server
  setTimeout(() => {
    server.close(() => {
      console.log("Server closed!");
    });
  }, 1000);
});
