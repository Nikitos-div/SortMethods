var TEST = [68, 53, 23, 24, 7, 2, -2, 46, 8, 5, 4]


// const partition = (arr, first, last) => {
//     let x = arr[last]
//     let i = first - 1
//     for (let j = first; j < last - 1; j++) {
//         if (arr[j] <= x) {
//             i = i + 1
//             let swap1 = arr[j]
//             arr[j] = arr[i]
//             arr[i] = swap1
//         }
//     }
//     let swap = arr[i + 1]
//     arr[i + 1] = arr[last]
//     arr[last] = swap
//     return i + 1
// }
// const quickSort = (arr, first, last) => {
//     if (first < last) {
//         let q = partition(arr, first, last)
//         quickSort(arr, first, q - 1)
//         quickSort(arr, q + 1, last)
//     }
//     return arr
// }

// console.log(quickSort(TEST, 0, TEST.length))

const quickSort = (arr) => {
  if (arr.length < 2) {
      return arr
  }
  const delimeter = arr.filter(el => el === arr[0])
  const greatPart = arr.filter(el => el < arr[0] )
  const lessPart = arr.filter(el => el > arr[0])
  return [...quickSort(lessPart), ...delimeter, ...quickSort(greatPart)]
}
console.log(quickSort(TEST))
// result 5 , 1, 0 , -1 