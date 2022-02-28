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

function sort(objeto) {
    for (runner of objeto) {
        for (runner2 of objeto) {
            if (runner.time > runner2.time) {
                let temporal = runner.time;
                runner.time = runner2.time;
                runner2.time = temporal;

                let temporal2 = runner.name;
                runner.name = runner2.name;
                runner2.name = temporal2;
            }
        }
    }
    console.log(objeto);
}


sort(chrono);

console.log(JSON.stringify(chrono))