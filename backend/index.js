const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const app = express()
const PORT = 8080
require('dotenv').config()

app.use(morgan('dev'))
app.use(express.json())

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.f7stczs.mongodb.net/?retryWrites=true&w=majority`
mongoose
  .connect(uri)
  .then(() => console.log('Database connection established'))
  .catch((e) => console.error(e))

app.listen(PORT, () => {
	console.log(`Server listening on ${PORT}`);
  });