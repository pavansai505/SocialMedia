const mongoose = require('mongoose');

const createConnection = () => {
    mongoose.connect('mongodb://localhost/socialMedia'
    );
    return mongoose.connection
}


const checkDBStatus = (db) => {
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {
        console.log('Connected to MongoDB');
    });
}

module.exports={
    createConnection,
    checkDBStatus
}