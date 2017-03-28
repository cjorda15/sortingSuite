
// If the list is of length 0 or 1, then it is already sorted. Otherwise:
// Divide the unsorted list into two lists of about half the size.
// Sort each sublist recursively by re-applying merge sort to both sides
// Merge the two sublists back into one sorted list.


//break up the list until there is one for each container
//put the containers back two groups at a time, 1-1   1-1  2-2
//going along which is greater beween the two groups that are merging one
//at a time and putting that into a ready made array to be sorted recursively through
//until one list and return
//
// let mergeSort = arr=>{
//   if (!arr.length) {
//     return arr
//   }
//   let midpoint  = Math.floor(arr.length/2)
//   let leftside  = arr.slice(0, midpoint)
//   let rightside = arr.slice(midpoint, arr.length)

/// call each side with merge function and once each has run throught
//the function/ match each other too to be sorted.
//sorting process will compare the smallest value on the already
//sorted list with the other array that it is being compared
//with


//break everything down after splittin the list in half and recombine sorted
//sort by checking the smallest value between the two list and put them
//into the new next array

///for each side that has popped up the value that is smaller
// go up the counter for the other array that is being compared

//

//if value is the same, pop up both one at a time

//recurion is a plus!!!!!

///  return  merge(leftside,rightside)  RECURsion!!!!
  ////////////////// merge(merge(leftside) +merge(rightside)

//have to have something to check if the arrays are empty and move on..
//if one array that is being compared to another array is empty,
//push rest of array into the next array because they are
//already the biggest and sorted

//

// module.exports = mergeSort
