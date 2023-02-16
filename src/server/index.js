const express = require("express");
require("dotenv").config();

const app = express();

port = process.env.PORT;

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${port} `);
});
