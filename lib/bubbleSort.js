let bubbleSort = arr=>{

  if (arr.length<1) {
    return arr
  }

  let counter = arr.length

  for (let i=0;i<arr.length;i++) {

    for (let j =0;j<counter;j++) {

      typeof arr[j] === typeof ""? arr[j] = arr[j].charCodeAt()-1000:null

      let swap = arr[j+1]

      arr[j]>arr[j+1]?(arr[j+1]=arr[j], arr[j]=swap):null
    }
    counter--
  }

  return arr.map(i=>i<-850?(String.fromCharCode(i+1000)):i)
}

module.exports = bubbleSort
