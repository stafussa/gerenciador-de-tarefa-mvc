// Controle da rota index
function exibirTarefa(request, response) {
  response.render("index");
}

// Controle da rota adicionarTarefa
function exibirNovaTarefa(request, response) {
  response.render("adicionarTarefa");
}

function adicionarTarefa(request, response) {
  console.log('Chegou na adicionarTarefa');
  response.redirect('/');

}

module.exports = { exibirTarefa, exibirNovaTarefa, adicionarTarefa };