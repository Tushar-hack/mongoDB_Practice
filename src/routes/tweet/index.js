const express = require('express');
const router = express.Router();

const tweetController = require('../../controller/tweetController');

router.post('/create', tweetController.createTweet);

module.exports = router;