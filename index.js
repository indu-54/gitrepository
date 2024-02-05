const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const pincodeRoute = require('./routes/pincodeRoute');
const app = express();
const PORT = process.env.PORT || 3000;

app.use('/api',pincodeRoute);
app.listen(3000, () => {
    console.log(`Server is running on http://localhost:${3000}`);
  });

