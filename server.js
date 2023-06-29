const express = require("express");
const cors = require("cors");
const app = express();
const port = 2000;
const biodataRoute = require("./app/routes/biodata.route");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
db.sequelize.sync();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/biodatas", biodataRoute);

app.listen(port, () =>
  console.log(`App listening on port http://localhost:${port}!`)
);
