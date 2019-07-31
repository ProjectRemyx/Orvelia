const express = require('express'); //Routing
const mongoose = require('mongoose'); //ORM
const bodyParser = require('body-parser'); //Get data from req
const path = require('path');

const heroes = require('./routes/api/heroes'); //Hero routes
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json()); //Apply middleware

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // * => allow all origins
    res.header('Access-Control-Allow-Headers', 'Content-Type, X-Auth-Token, Accept'); 
    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, OPTIONS, DELETE');
        return res.status(200).json({});
    }
    next();
});

app.use('/api/heroes', heroes);

const db = require('./config/keys').mongoURI; //Connection String

mongoose
    .connect(db, {useNewUrlParser: true})
    .then(() => console.log('Connected to Orvelia Cluster'))
    .catch(err => console.log(err));
    

const port = process.env.PORT || 5000;
app.listen(port, () => console.log (`Server started on port ${port}`));


