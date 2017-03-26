let bubbleSort=arr=>{arr.forEach(()=>{arr.forEach((x,i)=>{
    let swap = arr[i+1]
    arr[i]>arr[i+1]? (arr[i+1]=arr[i],arr[i]= swap):null
   })
  })
  return arr
}



module.exports = bubbleSort
