/*
Carlos está definindo suas metas para a semana. Crie um array inicialmente vazio chamado metasSemana.
Adicione três metas à lista. Verifique se a segunda meta é "exercício físico". Se não for, 
modifique-a para "praticar esportes". Imprima a lista de metas semanais no final.

Dicas: Empurrar em inglês - If
*/

let metasSemana = []

metasSemana[0] = 'estudar'
metasSemana[1] = 'seguir dieta'
metasSemana[2] = 'beber água'

if (metasSemana[1] == 'exercício físico') {
    console.log(metasSemana)
}

else {
    metasSemana[1] = 'praticar esportes'
    console.log(metasSemana)
}