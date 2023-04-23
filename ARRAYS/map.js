const notas = [10, 9.5, 8, 7, 6]

const notasNova = notas.map((nota)=> {
    return nota + 1 >= 10 ? 10 : nota + 1 
})
console.log(notasNova)