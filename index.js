const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/hello", (req, res) => {
  res.send("hello");
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
