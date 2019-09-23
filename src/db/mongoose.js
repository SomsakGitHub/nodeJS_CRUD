const mongoose = require('mongoose');
const url = 'mongodb://localhost/test_CRUD';

//Connect database.
mongoose.connect(url, { useNewUrlParser: true })
    .then(db => console.log('DB connected'))
    .catch(err => console.error(err));

module.exports = mongoose;