var TEST = [1, 4, 0, 3, 6, 2, 0, -1, 10, 7]

const selectionSort = (arr) => {
	let l = arr.length
	for (let i = 0; i < l - 1; i++) {
		let min = i
		for (let j = i + 1; j < l; j++) {
			if (arr[j] < arr[min]) {
				min = j
			}
		}
		let swap = arr[i]
		arr[i] = arr[min]
		arr[min] = swap
	}
	return arr
}
console.log(selectionSort(TEST))