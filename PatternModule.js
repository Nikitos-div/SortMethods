import {bubleSort} from './BubbleSort'
import {insertionSort} from './InsertionSort'
import {mergeSortMethod} from './MergeSort'
import {selectionSort} from './SelectionSort'
import {quickSort} from './QuickSort'

const module = () => {
    return {
      buble: bubleSort,
      insertion: insertionSort,
      merge: mergeSortMethod,
      selection:selectionSort,
      quick: quickSort
    }
}