#!/usr/bin/env node
import 'dotenv/config'
import {Command} from 'commander';
import * as db from './models/mnogo-connector.js'
import bcrypt from 'bcrypt';

const program = new Command();
program.version('0.0.1');

program
    .command('create <username> <password> <name>')
    .description('create a user with username and password')
    .action(async (username, password, name) => {
      try {
        let hash = await bcrypt.hash(password, parseInt(process.env.SALT_ROUNDS));
        let user = await db.create('users', {username:  username, password: hash, name: name});
        console.log('User Created');
      } catch (e) {
        console.error(e);
      }
      process.exit();
    })


program.parse(process.argv);