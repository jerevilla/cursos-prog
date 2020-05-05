/**
 * Crear una función que me permita determinar
 * la calificación de 3 alumnos
 * uno con nota 100, otro con nota 80
 * y el último con nota 59
 */



function mostrarNota(nota) {
    let notaLetra = '';
    if (nota >= 90) {
        notaLetra = 'A';
    } else if (nota >= 80) {
        notaLetra = 'B';
    } else if (nota >= 70) {
        notaLetra = 'C';
    } else if (nota >= 60) {
        notaLetra = 'D';
    } else {
        notaLetra = 'F';
    }

    console.log(nota + ' es igual a ' + notaLetra);
}

mostrarNota(100);
mostrarNota(80);
mostrarNota(59);