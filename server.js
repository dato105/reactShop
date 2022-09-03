const fs = require("fs");
const cors = require("cors");
const express = require("express");
const app = express();

app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello");
});
app.get("/products", (req, res) => {
  fs.readFile("./products.json", "utf8", (err, data) => {
    if (err) throw err;
    const products = JSON.parse(data);
    res.send(products);
  });
});

app.listen(5000, () => {
  console.log("Example app listening on port 5000!");
});
