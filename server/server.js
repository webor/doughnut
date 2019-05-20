const express = require("express");
server(process.env.PORT || 8000);

function server(port) {
  const app = express();

  app.use(express.static("static"));
  app.listen(port);
}