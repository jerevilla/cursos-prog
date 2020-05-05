let numeros = [1, 6, 8, 4, 2, 7, 10, 3, 5, 20];
let mayor = 0;

for (let i = 0; i < numeros.length; i++) {
    /*if (mayor < numeros[i]){
        mayor = numeros[i]
    }*/
    mayor = mayor < numeros[i] ? numeros[i] : mayor;
}

console.log('El número mayor es ' + mayor);