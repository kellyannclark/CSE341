const express = require('express');
const app = express();
const lesson1Controller = require("./controllers/lesson1")
 
app.get('/', (req, res) => {
  res.send("Hello");})

app.get('/kelly', lesson1Controller.helloKelly);

const port = 3000;
 
app.listen(process.env.PORT || port, () => {
  console.log('Web Server is listening at port ' + (process.env.PORT || port));
});