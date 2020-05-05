let numeros = [1, 6, 8, 4, 2, 7, 10, 3, 5];
let mayor = 0;

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i]%2 === 0) {
        console.log('El número ' + numeros[i] + ' es par');
    } else {
        console.log('El número ' + numeros[i] + ' es impar');
    }
}