const express = require('express');
const bodyParser = require('body-parser');
const router = require('./controllers/todos.route');
const mongoose = require('mongoose');
const cors = require('cors')

mongoose.set('strictQuery', false);
mongoose.Promise = global.Promise;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use('/todos', router)

const startServer = async () => {
  await  mongoose.connect("mongodb://127.0.0.1:27017/todos")
    .then(() => {
      console.log('Database successfully connected!')
      },
      error => {
        console.log('Could not connect to database : ' + error)
      }
    )

  app.listen(3000, () => {
    console.log("API is started")
  })
}

startServer()
