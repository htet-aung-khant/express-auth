const express = require('express');

const router = express.Router();

const pageController = require('../controllers/pageController');


router.get('/', pageController.indexPage);

router.get('/about', pageController.aboutPage);

router.get('/project', pageController.projectPage);

router.get('/contact', pageController.contactPage);


module.exports = router;