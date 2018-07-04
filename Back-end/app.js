var express = require('express');
var mongoose = require('mongoose');

var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');
var app = express();

const route = require('./controllers/route');
const route_1 = require('./controllers/inventoryController');
const route_2 = require('./controllers/recipieController');
const route_3 = require('./controllers/salesController');
//const route_4 = require('./controllers/users');
const route_4 = require('./controllers/books_issue');
const route_5 = require('./controllers/books_request');
const route_6 = require('./controllers/books_add');
const route_7 = require('./controllers/members');
const route_8 = require('./controllers/massages');
//middleware

//adding middleware - cors

app.use(cors({ origin: 'http://localhost:4200'}));
app.use(bodyparser.json());
app.use('/api',route);
app.use('/recipie',route_2);
app.use('/items', route_1);
app.use('/', route_3);
app.use('/',route_4);
app.use('/',route_5);
app.use('/',route_6);
app.use('/',route_7);
app.use('/',route_8);
//app.use('/users',route_4);


//connect to mongodb
mongoose.connect('mongodb://localhost:27017/sales');

//on connection
mongoose.connection.on('connected',function(){
    console.log('connected to database mongodb @ 27017');
});

mongoose.connection.on('connected',function(err){
    if(err){
        console.log('error in database connection: '+err);
    }
});




app.get('/',function(req,res){
    res.send('Hello world');

});

app.listen(3000, function(){
    console.log('port is up on port 3000');
});



