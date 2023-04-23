const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function calculaMedia(notasDaSala){
   const somaDasNotas = notasDaSala.reduce((acumulador,nota)=>{
    return acumulador + nota
    },)

    const media = somaDasNotas / notasDaSala.length
    return media
}

console.log(`a media da sala de JavaScript foi ${calculaMedia(salaJS)}`)
console.log(`a media da sala de Java foi ${calculaMedia(salaJava)}`)
console.log(`a media da sala de Pytho foi ${calculaMedia(salaPython)}`)