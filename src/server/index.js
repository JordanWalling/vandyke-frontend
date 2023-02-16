const express = require("express");
const mongoose = require("mongoose");
const jobRoutes = require("./routes/job");
require("dotenv").config();

const app = express();

// middleware
app.use(express.json());

// route middleware
app.use("/api", jobRoutes);

port = process.env.PORT;

// Database Connection and Port
mongoose.connect(process.env.MONGO_URI).then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`MongoDb is connected, Listening on port ${port} `);
  });
});
