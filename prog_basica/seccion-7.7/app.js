function max(a,b,c){
    let mayor;
    if (a > b && a > c) {
        mayor = a;
    } else {
        if (b > c) {
            mayor = b;  
        } else {
            mayor = c;
        }
    }
    return mayor;
}

mayor = max(15,7,1);

console.log(mayor);