const TweetRepository = require('../repository/tweetRepository');

class TweetService {
    constructor () {
        this.tweetRepository = new TweetRepository();
    }

    async create (data) {
        try {
            const newTweet = await this.tweetRepository.create(data);
            return newTweet;
        } catch (error) {
            console.log(error);
        }
    }

    async get (id) {
        try {
            const getTweet = await this.tweetRepository.get(id);
            return getTweet;
        } catch (error) {
            console.log(error);
        }
    }
    async delete (id) {
        try {
            const deleteTweet = await this.tweetRepository.delete(id);
            return deleteTweet;
        } catch (error) {
            console.log(error);
        }
    }
    async update (id, data) {
        try {
            const updatedTweet = await this.tweetRepository.update(id, data);
            return updatedTweet;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = TweetService;