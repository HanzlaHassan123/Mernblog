const express = require('express');
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoutes=require('./routes/auth')
const userRoute=require('./routes/users')
dotenv.config();
app.use(express.json());


mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(5000, () => {
      console.log("Backend is Running ");
    });
  })
  .catch((err) => console.error("Error connecting to MongoDB:", err));
  
  app.use('/api/auth',authRoutes);
  app.use('/api/users',userRoute);
 