// import express
const express = require('express');
const UserRouter = require('./routers/userRouter');
const feedRouter = require('./routers/feedRouter');

// initialize express
const app = express();

const port = 5000;

// middleware
app.use(express.json());
app.use('/user', UserRouter);
app.use('/feed', feedRouter);

// endpoint or route
app.get('/', (req, res) => {
    res.send('response from express');
});

app.get('/add', (req, res) => {
    res.send('response from add');
});

app.listen(port, () => {
    console.log('server started ');
});