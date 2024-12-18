require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const todoRoute = require('./routes/todoroute');
const App = express();
App.use(cors());
App.use(express.json());

App.get('/', (req, res) => {
  console.log('Server Started');
});

App.use('/todo', todoRoute);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    App.listen(5000, () => {
      console.log('DB Connected and Server Started');
    });
  })
  .catch((err) => {
    console.log('Error connecting to database:', err);
  });
