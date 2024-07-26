const express = require("express");
const path = require("path");
const indexRouter = require("./routes/indexRouter");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use("/", indexRouter);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.listen(port, () =>
  console.log(`Mini Message Board - listening on port ${port}!`)
);
