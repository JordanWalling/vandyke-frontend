const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const jobRoutes = require("./routes/job");
const blogRoutes = require("./routes/blog");
const userRoutes = require("./routes/user");
const morgan = require("morgan");
require("dotenv").config();

const app = express();

// const corsOptions = {
//   origin: process.env.REACT_DEV_PORT,
//   optionsSuccessStatus: 200,
// };

// middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// route middleware
app.use("/api", jobRoutes);
app.use("/api", blogRoutes);
app.use("/api", userRoutes);

port = process.env.PORT;

// Database Connection and Port
mongoose.connect(process.env.MONGO_URI).then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`MongoDb is connected, Listening on port ${port} `);
  });
});
