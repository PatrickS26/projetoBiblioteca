
 const express = require('express');
const app = express();

const mongoose = require ('mongoose');

mongoose.connect('mongodb+srv://user:123batata123@cluster0.tccvk.mongodb.net/app-MEAN?retryWrites=true&w=majority').then(() => {
  console.log ("Conexão OK")
  }).catch(() => {
  console.log("Conexão NOK")
  });

const Livro = require ('./models/livro');

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const livro = [];

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', "*");
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type,  Accept');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
  next();
});

app.post('/api/livro', (req, res, next) => {
  const livro = new Livro({
    titulo: req.body.titulo,
    numeroPg: req.body.numeroPg,
    autor: req.body.autor,
    id: req.body.id
    })
  livro.save();
  console.log(livro);
  res.status(201).json({ mensagem: 'Livro inserido' })
});

app.get('/api/livro', (req, res, next) => {
  Livro.find().then(documents => {
  res.status(200).json({
  mensagem: "Tudo OK",
  livros: documents
  });
  })
  });

app.use('/api/livro', (req, res, next) => {
  res.json(livro);
});



module.exports = app;
