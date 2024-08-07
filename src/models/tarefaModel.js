var tarefas = [];

function adicionarTarefa(tilulo, descricao) {   
    tarefas.push({
        id: Date.now(),
        titulo: tilulo,
        descricao: descricao
    });
}


function listarTarefas() {
    return tarefas;
}


module.exports = { adicionarTarefa, listarTarefas }