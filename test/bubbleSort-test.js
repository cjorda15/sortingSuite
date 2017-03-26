const assert = require('chai').assert
var bubbleSort  = require('../lib/bubbleSort.js')


describe("it should reorder the array ", ()=>{

  it('with numbers to ascending order', ()=>{
    let arr = [9, 8, 2, 1, 3, 7]

    bubbleSort(arr)
    assert.deepEqual(arr, [1, 2, 3, 7, 8, 9])
  })

  it('with letters to alphabetical order', ()=>{
    let arr = ["e", "f", "a", "d", "c", "b"]

    bubbleSort(arr)


    assert.deepEqual(arr, ['a', "b", "c", "d", "e", "f"])
  })


  it('should take a longer array of numbers and make it ascending order', ()=>{
    let arr = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]

    bubbleSort(arr)

    assert.deepEqual(arr, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
  })

  it('should take a array with indexes with similar digits but still sort it correctly', ()=>{
    let arr = [1, 11, 22, 2, 3, 33]

    bubbleSort(arr)
    assert.deepEqual(arr, [1, 2, 3, 11, 22, 33])
  })

  it("shouldn't break if it only contains one index", ()=>{
    let arr=[1]

    bubbleSort(arr)
    assert.deepEqual(arr, [1])
  })

})
