class Carro {

    constructor(marca, tipo, puertas) {

        this.marca = marca;
        this.tipo = tipo;
        this.puertas = puertas;

        this.creadoEn = 'Hoy';
        this.encendido = false;
        this.gasolina = 100;
    }

    encenderCarro() {
        if (this.encendido) {
            console.error('El carro ya estaba encendido... se dañó el motor');
        } else {
            this.encendido = true;
            console.log('El carro está encendido');
        }
        return this;
    }

    realizarViaje(consumo) {

        if (!this.encendido) return console.log('Carro apagado');
        if (consumo > this.gasolina) return console.log('No puede realizar el viaje: gasolina '+ this.gasolina);

        this.gasolina = this.gasolina - consumo;
        return 'Le queda ' + this.gasolina;
    }

}

let carro = new Carro('Mazda', 'Sedan', 2);
console.log(carro);