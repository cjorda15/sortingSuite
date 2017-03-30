let insertionSort = arr =>{
  if (!arr.length) {
    return arr
  }
  arr.forEach((current, i) =>{
    if (typeof current === typeof "") {
      current = current.charCodeAt()-1000
      arr[i]= current
    }

    for (var next=i-1; next > -1 && arr[next] > current; next--) {
      let swap = arr[current]

      arr[next+1] = arr[next];
      arr[next]=swap
    }

    arr[next+1] = current;
  })

  return arr.map(i=>i<0?(String.fromCharCode(i+1000)):i)
}


///refactor for one loop


module.exports= insertionSort
