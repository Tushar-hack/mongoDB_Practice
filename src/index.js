const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const connect = require('./config/dbConfig');
const tweetApiRoutes = require('./routes/tweet/index');


const PORT = 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/tweet', tweetApiRoutes);
app.listen(PORT,async () => {
    console.log(`Server Started on port: ${PORT}`);
    await connect();
    
});