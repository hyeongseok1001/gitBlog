const mongoose = require('mongoose');

const text = require('./TextFiles/50');

const Post = require('./models/posts/post');

mongoose.connect('mongodb://localhost:27017/gitBlog', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MONGODB CONNECTED!')
    })
    .catch((err) => {
        console.log('MONGODB CONNECTION FAILED!')
        console.log(err);
    })

const seedPosts = [
    {
        title: '50. Static & Global Variables in Recursion',
        subTitle: 'Recursion of DataStruture',
        description: 'sample',
        tags: ['#자료구조', '#재귀', '#함수', '#호출']   
        }
    ]

Post.insertMany(seedPosts)
    .then(res => {
        console.log(res)
    })
    .catch(e => {
        console.log(e)
    })