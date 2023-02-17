const express = require("express");
const mongoose = require("mongoose");
const jobRoutes = require("./routes/job");
const blogRoutes = require("./routes/blog");
require("dotenv").config();

const app = express();

// middleware
app.use(express.json());

// route middleware
app.use("/api", jobRoutes);
app.use("/api", blogRoutes);

port = process.env.PORT;

// Database Connection and Port
mongoose.connect(process.env.MONGO_URI).then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`MongoDb is connected, Listening on port ${port} `);
  });
});
