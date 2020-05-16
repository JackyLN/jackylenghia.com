const express = require('express');
const path = require('path');
const app = express();

const webpack = require('webpack');
const config = require('./webpack.config.js');
const webpackDevMiddleware = require('webpack-dev-middleware');
const compiler = webpack(config);

const port = 1336;

//Setup static path
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));
app.use(express.static(path.join(__dirname, "dist")));


//Default path
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});


// app.use(express.urlencoded({ extended: false })).use(express.json());

// //Product router
// const productRouter = require('./src/services/productServices');
// app.use('/product', productRouter);
// //Customer router
// const customerRouter = require('./src/services/customerServices');
// app.use('/customer', customerRouter);
// //Order router
// const orderRouter = require('./src/services/orderServices');
// app.use('/order', orderRouter);

//App Start
app.listen(port, () => console.log(`Example app listening on port ${port}!`))