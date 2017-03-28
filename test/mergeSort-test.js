const assert = require('chai').assert
var mergeSort  = require('../lib/mergeSort.js')
var random     = require('../lib/random.js')
var locus = require('locus')
describe("it should reorder the array ", ()=>{

  it('with numbers to ascending order', ()=>{
    let arr = [9, 8, 2, 1, 3, 7]

    assert.deepEqual(mergeSort(arr)
, [1, 2, 3, 7, 8, 9])
  })

  it('with letters to alphabetical order', ()=>{
    let arr = ["e", "f", "a", "d", "c", "b"]



    assert.deepEqual(mergeSort(arr)
, ['a', "b", "c", "d", "e", "f"])
  })


  it('should take a longer array of numbers and make it ascending order', ()=>{
    let arr = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]


    assert.deepEqual(mergeSort(arr), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
  })

  it('should take a array with indexes with similar digits but still sort it correctly', ()=>{
    let arr = [1, 11, 22, 2, 3, 33]

    assert.deepEqual(mergeSort(arr), [1, 2, 3, 11, 22, 33])
  })

  it("shouldn't break if it only contains one index", ()=>{
    let arr=[1]

    assert.deepEqual(mergeSort(arr), [1])
  })


  it("should take a small random array and order it properly", () =>{
    let arr = random(50)

    assert.notEqual(arr[arr.length-1], Math.max(...arr) )
    assert.notEqual(arr[0], Math.min(...arr) )

    let ray = mergeSort(arr)

    assert.deepEqual(ray[ray.length-1], Math.max(...ray) )
    assert.deepEqual(ray[0], Math.min(...ray) )

  })

  it("should take a large random array and order it properly", () =>{
    let arr = random(1000)


    assert.notEqual(arr[arr.length-1], Math.max(...arr) )
    assert.notEqual(arr[0], Math.min(...arr) )

    let ray = mergeSort(arr)

    assert.deepEqual(ray[ray.length-1], Math.max(...ray) )
    assert.deepEqual(ray[0], Math.min(...ray) )
  })

  it("should take a very large random array and order it properly", () =>{
    let arr = random(4000)

    assert.notEqual(arr[arr.length-1], Math.max(...arr) )
    assert.notEqual(arr[0], Math.min(...arr) )

    let ray = mergeSort(arr)

    assert.deepEqual(ray[ray.length-1], Math.max(...ray) )
    assert.deepEqual(ray[0], Math.min(...ray) )
  })

})
