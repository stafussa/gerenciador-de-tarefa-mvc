var tarefasModel = require("../models/tarefaModel");

// Controle da rota index
function exibirTarefa(request, response) {
  var tarefas = tarefasModel.listarTarefas();
  console.log('tarefas:', tarefas);
  response.render("index");
}

// Controle da rota adicionarTarefa
function exibirNovaTarefa(request, response) {
  response.render("adicionarTarefa");
}

function adicionarTarefa(request, response) {
  console.log('Chegou na adicionarTarefa');
  console.log(request.body);

  var titulo = request.body.titulo;
  var descricao = request.body.descricao;
  tarefasModel.adicionarTarefa(titulo, descricao);
  response.redirect('/');

}

module.exports = { exibirTarefa, exibirNovaTarefa, adicionarTarefa };