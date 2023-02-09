const express = require("express");
const cors = require("cors");
const proxy = require("express-http-proxy");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/customer", proxy("http://localhost:8001/customer"));
app.use("/shopping", proxy("http://localhost:8001/shopping"));
app.use("/", proxy("http://localhost:8001/product"));

app.listen(8000, () => {
  console.log("Gateway on 8000...");
});
