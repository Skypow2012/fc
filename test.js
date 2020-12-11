var http = require("http");

var server = http.createServer((req, res) => {
  req.on("data", (d) => {
    console.log("data:", d.toString());
  })
  req.on("end", () => {
    console.log("end.");
  })
  res.write("OK");
  res.end();
});

server.listen(8080);
