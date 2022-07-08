const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const mongoose = require('mongoose');
const routerAuthor = require('./routes/routerAuthor')
var morgan = require('morgan');
const routerBook = require('./routes/routerBook');
var app = express()
 
app.use(morgan('common'));

app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors());
dotenv.config();
mongoose.connect(process.env.mongoose , () => {
    console.log('connected db');
})
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  })
);

app.use(routerAuthor)
app.use(routerBook)

app.listen(process.env.PORT, () => {
    console.log(`Server is running ${process.env.PORT}`)
})