//function sleep(name) {
  //  console.log(name + " sleeps for 8 hours")
//}
var animalPopulation = 0;
function run() {
    var tigger = new Tiger("Tigger");
    tigger.eat("meat");
    var pooh = new Bear("Pooh");
    pooh.eat("fish");
    pooh.eat("meat");
    var unicorn = new Unicorn("Rarity");
    unicorn.eat("marshmallows");
    var giraffe = new Giraffe("Gemma");
    giraffe.eat("meat");
    giraffe.eat("leaves");
    var bee = new Bee("stinger");
    bee.eat("icecream");
    bee.eat("pollen");
    var zoo = new Zookeeper("zobot");
    zoo.feedAnimals([Tiger,Unicorn],"meat");
}
//function eat(name,food){
  //  console.log(name +" eats " + food);
    //food==favoriteFood ? console.log("Yum!!" + name + " wants more " + food) : sleep(name);
//}
class Animal {
    constructor(name,food){
        this.name = name;
        this.favoriteFood=food;
        animalPopulation++;
    }
    sleep() {
        console.log(this.name + " sleeps for 8 hours");
    }
    eat(food) {
        console.log(this.name +" eats " + food);
        food==this.favoriteFood ? console.log("Yum!!" + this.name + " wants more " + food) : this.sleep();
    }
    static getPopulation() {
        return animalPopulation;
    }
}

class Tiger extends Animal{

    constructor(name) {
        super(name, "meat");
        this.name = name;
        this.favoriteFood = "meat";
    }

    sleep() {
        console.log(this.name + " sleeps for 8 hours");
    }

    eat(food) {
        console.log(this.name +" eats " + food);
        food==this.favoriteFood ? console.log("Yum!!" + this.name + " wants more " + food) : this.sleep();
    }
}
class Bear extends Animal{

    constructor(name) {
        super(name,"fish    ");
        this.name = name;
        this.favoriteFood = "fish";
    }

    sleep() {
        console.log(this.name + " hibernates for 4 months");
    }

    eat(food) {
        console.log(this.name +" eats " + food);
        food==this.favoriteFood ? console.log("Yum!!" + this.name + " wants more " + food) : this.sleep();
    }
}
class Unicorn extends Animal{
    constructor(name){
        super(name,"marshmallows");
        this.name = name;
        this.favfood = "marshmallows";
    }
        sleep(){
            console.log(this.name + " sleeps in a cloud" );
        }eat(food){
            console.log(this.name + " eats " + food);
        food == this.favfood ? console.log("Yum!!," + this.name + " wants more " + this.favfood) + this.sleep(): "";
    }
}
class Giraffe extends Animal{
    constructor(name){
        super(name, "leaves")
        this.name = name;
    }
    eat(food){
       food == "leaves" ? super.eat('leaves') + super.sleep() : console.log("YUCK!!!" + this.name + " will not eat " + food);
    }
}
class Bee extends Animal{
    constructor(name){
        super(name, "pollen");
        this.name = name;
    }
    sleep(){
        console.log(this.name + " never sleeps.");
    }
    eat(food){
        food == "pollen" ? super.eat('pollen') + this.sleep() : console.log("YUCK!!!" + this.name + " will not eat " + food);
    }
}
class Zookeeper{
    constructor(name){
        this.name = name;

    }
    feedAnimals(animals, food){
        console.log(this.name + " is feeding " + food + " to " + animals.length + " animals of " + animalPopulation +
        " total animals.");
    }
}
/*class Shape {

    constructor(name) {
        this.name = name;
        this.special = true;
    }

    sayName() {
        console.log('Hi, I am a ', this.name + '.');
    }

    sayHistory() {
        console.log("Shapes have a wonderful history.");
    }
}

class Polygon extends Shape{

    constructor(height, width) {
        super('Polygon');
        this.name = 'Polygon';
        this.height = height;
        this.width = width;
    }
    sayHistory() {
        console.log('"Polygon" is derived from the Greek polus (many) ' +
            'and gonia (angle).');
    }

}
*/

