const express = require('express'); //Routing
const mongoose = require('mongoose'); //ORM
const bodyParser = require('body-parser'); //Get data from req
const path = require('path');

const heroes = require('./routes/api/heroes'); //Hero routes
const app = express();

app.use(bodyParser.json()); //Apply middleware

const db = require('./config/keys').mongoURI; //Connection String

app.use('/api/heroes', heroes);

mongoose
    .connect(db, {useNewUrlParser: true})
    .then(() => console.log('Connected to Orvelia Cluster'))
    .catch(err => console.log(err));
    

const port = process.env.PORT || 5000;
app.listen(port, () => console.log (`Server started on port ${port}`));


