class Ninja {
    constructor(nombre){
        this.nombre = nombre;
        this.salud = 10;
        this.velocidad = 3;
        this.fuerza = 3;

    }
    sayName(){
        console.log(`Nombre: ${this.nombre}`);
    }
    showStats(){
        console.log(`Nombre ${this.nombre}, Fuerza ${this.fuerza}, Velocidad ${this.velocidad}, salud ${this.salud}`);
        console.table(this);
    }
    drinkSake(){
        this.salud += 10;
    }

}

const ninj = new Ninja("leo");
ninj.showStats();
ninj.sayName();
ninj.drinkSake();

