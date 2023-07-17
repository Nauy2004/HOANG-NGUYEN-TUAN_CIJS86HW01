

let input = [1, 2, 3, 5, 6, 4, 2, 1, 6, 3, 5, 3];


function removeDuplicateElement(arr) {
    var newArr = []
    for (var i = 0; i < arr.length; i++) {
      if (newArr.indexOf(arr[i]) === -1) {
        newArr.push(arr[i])
      }
    }
    return newArr;
  }

function numberOfLanesAppear(a,arr){
    let count = 0;
    for (let index = 0; index < arr.length; index++) {
        if(a === arr[index]){
            count += 1;
        }     
    }
    return count;
}
function maxElement(array){
    let max =  array[0];
    let max_index= 0;  
    for (let i = 0; i < array.length; ++i) {
        if (max < array[i]) {
            max = array[i];
            max_index =i;
        }
    }
    let arr = [max,max_index]; 
    return arr;
}

function listMaxCountArr(arr) {
    let newArr = [...arr];
    newArr.sort();
    let maxArr = [];
    for (let index = 0; index < newArr.length; index++) {
        if (newArr[index] !== newArr[index+1] ) {
           maxArr.push(numberOfLanesAppear(newArr[index],newArr))
        }
    }
    return maxArr;
}

function obj(arr) {
    let newArr = removeDuplicateElement(arr)
    let maxCount = maxElement(listMaxCountArr(arr));
    let eleMaxCount = {
        value : newArr[maxCount[1]],
        count : maxCount[0],
    }
    return eleMaxCount;
}

console.log(obj(input))
