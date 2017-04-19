var express = require('express');
var Book = require('./model').Book;
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(function(req,res,next){
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods',"GET,POST,PUT,DELETE");
    if(req.method == 'OPTIONS'){
        res.end();
    }else{
        next();
    }
});
app.get('/books',function(req,res){
    Book.find({},function(err,books){
        res.send(books);
    });
});
app.get('/books/:_id',function(req,res){
    Book.findById(req.params._id,function(err,book){
        res.send(book);
    });
});
app.post('/books',function(req,res){
    Book.create(req.body,function(err,book){
        res.send(book);
    });
});
app.put('/books',function(req,res){
    var _id = req.query._id;
    Book.update({_id},req.body,function(err,result){
        Book.findById({_id:_id},function(err,doc){
            res.send(doc);
        });
    });
});
app.delete('/books',function(req,res){
    var _id = req.query._id;
    Book.remove({_id},function(err,result){
        res.send({});
    })
});

app.listen(3000);