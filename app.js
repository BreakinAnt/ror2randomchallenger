const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const userRoutes = require('./routes/userRoutes');

app.use(bodyParser.urlencoded({extended: false}));

app.use(userRoutes);

app.listen(process.env.PORT || 3000);
console.log(`Node listening on PORT ${process.env.PORT || 3000}`);