  /*
   * https://en.wikipedia.org/wiki/Merge_sort
   */

var mergeSort
  , test

test = function (fn) {
  var before = [4, 5, 1, 3, 66, 2]
    , expect = before.slice().sort(function(x,y) {return x > y})
  console.log(fn(before).toString() == expect.toString())
}

mergeSort = function(arr) {
  var step = 1

  function merge(arr, step, index) {
    var leftPart = arr.slice(index, index + step)
      , rightPart = arr.slice(index + step, index + step * 2)
      , result = []

      while(leftPart.length > 0 && rightPart.length > 0) {
        if (leftPart[0] < rightPart[0]) {
          result.push(leftPart.shift())
        } else {
          result.push(rightPart.shift())
        }
      }
      
      return result.concat(leftPart, rightPart)
  }

  while (step < arr.length) {
    for (var i = 0, len = arr.length; i < len; i =  i + step * 2) {
        arr.splice.bind(arr, i, step * 2).apply(arr, merge(arr, step, i))
    }
    step = step * 2
  }

  return arr
}

test(mergeSort)
