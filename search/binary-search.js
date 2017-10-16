  /*
   * https://en.wikipedia.org/wiki/Binary_search_algorithm
   */

var binarySearch
  , test

test = function (fn) {
  var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  console.log(fn(arr, 5) === 4)
  console.log(fn(arr, 0) === -1)

  list = [1]
  console.log(fn(arr, 1) === 0)

  list = [1,2]
  console.log(fn(arr, 2) === 1)
}


binarySearch = function (arr, item) {
  var left = 0
  , right = arr.length - 1
  , pivot

  while (left <= right) {
    pivot = Math.floor((left + right) / 2)
    if (arr[pivot] === item) {
      return pivot
    }
    else if (arr[pivot] < item) {
      left = pivot + 1
    } else {
      right = pivot - 1
    }
  }
  return -1
}

test(binarySearch)

