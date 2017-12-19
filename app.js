"use strict";

import path from 'path';
import express from 'express';
import knex from 'knex';
import knexConfig from './knexfile';
import dogsRoutes from './routes/dogs';
import usersRoutes from './routes/users'
import walkersRoutes from './routes/walkers'
import ownersRoutes from './routes/owners'

const PORT = process.env.PORT || 8080;
const ENV = process.env.ENV || "dev";
const app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// knex is function
const knexObj = knex(knexConfig[ENV]);

//---routes---------------------------
app.use(express.static(path.join(__dirname, 'dist')))
app.use('/static', express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.render('main');
});

app.use('/dogs', dogsRoutes(knexObj));
app.use('/users', usersRoutes(knexObj));
app.use('/walkers', walkersRoutes(knexObj));
app.use('/owners', ownersRoutes(knexObj));

app.listen(PORT, () =>{
    console.log("ParkTime API server listening on port" + PORT);  
})