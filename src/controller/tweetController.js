const TweetService = require('../service/tweetService');

const tweetService = new TweetService();

const createTweet = async (req, res) => {
    try {
        const createtweet = await tweetService.create(req.body);
        return res.status(201).json({
            data: createtweet,
            message: 'Successfully created the tweet',
            success : true,
            err: {}
        });        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "something went wrong"
        });
    }
}

module.exports = {
    createTweet
}