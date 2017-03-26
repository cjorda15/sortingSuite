let insertionSort =arr =>{
    arr.forEach((z,i) =>{
        for (var j=i-1; j > -1 &arr[j] > z; j--) {
            arr[j+1] = arr[j];
        }

        arr[j+1] = z;
    })

    return arr;
}



module.exports= insertionSort
