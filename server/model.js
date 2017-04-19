var mongoose = require('mongoose');
mongoose.connect('mongodb://123.57.223.74/bookstore');
var BookSchema = new mongoose.Schema({
    name:String,
    image:String,
    price:Number
});
exports.Book = mongoose.model('Book',BookSchema);
