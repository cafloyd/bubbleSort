// let counter = 0
// let returnedArr = []

function bubbleSort(array){

  for(let i = 0; i < array.length - 1; i++){
    let leftIdx = i
    let rightIdx = i + 1
    if (array[leftIdx] > array[rightIdx]){
      let tempLeftVal = array[leftIdx]
      array[leftIdx] = array[rightIdx]
      array[rightIdx] = tempLeftVal
    }
  }
  let arrayToSort = array.slice(0, array.length-2)
  if (!array[array.length - 1]) {
    return []
  }
  let sorted = array[array.length - 1]
  console.log('', sorted)
  if (arrayToSort.length <= 1){
    return [...arrayToSort, sorted]
  }
  return [...bubbleSort(arrayToSort), sorted]


  // if (array[array.length-1]){
  //   returnedArr.unshift(array[array.length-1])
  // }
  // if (arrayToSort.length <= 1){
  //   console.log(returnedArr)
  //   return returnedArr
  // }
  // return bubbleSort(arrayToSort)
}



// passing specs using additional argument
// function bubbleSort(array, arrayLength = array.length){
//   console.log(arrayLength)
//   if (arrayLength <= 1) {
//     return array
//   }
//   for(let i = 0; i < arrayLength; i++){
//     let leftIdx = i
//     let rightIdx = i + 1
//     if (array[leftIdx] > array[rightIdx]){
//       let tempLeftVal = array[leftIdx]
//       array[leftIdx] = array[rightIdx]
//       array[rightIdx] = tempLeftVal
//     }
//   }

//   return bubbleSort(array, arrayLength - 1)
// }
