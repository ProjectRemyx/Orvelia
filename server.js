const express = require('express');
const mongoose = require('mongoose'); 
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const db = require('./config/keys').mongoURI;

mongoose
    .connect(db, {useNewUrlParser: true})
    .then(() => console.log('Connected to Orvelia Cluster'))
    .catch(err => console.log(err));
    

const port = process.env.PORT || 5000;
app.listen(port, () => console.log (`Server started on port ${port}`));


