const express = require('express');
const mongoose = require('mongoose');
const exphbs = require('express-handlebars');

const app = express();

const pageRoute = require('./routes/pages');


app.use(express.static(__dirname + 'public'))

app.engine('.hbs', exphbs({ defaultLayout: 'layout', extname: ".hbs"}));
app.set('view engine', '.hbs');

app.use('/', pageRoute);


const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})