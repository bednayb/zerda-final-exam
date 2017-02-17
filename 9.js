// Create a function that takes an array of integers and retunrs the biggest from each of its second elements like: [1, 3, 8, 6, 7, 4] would return 6

var exerciseArray = [1, 3, 8, 6, 7, 4];

function biggestSecElement(array){
  var everysec = [];
  var index = 0;
  for(let i = 0; i < array.length; i++ ){
    if(i % 2 !== 0){
      everysec[index] = array[i];
      index += 1;
    }
  }
  var biggest = everysec[0];
  for( let j = 0; j < everysec.length; j++){
    if(everysec[j] > biggest){
      biggest = everysec[j]
    }
  }
  return biggest
}

var result = biggestSecElement(exerciseArray);
console.log(result);
