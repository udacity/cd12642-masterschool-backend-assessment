const express = require("express");
const photoRoutes = require("./routes/photoRoutes");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");

const app = express();
app.use(express.json());
const port = process.env.port || 3000;

connectDB();

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to the Unsplash API!" });
});

//userRouter
app.use("/api", photoRoutes);

//listen for requests
app.listen(port, () => console.log(`Server is running on port ${port}`));
