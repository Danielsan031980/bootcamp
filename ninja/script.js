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
class Sensei extends Ninja{
    constructor(nombre){
        super(nombre);
        this.sabiduria = 10; 
        this.salud = 200;
        this.velocidad = 10;
    }
    speakWisdom (){
        super.drinkSake();
        console.log(`// -> "Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses."`);
    }
}

const ninj = new Ninja("leo");
ninj.showStats();
ninj.sayName();
ninj.drinkSake();

const superSensei = new Sensei ("Master Splinter");

superSensei.speakWisdom();
superSensei.showStats();

