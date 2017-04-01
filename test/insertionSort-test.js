const assert       = require('chai').assert
var insertionSort  = require('../lib/insertionSort.js')
var random         = require('./helpers/random.js')

describe("it should reorder the array ", ()=>{

  it('with numbers to ascending order', ()=>{
    let arr = [9, 8, 2, 1, 3, 7]

    insertionSort(arr)
    assert.deepEqual(arr, [1, 2, 3, 7, 8, 9])
  })

  it('with letters to alphabetical order', ()=>{
    let arr = ["e", "f", "a", "d", "c", "b"]


    assert.deepEqual(insertionSort(arr)
, ['a', "b", "c", "d", "e", "f"])
  })


  it('with a longer array of numbers and make it ascending order', ()=>{
    let arr = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]

    insertionSort(arr)

    assert.deepEqual(arr, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
  })

  it('should take a array with indexes with similar digits but still sort it correctly', ()=>{
    let arr = [1, 11, 22, 2, 3, 33]

    insertionSort(arr)
    assert.deepEqual(arr, [1, 2, 3, 11, 22, 33])
  })

  it("shouldn't break if it only contains one index", ()=>{
    let arr=[1]

    insertionSort(arr)
    assert.deepEqual(arr, [1])
  })

  // it("should take both numbers and letters and sort them with letters in front", ()=>{
  //   let arr =["c", 3, "b", 2, 1, "a"]
  //
  //   assert.deepEqual(insertionSort(arr), ["a", "b", "c", 1, 2, 3])
  // })

  it("should take a small random array and order it properly", () =>{
    let arr = random(50)

    assert.notEqual(arr[arr.length-1], Math.max(...arr) )
    assert.notEqual(arr[0], Math.min(...arr) )

    insertionSort(arr)

    assert.deepEqual(arr[arr.length-1], Math.max(...arr) )
    assert.deepEqual(arr[0], Math.min(...arr) )

  })

  it("should take a large random array and order it properly", () =>{
    let arr = random(1000)


    assert.notEqual(arr[arr.length-1], Math.max(...arr) )
    assert.notEqual(arr[0], Math.min(...arr) )

    insertionSort(arr)

    assert.deepEqual(arr[arr.length-1], Math.max(...arr) )
    assert.deepEqual(arr[0], Math.min(...arr) )
  })

  it("should take a very large random array and order it properly", () =>{
    let arr = random(10000)

    assert.notEqual(arr[arr.length-1], Math.max(...arr) )
    assert.notEqual(arr[0], Math.min(...arr) )

    insertionSort(arr)

    assert.deepEqual(arr[arr.length-1], Math.max(...arr) )
    assert.deepEqual(arr[0], Math.min(...arr) )
  })

})
