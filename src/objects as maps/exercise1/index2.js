const phrase = "No hay bien que por mal no venga";
const counters = {};
/**
 * Devuelve el número de veces que aparece una letra dada
 * @param {string} letter - Letra a buscar
 * @param {array} countersObject - Array donde buscar
 * @returns {number}
 */
function countLetter(letter, countersObject) {
    let contador = 0;
    for (let i = 0; i < countersObject.length; i++) {
        if (countersObject[i] == letter) {
            contador++;
        }
    }
    return contador;
}

const frase = [];
for (letter of phrase) {

    frase.push(letter);
    countLetter(letter, counters)
}

console.log(frase);
console.log(countLetter(" ", frase));
console.log(counters)