import express from 'express';
const mainRouter = express.Router();

/* GET home page. */
mainRouter.get('/', function(req, res, next) {
  res.render('index', { title: 'Karims Express'});
});
mainRouter.get('/hello', function(req, res, next) {
  res.render('index', { title: 'Karims Express with hello'});
});

export default mainRouter;
