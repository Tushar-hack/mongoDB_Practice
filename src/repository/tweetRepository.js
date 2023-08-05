const tweet = require('../models/tweet');

class TweetRepository {
    async create (data) {
        try {
            const newTweet = await tweet.create(data);
            return newTweet;
        } catch (error) {
            console.log(error);
        }
    }
    async get (id) {
        try {
            const getTweet = await tweet.findById(id);
            return getTweet;
        } catch (error) {
            console.log(error);
        }
    }
    async delete (id) {
        try {
            const deleteTweet = await tweet.deleteOne(id);
            return deleteTweet;
        } catch (error) {
            console.log(error);
        }
    }
    async update (id, data) {
        try {
            const updatedTweet = await tweet.findByIdAndUpdate(id, data);
            return updatedTweet;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = TweetRepository;