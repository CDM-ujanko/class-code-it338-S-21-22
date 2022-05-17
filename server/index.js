import 'dotenv/config'
import express from 'express';
import bodyParser from 'body-parser';
import * as db from './models/mnogo-connector.js'

import data from './data/data.js';

const app = express();

// Start server
app.use((req, res, next) => {
  // Website you wish to allow to connect
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  // Pass to next layer of middleware
  next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/classes', (req, res) => {
  res.json(Object.keys(data.classes));
});

app.get('/class/:key', async (req, res) => {
  // if (Object.hasOwnProperty.call(data.classes, req.params.key)) {
  //   res.json(data.classes[req.params.key]);
  //   return;
  // }
  //
  // res.status(400).json(`Invalid key ${req.params.key}`);

  res.json(await db.read('class', req.params.key));
});

app.post('/class', async (req, res) => {
  res.json(await db.create('class', req.body));
});

app.listen(process.env.PORT, () => {
  console.log(`App listening on ${process.env.PORT}`)
});

