import {bubleSort} from './BubbleSort'
import {insertionSort} from './InsertionSort'
import {mergeSortModule} from './MergeSort'
import {selectionSort} from './SelectionSort'
import {quickSort} from './QuickSort'

const module = () => {
    return {
      buble: bubleSort,
      insertion: insertionSort,
      merge: mergeSortModule,
      selection:selectionSort,
      quick: quickSort
    }
}