var TEST = [49,2,1,5,78,9,1,3,7,0,135]

const merge = (arr, left, mid, rigth) => {
  let lengthLeft = mid - left + 1;
  let lengthRight = right - mid; 
  let  leftArr = []
  let rightArr = []

}


const mergeSort = (arr, left , right) => {
  if (right <= left ) return
  let middle = Math.trunc((left+right)/2)
  mergeSort(arr, left, mid)
  mergeSort(arr, mid+1, right)
  merge(arr, left, mid, right)
}

