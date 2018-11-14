const keys = require('./keys');
const redis = require('redis');

const redisClient = redis.createClient ({
    host: keys.redisHost,
    port: keys.redisPort,
    retry_strategy: () => 1000 // reconnect if connection is lost every ...ms
});
