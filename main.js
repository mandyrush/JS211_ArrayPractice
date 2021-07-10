let cars = [
  'Ford',
  'Mini Cooper',
  'Audi',
  'BMW'
];

let moreCars = [
  'Fiat',
  'Porsche',
  'Nissan',
  'Honda'
];

console.log('Length of cars array: ', cars.length);

let totalCars = cars.concat(moreCars);
console.log('Cars array and moreCars array concatenated: ', totalCars);

console.log('Index of Honda: ', totalCars.indexOf('Honda'));

console.log('Last Index of Ford: ', totalCars.lastIndexOf('Ford'));

let stringOfCars = totalCars.join();
console.log('Total Cars array to string: ', stringOfCars);

let carsFromString = stringOfCars.split(',');
console.log('Convert string of cars to array: ', carsFromString);

let carsInReverse = totalCars.reverse();
console.log('Total cars array in reverse: ', carsInReverse);

carsInReverse.sort();

console.log('Cars in reverse sorted alphabetically: ', carsInReverse);
console.log('Index of Audi: ', carsInReverse.indexOf('Audi'));

const pets = [
  'dog', 
  'cat', 
  'fish', 
  'rabbit', 
  'snake', 
  'lizard', 
  'bird'
]

let reptiles = pets.slice(4, 6);
console.log('Reptiles array: ', reptiles);

console.log('Pets array: ', pets);

let removedReptiles = pets.splice(4, 2, 'hamster');
console.log('Reptiles removed from pets array: ', removedReptiles);
console.log('Pets array without reptiles: ', pets);

let removedPet = pets.pop();
console.log('Remove last pet: ', removedPet);
console.log('Pets array: ', pets);

pets.push(removedPet);
console.log('Add removed pet back to pets array: ', pets);

console.log('Remove first item in pets array: ', pets.shift());

pets.unshift('turtle');
console.log('Added turtle as first item in pets array: ', pets);

const numbers = [23, 45, 0 , 2, 8, 44, 100, 1, 3, 91, 34];

const addTwo = (num, index, arr) => {
  return arr[index] = num + 2;
};

numbers.forEach(addTwo);

console.log('Numbers array after adding 2 to each item: ', numbers);

