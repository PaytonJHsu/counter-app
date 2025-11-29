import express from 'express';
import {home, counter} from './pages.js'


var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', layout: "" });
});

router.get('/home', home);
router.get('/counter', counter);

export default router;
