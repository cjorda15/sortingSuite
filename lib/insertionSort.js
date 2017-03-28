let insertionSort =arr =>{
  if (!arr.length) {
    return arr
  }
  arr.forEach((val, i) =>{
    if (typeof val === typeof "") {
      val = val.charCodeAt()-1000
      arr[i]= val
    }

    for (var j=i-1; j > -1 & arr[j] > val; j--) {
      arr[j+1] = arr[j];
    }

    arr[j+1] = val;
  })

  return arr.map(i=>i<0?(String.fromCharCode(i+1000)):i)
}

module.exports= insertionSort
