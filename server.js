const express = require('express');
const expresshbs = require("express-handlebars");
const path = require('path');
const quizzes = require('./models/quizzes.js').quizzes;
const quizRoutes = require('./routes/quizRoutes');

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

const HBS = ".hbs";

const handlebars = expresshbs.create({
  extname: HBS,
  helpers: {
    sub: (a, b) => a - b,
    lt: (a, b) => a < b,
    gt: (a, b) => a > b,
    eq: (a, b) => a === b,
    div: (a, b) => a / b,
    inc: (value) => parseInt(value) + 1,
    json: (context) => JSON.stringify(context),
    isArray: (value) => Array.isArray(value),
    typeof: (value) => typeof value,
  }
});

app.engine(HBS, handlebars.engine);
app.set("view engine", HBS);
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', quizRoutes);

app.listen(port, () => {
  console.log("App listening to port");
});