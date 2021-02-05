const express = require('express');
const authController = require('../controllers/authController');

const router = express.Router();

router.get('/', (req, res) => res.render('index'));
router.get('/tour/:slug', (req, res) => res.render('tour/[slug]'));
router.get('/login', (req, res) => res.render('login'));
router.get('/signup', (req, res) => res.render('signup'));

router.use(authController.protect);
router.get('/me', (req, res) => res.render('me'));
router.get('/my-tours', (req, res) => res.render('my-tours'));

module.exports = router;
