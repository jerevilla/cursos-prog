let persona1 = {
    nombre: 'Jairo',
    edad: 32,
    estatura: 1.70
}

let persona2 = {
    nombre: 'Marita',
    edad: 28,
    estatura: 1.59
}

let persona3 = {
    nombre: 'Jorge',
    edad: 18,
    estatura: 1.65
}

let personas = [persona1,persona2,persona3]

console.log(personas);

for (let i = 0; i < personas.length; i++) {
        let persona = personas[i];
        console.log(`${persona.nombre} -- ${persona.edad}`);            
}
