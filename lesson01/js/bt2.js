let input = [1, 2, 3, 5, 4, 2, 6, 4];
function removeDuplicateElement(arr) {
    var newArr = []
    for (var i = 0; i < arr.length; i++) {
      if (newArr.indexOf(arr[i]) === -1) {
        newArr.push(arr[i])
      }
    }
    return newArr;
  }

console.log(removeDuplicateElement(input))
