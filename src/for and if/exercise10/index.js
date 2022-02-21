let numbers = [2, 1, 4, 5, 6, 3, 7, 8, 1, 4, 6, 8, 1, 5, 7, 8, 3]

// Put your code here

for (let i = 0; i < numbers.length; i++) {
    for (let j = i; j < numbers.length; j++) {
        if (numbers[i] > numbers[j]) {
            let temporal = null;
            temporal = numbers[i];
            numbers[i] = numbers[j];
            numbers[j] = temporal;
        }
    }

}

console.log(numbers);