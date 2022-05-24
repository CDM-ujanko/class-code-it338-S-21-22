import 'dotenv/config'
import express from 'express';
import bodyParser from 'body-parser';
import * as db from './models/mnogo-connector.js'
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import passport from 'passport';
import {Strategy, ExtractJwt} from 'passport-jwt'

// import data from './data/data.js';

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

// Tell app to use passport
app.use(passport.initialize());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/classes', async (req, res) => {
  res.json((await db.keys('class', 'key')).map(o => o.key));
});

app.get('/class/:key', async (req, res) => {
  // if (Object.hasOwnProperty.call(data.classes, req.params.key)) {
  //   res.json(data.classes[req.params.key]);
  //   return;
  // }
  //
  // res.status(400).json(`Invalid key ${req.params.key}`);

  res.json(await db.read('class', 'key', req.params.key));
});

app.post('/class', passport.authenticate('jwt', {session: false}), async (req, res) => {
  res.json(await db.create('class', req.body));
});

app.post('/login', async (req, res) =>  {
  if (!req.body.username || !req.body.password) {
    res.status(401).json('Invalid username or password!');
  }

  try {
    let user = await db.read('users', 'username', req.body.username);
    if (!user) {
      res.status(401).json('Invalid username or password!');
      return;
    }

    let match = await bcrypt.compare(req.body.password, user.password);
    if (match) {
      let tokenObj = {
        username: user.username,
      }

      let token = jwt.sign(tokenObj, process.env.JWT_KEY, {expiresIn: '30 days'});
      res.json({
        username: user.username,
        name: user.name,
        token: token
      });
    } else {
      res.status(401).json('Invalid username or password!');
    }

  } catch (e) {
    console.error(e);
    res.status(401).json('Invalid username or password!');
  }
});

passport.use(new Strategy({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_KEY
    }, async (token, done) => {
      try {
        let user = await db.read('users', 'username', token.username);
        return user ? done(null, user) : done(null, false);
      } catch (e) {
        return done(e, false);
      }
    }
));

app.listen(process.env.PORT, () => {
  console.log(`App listening on ${process.env.PORT}`)
});

