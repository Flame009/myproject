const express = require('express');
const app = express();
const port =  process.env.PORT || 3000;

app.set('views', 'views');
app.set('view engine', 'hbs');
app.use(express.static('public'));

app.get('/', function (request, response) {
    response.render('home', {name: 'John Doe'});
});

app.listen(port);
console.log('server listening on port ${port}');


