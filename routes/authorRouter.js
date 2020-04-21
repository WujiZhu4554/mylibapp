const express = require('express');
// add our router
const authorRouter = express.Router();
// require the author controller
const authorController = require('../controllers/authorController.js');
// handle the GET request on root of author-management path,
// i.e. get all authors
authorRouter.get('/', (req, res) => authorController.getAllAuthors(req, res));

authorRouter.get('/:id', (req, res) => authorController.getAuthorByID(req, res));

authorRouter.get('/add', (req, res) => res.redirect("../public/create.html"));
// export the router
module.exports = authorRouter;