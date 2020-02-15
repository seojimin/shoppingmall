const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const productRoutes = require('./routes/product');
const orderRoutes = require('./routes/order');
const bbsRoutes = require('./routes/bbs');
const dbUrl = "mongodb://joke716:k9915402@ds141294.mlab.com:41294/node-rest-shop";

// DB connect. mongoose-> mongoDB 연결 라이브러리. 이걸통해서 데이터 오고가고.
// mongoose.connect("mongodb+srv://jimin:1234@cluster0-gexlq.mongodb.net/test?retryWrites=true&w=majority",{})
mongoose.connect(dbUrl,{useNewUrlParser: true,  useUnifiedTopology: true  })
    .then(() => console.log("mongoDB connected ... "))
    .catch(err => console.log(err.message));


// setting
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// route
app.use('/product', productRoutes);
app.use('/order', orderRoutes);
app.use('/bbs', bbsRoutes);


const port = 1234;


app.listen(port, () => console.log("server started"));