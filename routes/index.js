import express from 'express';
import {home, counter} from './pages.js'


var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/home')
});

router.get('/home', home);
router.get('/counter', counter);

export default router;
