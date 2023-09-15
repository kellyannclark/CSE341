const routes = require("express").Router();
const lesson1Controller = require("../controllers/lesson1")

 
routes.get('/', (req, res) => {
  res.send("Hello");})

routes.get('/kelly', lesson1Controller.helloKelly);

module.exports = routes;