  /*
   * https://en.wikipedia.org/wiki/Merge_sort
   */

var mergeSort
  , merge
  , test

test = function (fn) {
  var before = [4, 5, 1, 3, 66, 2]
    , expect = before.slice().sort(function(x,y) {return x > y})
  console.log(fn(before).toString() == expect.toString())
}

merge = function (left, right) {
  var ret = []

    while(left.length > 0 && right.length > 0) {
      if (left[0] < right[0]) {
        ret.push(left.shift())
      } else {
        ret.push(right.shift())
      }
    }
    return ret.concat(left, right)
}


mergeSort = function(arr) {
  if (arr.length < 2) {
    return arr
  }

  var middle = Math.floor(arr.length / 2)
  return merge(
    mergeSort(arr.slice(0, middle)),
    mergeSort(arr.slice(middle))
  )
}

test(mergeSort)

