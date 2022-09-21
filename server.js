require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("./Config/db");
const errorHandler = require('./Middleware/errorHandle');
const cors = require('cors')
const app = express();
const adminRoute = require('./Routes/routes');

const PORT = process.env.PORT || 5000;


//database connection
connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/admin',adminRoute);



app.use(errorHandler)

mongoose.connection.once("open", () => {
  console.log("DB Connected");
  app.listen(PORT, () => {
    console.log(`Port running on ${PORT}...`);
  });
});