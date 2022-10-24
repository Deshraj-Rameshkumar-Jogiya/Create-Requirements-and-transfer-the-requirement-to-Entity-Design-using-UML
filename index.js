//require('dotenv').config();
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

//const app = require('./app');
//new code
//const mongoose = require('mongoose');

const MONGO_DATA_BASE = process.env.DATABASE.replace('Dj8@mahadev', process.env.DB_PASSWORD);


mongoose.connect(MONGO_DATA_BASE,
  //connection recipie
  {
    useNewUrlParser: true,
    // useCreateIndex: true
  }).then(con=>{
    // console.log(con.connection);// log connection properties
    console.log(`The Database connection was successful with ${process.env.DATABASE}`);// log connection properties
  });

const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})