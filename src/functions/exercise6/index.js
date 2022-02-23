const numbers = [11, 9, 13, 12, 1, 2, 5]

//Intercambiar posición
function swap(numberA, numberB, array) {
    const number = array[numberA];
    array[numberA] = array[numberB];
    array[numberB] = number;
}
//Devuelve el menor valor
function minorInRange(index1, index2, array) {
    let valorMenor = array[index1];
    if (array[index1] > array[index2]) {
        valorMenor = array[index2];
    }
    return valorMenor;
}

//Ordenar rangos
function orderRange(index1, index2, array) {
    let menorIndice = index1;

    if (menorIndice > index2) {
        menorIndice = index2;
    }
    for (let i = menorIndice; i < index2; i++) {
        for (let j = menorIndice; j < index2; j++) {

            if (array[i] < array[j]) {
                swap(i, j, array);
            }
        }
    }
    return array;
}


console.log(orderRange(2, 4, numbers));