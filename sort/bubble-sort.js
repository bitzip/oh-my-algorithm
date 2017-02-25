  /*
   * | 时间复杂度 | 平均   | 最坏   |
   * |------------|--------|--------|
   * | 简单冒泡   | O(n^2) | O(n^2) |
   *
   * 冒泡情况可以右以下情况
   * * 冒泡顺序可以是从左到右，或右到左
   * * 冒泡可以选择大元素或小元素
   * * 冒泡结果可以是逆序或顺序
   *
   * https://en.wikipedia.org/wiki/Bubble_sort
   */


var bubbleSort
  , test

test = function (fn) {
  var before = [4, 5, 1, 3, 2]
    , expect = before.slice().sort(function(x,y) {return x > y})
  console.log(fn(before).toString() == expect.toString())
}


// 使用 while 做简单冒泡
bubbleSort = function (items) {
  var after = items.slice()
    , i = j = after.length
    , tmp

  i--
  while (i--) {
    while(j-- && j) {
      if (after[j] < after[j - 1]) {
        tmp = after[j]
        after[j] = after[j - 1]
        after[j - 1] = tmp
      }
    }
    j = after.length
  }

  return after
}
test(bubbleSort)


// 使用 while 做简单冒泡
// 优化版本
bubbleSort = function (items) {
  var after = items.slice()
    , i = j = after.length
    , tmp

  i--
  while (i--) {
    while(j-- && j && (j > after.length - i - 2)) {
      if (after[j] < after[j - 1]) {
        tmp = after[j]
        after[j] = after[j - 1]
        after[j - 1] = tmp
      }
    }
    j = after.length
  }

  return after
}

test(bubbleSort)


// 使用 for 做简单冒泡
bubbleSort = function (items) {
  var after = items.slice()
    , i = j = after.length
    , tmp

  for (i = 0; i < after.length; i++) {
    for (j = 0; j < after.length; j++) {
      if (after[j] > after[j + 1]) {
        tmp = after[j]
        after[j] = after[j + 1]
        after[j + 1] = tmp
      }
    }
  }

  return after
}

test(bubbleSort)


// 使用 for 做简单冒泡
// 优化版本
bubbleSort = function (items) {
  var after = items.slice()
    , i = j = after.length
    , tmp

  for (i = 0; i < after.length - 1; i++) {
    for (j = 0; j < after.length - i - 1; j++) {
      if (after[j] > after[j + 1]) {
        tmp = after[j]
        after[j] = after[j + 1]
        after[j + 1] = tmp
      }
    }
  }

  return after
}

test(bubbleSort)
