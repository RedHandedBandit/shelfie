const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const massive = require('massive')

const app = express();

app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING)



app.listen(4000, () => {
    console.log('Listening on 4000')
})