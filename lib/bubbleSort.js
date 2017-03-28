let bubbleSort=arr=>{
  if (arr.length<1) {
    return arr
  }
  arr.forEach(()=>{arr.forEach((x, i)=>{
    if (typeof x === typeof "") {
  x = x.charCodeAt()-1000
    arr[i]=x
  }
  let swap = arr[i+1]

  arr[i]>arr[i+1]? (arr[i+1]=arr[i], arr[i]= swap):null
})
})


  return arr.map(i=>i<-850?(String.fromCharCode(i+1000)):i)
}


////for fun, try to use recurion or limit the length by 1 for each pass

//gotta use a for loop with a counter and pop the list
//instead of a for each
module.exports = bubbleSort
