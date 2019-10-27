const express = require('express');
const consign = require('consign');

const PORT = 3000;

const app = express();

app.set("json spaces", 4);

consign()
    .include("libs/config.js")
    .then("db.js")
    .then("libs/middlewares.js")
    .then("routes")
    .then("libs/boot.js")
    .into(app);