const numeros = [4, 2, 7, 1, 9];
numeros.sort(); // Ordena em ordem crescente: [1, 2, 4, 7, 9]
numeros.sort((a, b) => b - a); // Ordena em ordem decrescente: [9, 7, 4, 2, 1]

const A = numeros.sort()

console.log(A)