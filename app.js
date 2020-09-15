// const http = require('http');
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
// const expressHbs = require('express-handlers');

const errorController = require('./controllers/error');
const db = require('../util/database');

const app = express();

// app.engine('hbs', expressHbs(layoutsDir: 'views/layouts/', defaultLayout: 'main-layout'));
// app.set('view engine', 'hbs');

// app.set('view engine', 'pug');
// app.set('views', 'views');

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

db.execute('');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3000); // Creates the server and listens
// const server = http.createServer(app);
// server.listen(3000);  // 80- http, ?? - https
// // process.exit();  //unregister the event
