// const express = require('express');
import express from 'express';
const app: express.Express = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('hello.ejs');
});

app.get('/top', (req, res) => {
    res.render('top.ejs');
});

app.listen(3000);
