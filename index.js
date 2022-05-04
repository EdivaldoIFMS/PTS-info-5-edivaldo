var express = require("express");
var app = express();
var {usuario} = require("./models");

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}))

app.get("/", async function(req, res){
  var resultado = await usuario.findAll();
  res.json(resultado);
});

app.post("/", async function(req, res) {
  var resultado = await usuario.create(req.body);
  res.json(resultado);
});

app.put("/:id", async function(req, res) {
var atualizar = await usuario.findByPk(req.params.id);
  res.send(atualizar.nome = "pedro")

  var resultadoSave = await atualizar.save();
  console.log(resultadoSave);
});

app.delete("/:id", async function(req, res){
  var excluir = await usuario.findByPk(req.params.id);
  excluir.destroy();

  var resultadoSave = await excluir.save();
  console.log(resultadoSave);
});

app.get("/:id", async function(req, res){
  var mostrar = await usuario.findByPk(req.params.id);
  res.json(mostrar);
});

app.listen(3000, function(){
  console.log("O servidor esta bruto de mais");
});