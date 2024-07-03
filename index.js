// import express
const express = require('express');
const UserRouter = require('./routers/userRouter');
const feedRouter = require('./routers/feedRouter');
const productRouter = require('./routers/productRouter');
const cors = require('cors');

// initialize express
const app = express();

const port = 5000;

// middleware

app.use(cors({
    origin : 'http://localhost:3000'
}))
app.use(express.json());
app.use('/user', UserRouter);
app.use('/feed', feedRouter);
app.use('/product', productRouter);

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