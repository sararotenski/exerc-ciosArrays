//Você tem uma lista de tarefas [ "Lavar a louça", "Estudar", "Fazer compras"]. Adicione uma nova tarefa ao final da lista e depois remova a primeira tarefa, já que foi completada. Por fim, verifique se "Estudar" ainda está na lista. 

let listaTarefas = ['Lavar a louça', 'Estudar', 'Fazer compras']

listaTarefas.push('Treinar')

listaTarefas.shift()

let contem = listaTarefas.includes('Estudar')

console.log('Estudar está na lista: ', contem)
console.log(listaTarefas)