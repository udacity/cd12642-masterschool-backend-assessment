const express = require("express");
// const userRouter = require("./routes/userRoutes");
const dotenv = require("dotenv").config();

const app = express();
app.use(express.json());
const port = process.env.port || 3000;

app.use("/", (req, res) => {
  res.json({ message: "Welcome to the Unsplash API!" });
});

//listen for requests
app.listen(port, () => console.log(`Server is running on port ${port}`));
