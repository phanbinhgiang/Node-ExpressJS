require('dotenv').config();
require('express-async-errors');
// async errors

const express = require('express');
const app = express();

const notFoundMiddleware = require('./middleware/not-found');
const errorMiddleware = require('./middleware/error-handler');
const connectDB = require('./db/connect');
const productsRoutes = require('./routes/products');

// middleware
app.use(express.json());

//  routes
app.get('/', (req, res) => {
  res.send(`<h1>Store API</h1><a href="/api/v1/products">products route</a>`);
});

app.use('/api/v1/products', productsRoutes);

// products route
app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Sever is listening port ${port}`));
  } catch (error) {}
};

start();
