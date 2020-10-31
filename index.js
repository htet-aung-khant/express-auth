const express = require('express');
const mongoose = require('mongoose');
const exphbs = require('express-handlebars');

const app = express();


app.use(express.static(__dirname + 'public'))

app.engine('.hbs', exphbs({ defaultLayout: 'layout', extname: ".hbs"}));
app.set('view engine', '.hbs');


const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})