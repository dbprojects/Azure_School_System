const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');



app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept, Authorization");
    //res.header("Access-Control-Allow-Headers","*");
    //Browser send OPTIONS request first when you make POST or PUT request
    if(req.method==='OPTIONS') {
        res.header("Access-Control-Allow-Methods","PUT,POST,PATCH, DELETE, GET");
        return res.status(200).json({});
    }

    next();
});

//Routes which should handle the requests
const productRoutes = require('./api/routes/products');
app.use('/products', productRoutes);

const orderRoutes = require('./api/routes/orders');
app.use('/orders', orderRoutes);

app.use((req,res,next) =>{
    const error = new Error('Not found');
    error.status = 404;
    next(error);    
});

app.use((error,req,res,next)=>{
    res.status(error.status || 500);
    res.json({
        error:{
            message: error.message
        }
    });

});
module.exports = app;