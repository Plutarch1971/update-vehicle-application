// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';
// TODO: The Motorbike class should extend the Vehicle class
class Motorbike extends Vehicle {
    // TODO: The types should be as follows: vin (string), color (string), make (string), model (string), year (number), weight (number), topSpeed (number), wheels (Wheel[])
    // TODO: Create a constructor that accepts the properties of the Motorbike class
    constructor(vin, color, make, model, year, weight, topSpeed, wheels) {
        // TODO: The constructor should initialize the properties of the Motorbike class
        super();
        this.vin = vin;
        this.color = color;
        this.make = make;
        this.model = model;
        this.year = year;
        this.weight = weight;
        this.topSpeed = topSpeed;
        // TODO: The constructor should check if the wheels array has 2 elements and create 2 new default Wheel objects if it does not
        if (wheels.length !== 2) {
            this.wheels = [
                new Wheel(20, 'Brand5'),
                new Wheel(20, 'Brand6')
            ];
        }
        else {
            this.wheels = wheels;
        }
    }
    // TODO: Implement the wheelie method
    wheelie() {
        console.log(`Motorbike ${this.make} ${this.model} is doing a wheelie!`);
    }
    // TODO: The method should log the message "Motorbike [make] [model] is doing a wheelie!"
    // TODO: Override the printDetails method from the Vehicle class
    printDetails() {
        super.printDetails();
        console.log(`VIN: ${this.vin}`);
        console.log(`Make: ${this.make}`);
        console.log(`Model: ${this.model}`);
        console.log(`Year: ${this.year}`);
        console.log(`Weight: ${this.weight} lbs`);
        console.log(`Top Speed: ${this.topSpeed} mph`);
        console.log(`Color: ${this.color}`);
        console.log('Wheels:');
        this.wheels.forEach((wheel, index) => {
            console.log(`Wheel ${index + 1}: ${wheel.getDiameter} inches, ${wheel.getTireBrand} tire`);
        });
    }
}
// Export the Motorbike class as the default export
export default Motorbike;
