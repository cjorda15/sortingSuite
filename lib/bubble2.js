function bubble(arr) {
  var grr=[]
  let lengthy = arr.length

  arr.forEach(i=>{
    if (typeof arr[i] === typeof "") {
    arr[i] = grr[1].charCodeAt()-1000
    arr[i]= arr[i]
    }
  })

  for (let i=0;i<lengthy;i++) {



    grr.push(...arr.splice(arr.indexOf(Math.min(...arr)), 1))

  }
  return grr.map(i=>i<-850?(String.fromCharCode(i+1000)):i)
}

module.exports = bubble
