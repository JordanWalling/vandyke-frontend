const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const jobRoutes = require("./routes/job");
const blogRoutes = require("./routes/blog");
const userRoutes = require("./routes/user");
const emailRoutes = require("./routes/email");

const morgan = require("morgan");
const helmet = require("helmet");

require("dotenv").config();

const app = express();

const corsOption = {
  origin: [process.env.REACT_DEV_PORT],
  optionsSuccessStatus: 200,
};

// middleware
app.use(express.json());
app.use(cors(corsOption));
app.use(morgan("dev"));
app.use(helmet());

// route middleware
app.use("/api", jobRoutes);
app.use("/api", blogRoutes);
app.use("/api", userRoutes);
app.use("/api", emailRoutes);

const PORT = process.env.PORT || 5000;

// Database Connection and Port
mongoose.connect(process.env.MONGO_URI).then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`MongoDb is connected, Listening on port ${PORT} `);
  });
});
