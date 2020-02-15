const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const productRoutes = require('./routes/product');
const orderRoutes = require('./routes/order');
const bbsRoutes = require('./routes/bbs');

// app.use((req, res) => {
//    res.json({
//        msg: '서버 시작됨!'
//    });
// });

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/product', productRoutes);
app.use('/order', orderRoutes);
app.use('/bbs', bbsRoutes);


const port = 1234;


app.listen(port, () => console.log("server started"));