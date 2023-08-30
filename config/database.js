const mongoose = require('mongoose')
mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost/todo-list', { useNewurlParser: true, useUnifiedTopology: true})
    .then(() => console.log('Conectado ao MongoDB'))
    .catch((err) => console.log(err))