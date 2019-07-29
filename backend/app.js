var express = require('express');
var app     = express();


// app.set('views', path.join(__dirname, 'views'));
// app.engine('hbs', exphbs({ extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + '/views/layouts/' }));
// app.set('view engine', 'hbs');


//secret key
app.set('secretKey', 'testing');

require('./middlewares')(app);
require('./config')(app);

require('./routes')(app);
require('./helpers/errorHandler')(app);


module.exports = app;