const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/gitBlog', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MONGODB CONNECTED!')
    })
    .catch((err) => {
        console.log('MONGODB CONNECTION FAILED!')
        console.log(err);
    })

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');

app.listen(3000, () => {
    console.log('GITBLOG IS LISTENING ON PORT 3000!');
})

