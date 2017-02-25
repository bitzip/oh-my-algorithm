  /*
   * | 时间复杂度 | 平均     | 最坏   |
   * |------------|----------|--------|
   * | 快速排序   | O(nlogn) | O(n^2) |
   *
   * 使用 partition, swap 拆分不同的 procedure，既使过程分块容易实现，同时通用术语函数命名也方便理解。
   * 另外，分区方法有很多种，以下算法都是从两边往中间顺序分区，也可以从左往右分区。
   * https://en.wikipedia.org/wiki/Quicksort
   */

var quickSort
  , partition
  , swap
  , test

test = function (fn) {
  var before = [4, 5, 1, 3, 66, 2]
    , expect = before.slice().sort(function(x,y) {return x > y})
  console.log(fn(before).toString() == expect.toString())
}

swap = function (items, from, to) {
  var tmp = items[from]
  items[from] = items[to]
  items[to] = tmp
  return items
}

// no swap in partition
partition = function (items, left, right) {
  var pivot = items[left]

  while (left < right) {
    while (pivot <= items[right] && left < right) {
      right--
    }
    if (left < right) {
      items[left] = items[right]
      left++
    }

    while (items[left] < pivot && left < right) {
      left++
    }
    if (left < right) {
      items[right] = items[left]
      right--
    }
  }
  items[left] = pivot
  return left
}

quickSort = function (items, left, right) {
  var index
  left = left || 0
  right = right || items.length - 1
  index = partition(items, left, right)

  if (left < index - 1) {
    quickSort(items, left, index - 1)
  }
  if (index + 1 < right) {
    quickSort(items, index + 1, right)
  }
  
  return items
}

test(quickSort)


// swap in partition
partition = function (items, left, right) {
  var pivot = items[left]

  while (left <= right) {
    while (items[left] < pivot) {
      left++
    }
    while (pivot < items[right]) {
      right--
    }
    if (left <= right) {
      swap(items, left, right)
      left++
      right--
    }
  }
  return left
}

quickSort = function (items, left, right) {
  var index
  left = left || 0
  right = right || items.length - 1
  index = partition(items, left, right)

  if (left < index - 1) {
    quickSort(items, left, index - 1)
  }
  if (index < right) {
    quickSort(items, index, right)
  }
  return items
}

test(quickSort)
