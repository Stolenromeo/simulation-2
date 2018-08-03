const express = require('express'),
	  bodyPar = require('body-parser'),
	  hc = require('./houseCtrl'),
	  massive = require('massive');
	  require('dotenv').config();

const app = express();
app.use(bodyPar.json());
massive(process.env.CONNECTION_STRING).then(db=>{
    app.set('db', db);
}).catch(err => {
    console.log('there was an error connecting to DB:', err)
})

const {SERVER_PORT} = process.env

app.listen(SERVER_PORT, console.log('Sound of Silence not on port:', SERVER_PORT))