const cors = require("cors");
const express = require("express");

const PORT = 4500;
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
  console.warn(`Server is runing on http://13.59.92.127:${PORT}`);
});
