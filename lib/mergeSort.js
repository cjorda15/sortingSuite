function split(arr) {
  if (arr.length===1) {
    return arr
  }

  function merge(left, right) {
    var sorted = []

    while (left.length && right.length ) {
      if (left[0]>= right[0]) {
        sorted.push(right.shift())
      }
      else {
        sorted.push(left.shift())
      }
    }
    while (left.length) {
      sorted.push(left.shift())

    }
    while (right.length) {
      sorted.push(right.shift())

    }
    return sorted
  }
  let mid = arr.length/2
  let left = arr.slice(0, mid)
  let right = arr.slice(mid, arr.length)

  return merge(split(left), split(right))
}

module.exports = split
