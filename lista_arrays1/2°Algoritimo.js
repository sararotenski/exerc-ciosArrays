/*Desenvolva um aplicativo de lista de compras automatizada. Crie um array vazio chamado 'listaCompras'. 
Solicite ao usuário para adicionar três itens à lista. Verifique se o último item adicionado é "leite". 
Se não for, adicione "leite" ao final da lista. Imprima a lista de compras no final.*/

let listaCompras = []

listaCompras[0] = prompt('Adicione um ítem à lista de compras!')
listaCompras[1] = prompt('Adicione mais um ítem à lista de compras!')
listaCompras[2] = prompt('Adicione um terceiro ítem à lista de compras!')

if (listaCompras[2] == 'leite') {
    console.log(listaCompras)
}

else {
    listaCompras[3] = 'leite'
    console.log(listaCompras)
}