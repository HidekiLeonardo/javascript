let num = [5, 8, 2, 9, 3]
num.push(1) //Coloca um valor na ultima casa de um vetor
num.sort() //Coloca em ordem crescente
console.log(num)
console.log(`Nosso vetor tem ${num.length} posições`) //Mostra quantas casas tem o vetor
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(8) //Busca a casa em que o número 8 está, caso der -1 quer dizer que não há o número no vetor
if (pos == -1){
    console.log('Valor não encontrado!')
}
else{
    console.log(`O valor 8 está na posição ${pos}.`)
}
