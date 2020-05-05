function filtrarPorLetra( arr , letra ){
    let nuevoArr = [];

    for (let i = 0; i < arr.length; i++) {

        let heroe = arr[i];
        if (heroe[0] === letra) {
            nuevoArr.push(heroe);
        }
        
    }
    return nuevoArr;
}

let heroes = ['Doom', 'Dr. Strange', 'Hulk', 'She Hulk', 'Spiderman', 'Captain Marvel'];
let heroesCon = filtrarPorLetra( heroes, 'S');
console.log( heroesCon ); // She Hulk, Spiderman