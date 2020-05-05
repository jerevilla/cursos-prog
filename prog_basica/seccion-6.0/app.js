function describirPersona(p){
    console.log(`${ p.nombre } tiene ${ p.edad } de edad y mide ${ p.estatura } mts`);
}

let persona = {
    nombre: 'Jairo',
    edad: 32,
    estatura: 1.70
}

describirPersona(persona);
