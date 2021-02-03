/*We are given the following array of energy sources.
Remove 'fossil' from the array, then add 'geothermal' to the end of the array.*/

let energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];

energy.shift();
energy.splice(4, 0, 'geothermal');

console.log(energy);
