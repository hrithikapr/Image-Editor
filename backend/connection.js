const mongoose = require('mongoose');
const dbname = 'userRegistered';

const dburl = `mongodb+srv://keith:keith0204@cluster0.1k7w5rj.mongodb.net/${dbname}?retryWrites=true&w=majority`;

mongoose.connect(dburl)
.then((result)=>{
    console.log('Connection Successfull');
}).catch((err)=>{
    console.log(err);
})

module.exports = mongoose;