//Count the number of elements in scores that are 100 or above.

let scores = [96, 47, 113, 89, 100, 102];

let filter = scores.filter(number => number >= 100);

console.log(filter);

let hundreds = [];

function checkFor(array) {
  for (index = 0; index < array.length; index++) {
    let number = array[index];
    if (number >= 100) {
      console.log(number)
    }
  }
}

checkFor(scores);