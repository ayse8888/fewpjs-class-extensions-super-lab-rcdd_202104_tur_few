// Write your classes here
class Tree {
  constructor( species ) {
    this.species = species
  }
 
  get make() {
    return this._make
  }
 
 static definition() {
    return 'A vehicle is used for transporting people or goods, especially on land.'
  }
}
 
class Car extends Vehicle {
  constructor( make , driveTrain ) {
    super( make )
    this._driveTrain = driveTrain
  }
 
  static definition() {
    return `${super.definition()} A car is a road vehicle, typically with four wheels, powered by an internal combustion engine and able to carry a small number of people.`
  }
}