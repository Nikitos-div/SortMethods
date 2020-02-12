var TEST = [1, 2, 10, 0 ,4, 2, 90, 100, 78 , 69]

export const bubbleSort = (arr) => {
  let l = arr.length
  for (let i = 0 ; i < l; i++ ) {
	  for (let j = l-1 ; j >= i + 1; j--) {
		  if ( arr[j] < arr[j-1]) {
			  let swap = arr[j]
			  arr[j] = arr[j-1]
			  arr[j-1] = swap
		  }
	  }
  }
  return arr 
}

console.log(bubbleSort(TEST))