const port = 3001;

const bodyParser = require('body-parser');
const express = require('express');

//Server ou App 
const app = express();

app.use(bodyParser.urlencoded({extended: true})); // vai ler a url e vai tranformar em um obj JSON
app.use(bodyParser.json());

app.listen(port, () => console.log("Aplicação rodando na porta 3001"));

module.exports = app;