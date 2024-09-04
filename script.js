var lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let soma = 0;
let media = 0;
let i = 0;

for(lista.length < 11; i < 10; i++) {
    soma = soma + lista[i];
    media = soma / lista.length;
    if(lista[i] > 10) {
        console.log(i);
    }
}

console.log(soma);
console.log(media);
