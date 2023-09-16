const express = require('express');
const app = express();
const connectDB = require('./DB/Connection');

connectDB();

const port = 3000;

app.use("/", require("./routes"));
app.use("/api/userModel", require("./Api/User"));
 
app.listen(process.env.PORT || port, () => {
  console.log('Web Server is listening at port ' + (process.env.PORT || port));
});

