const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27018/netflix', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
