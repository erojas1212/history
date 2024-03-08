const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
require ('dotenv').config()
const path = require("path")

app.use(express.json());
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, 'client', 'dist')))
mongoose.set('strictQuery', true)

mongoose.connect(
  process.env.MONGOURL,
  (err) => {
    console.log("connected to db", err);
  }
);

app.use("/api/history", require("./routes/historyRouter.js"))
app.use('/api/userHistory', require("./routes/userHistoryRouter.js"))

app.use((err, req, res, next) => {
  console.log(err);
  return res.send({ errMsg: err.message });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

app.listen(process.env.PORT, () => {
    console.log('server is running on port ' + process.env.PORT)
});
