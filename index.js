// Write your classes here
class Tree {
  constructor( species ) {
    this.species = species
  }
 
  // get make() {
  //   return this._make
  // }
 
 static definition() {
    return 'A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves.'
  }
}
 
class Deciduous extends Tree {
  constructor( make , driveTrain ) {
    super( species )
    this._driveTrain = driveTrain
  }
 
  static definition() {
    return `${super.definition()} A car is a road vehicle, typically with four wheels, powered by an internal combustion engine and able to carry a small number of people.`
  }
}