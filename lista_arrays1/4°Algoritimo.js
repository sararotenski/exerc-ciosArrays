/*
Ana está organizando suas tarefas diárias. 
Crie um array inicialmente vazio chamado 'tarefas'. Solicite a Ana para adicionar três tarefas à lista.
Remova a segunda tarefa da lista e, em seguida, adicione "ligar para o médico" ao final da lista. 
Imprima a lista de tarefas atualizada no final.
*/

let tarefas = []

tarefas[0] = prompt('Adicione uma tarefa à lista!')
tarefas[1] = prompt('Adicione uma segunda tarefa à lista!')
tarefas[2] = prompt('Adicione uma terceira tarefa à lista!')

tarefas.splice(1, 1)

tarefas.push('ligar para o médico')

console.log(tarefas)