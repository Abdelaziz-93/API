const mongoose = require('mongoose');

const ConnectDb=async()=>{
try {
    await mongoose.connect('mongodb://127.0.0.1:27017/API')
    console.log('mongodb connection')
} catch (error) {
    console.log('error!')
}
}

module.exports = ConnectDb;