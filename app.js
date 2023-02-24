const express = require("express");
const dotenv = require("dotenv").config();
const photoRoutes = require("./routes/photoRoutes.js");
const connectDB = require("./config/db.js");
const port = process.env.port || 3000;

const userRoutes = require("./routes/userRoutes.js");
connectDB();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to the Unsplash API!" });
});

//userRouter
app.use("/api", photoRoutes);
app.use("/api/users", userRoutes);

//listen for requests
app.listen(port, () => console.log(`Server is running on port ${port}`));
