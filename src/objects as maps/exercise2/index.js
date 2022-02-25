const chrono = [
    {
        name: "Ana",
        time: 102.01
    },
    {
        name: "Pablo",
        time: 105.82
    },
    {
        name: "Marco",
        time: 100.4
    },
    {
        name: "Luisa",
        time: 103.39
    },
    {
        name: "Pedro",
        time: 109.09
    },
]

console.log(chrono.length);

function sort(objeto){
    for (let i = 0; i < objeto.length; i++) {
        for (let j = i + 1; j < objeto.length; j++) {
            if (objeto[i] > objeto[j]) {
                let temporal = null;
                temporal = objeto.time[i];
                objeto.time[i] = objeto.time[j];
                objeto.time[j] = temporal;
            }
        }
    
    }
}
sort(chrono.time);


sort(chrono.length);

console.log(JSON.stringify(chrono))