const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');


const app = express();
// bodyparser
app.use(bodyParser.json());

// DB config
const db = require('./config/keys').mongoURI;
// connect to mongodb
mongoose
    .connect(db)
    .then(()=>{
        console.log("mongoDB connected...")
    })
    .catch(err=>{
        console.log("error occured",err)
    })


// use routes
app.use('/api/items',items);

const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log(`server has been started on port ${port}.`);
})