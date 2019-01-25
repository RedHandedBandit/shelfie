const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const massive = require('massive')
const ctrl = require('./controller')

const app = express();

app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance)
}).catch(error => console.log(error))

app.get(`/api/products`, ctrl.getList)
app.post(`/api/products`)



const port = process.env.SERVER_PORT || 4000;
app.listen(port, () => {console.log(`watching this ${port} for you`)});