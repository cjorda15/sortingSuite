
let insertionSort = arr => {
  if (!arr.length) {
    return arr
  }

  for (let i = 1; i < arr.length; i++) {
    let current = arr[i]


    for (let j = i - 1; arr[j] >= current; j--) {

      if (current < arr[j]) {
        let swap = arr[j]

        arr[j] = current
        arr[j + 1] = swap
      }
    }
  }
  return arr
}



module.exports= insertionSort
