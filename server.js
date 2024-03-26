const cors = require("cors");
const path = require("path");
const express = require("express");

const PORT = 80;
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  return res.json({
    message: "Success",
    data: { id: 1, name: "Hari Narayan", email: "hari@test.com" },
  });
});

app.listen(PORT, () => {
  console.warn(`Server is runing on http://localhost:${PORT}`);
});
