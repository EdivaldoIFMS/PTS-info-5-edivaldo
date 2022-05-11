var express = require("express");
var app = express();
var {usuario} = require("./models");
var {empresa} = require("./models");

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}))

// Parte dos Usuarios

app.get("/usuarios", async function(req, res){
  var resultado = await usuario.findAll();
  res.json(resultado);
});

app.post("/usuarios", async function(req, res) {
  var resultado = await usuario.create(req.body);
  res.json(resultado);
});

app.put("/usuarios/:id", async function(req, res) {
var atualizar = await usuario.findByPk(req.params.id);
  res.send(atualizar.nome = "pedro")

  var resultadoSave = await atualizar.save();
  console.log(resultadoSave);
});

app.delete("/usuarios/:id", async function(req, res){
  var excluir = await usuario.findByPk(req.params.id);
  excluir.destroy();

  var resultadoSave = await excluir.save();
  console.log(resultadoSave);
});

app.get("/usuarios/:id", async function(req, res){
  var mostrar = await usuario.findByPk(req.params.id);
  res.json(mostrar);
});

// Parte das empresas

app.get("/empresas", async function(req, res){
  var resultado = await usuario.findAll();
  res.json(resultado);
});

app.post("/empresas", async function(req, res) {
  var resultado = await usuario.create(req.body);
  res.json(resultado);
});

app.put("/empresas/:id", async function(req, res) {
var atualizar = await usuario.findByPk(req.params.id);
  res.send(atualizar.nome = "pedro")

  var resultadoSave = await atualizar.save();
  console.log(resultadoSave);
});

app.delete("/empresas/:id", async function(req, res){
  var excluir = await usuario.findByPk(req.params.id);
  excluir.destroy();

  var resultadoSave = await excluir.save();
  console.log(resultadoSave);
});

app.get("/empresas/:id", async function(req, res){
  var mostrar = await usuario.findByPk(req.params.id);
  res.json(mostrar);
});

app.listen(3000, function(){
  console.log("O servidor esta bruto de mais");
});