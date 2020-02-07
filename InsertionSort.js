//insertionSort
var TEST = [1, 0, 20, 5, 7, 21, 68, 98]

const insertionSort = (array) => {
    var counter = 0;
    const l = array.length
    for (let i = 0; i <= l; i++) {
        for (let j = i; j > 0 && array[j - 1] > array[j]; j--) {
            counter = counter + 1;
            let swap = array[j - 1]
            array[j - 1] = array[j]
            array[j] = swap;
        }
    }
    return array
}

console.log(insertionSort(TEST))

