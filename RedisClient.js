const redis = require('redis');

const client = redis.createClient({
    password: 'SkOdXWtH2JyYRLS2ivTLxcz5aqkjJAev',
    socket: {
        host: 'redis-12922.c212.ap-south-1-1.ec2.cloud.redislabs.com',
        port: 12922
    }
  });

module.exports = client;