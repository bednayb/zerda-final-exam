// Create a function that takes an array of integers and retunrs the biggest from each of its second elements like: [1, 3, 8, 6, 7, 4] would return 6

var exerciseArray = [1, 3, 8, 6, 7, 4];

function biggestSecElement(array){
  // SELECT EVERY SECOND ELEMENTS
  var everySecondElement = [];
  var index = 0;
  for(let i = 0; i < array.length; i++ ){
    if(i % 2 !== 0){
      everySecondElement[index] = array[i];
      index += 1;
    }
  }
  // FIND THE BIGGEST ONE
  var biggest = everySecondElement[0];
  for( let i = 0; i < everySecondElement.length; i++){
    if(everySecondElement[i] > biggest){
      biggest = everySecondElement[i]
    }
  }
  return biggest
}

var result = biggestSecElement(exerciseArray);
console.log(result);
