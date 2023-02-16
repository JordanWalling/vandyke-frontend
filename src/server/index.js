const express = require("express");
require("dotenv").config();

const app = express();

port = process.env.PORT;

// Database Connection and Port
mongoose.connect(process.env.MONGO_URI).then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`MongoDb is connected, Listening on port ${port} `);
  });
});
