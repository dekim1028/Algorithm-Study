/*
 * [정렬]
 * 1. 선택 정렬
 * 2. 삽입 정렬
 * 3. 퀵 정렬
 * 4. 계수 정렬
 */

function SelectionSort() {
  let arr = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8];

  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }

    const temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }

  return arr;
}

function InsertSort() {
  let arr = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8];

  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        const temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      } else {
        break;
      }
    }
  }

  return arr;
}

function QuickSort() {
  let arr = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8];

  function quick(array, start, end) {
    if (start >= end) return;

    let pivot = start;
    let left = start + 1;
    let right = end;

    while (left <= right) {
      while (left <= end && array[left] <= array[pivot]) {
        left += 1;
      }

      while (right > start && array[right] >= array[pivot]) {
        right -= 1;
      }

      if (left > right) {
        const temp = array[pivot];
        array[pivot] = array[right];
        array[right] = temp;
      } else {
        const temp = array[left];
        array[left] = array[right];
        array[right] = temp;
      }

      quick(array, start, right - 1);
      quick(array, right + 1, end);
    }
  }

  quick(arr, 0, arr.length - 1);

  return arr;
}

function CountingSort() {
  let arr = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8];
  let countArr = Array.from({ length: Math.max(...arr) + 1 }, () => 0);

  for (let i = 0; i < arr.length; i++) {
    countArr[arr[i]] += 1;
  }

  let answer = "";
  for (let i = 0; i < countArr.length; i++) {
    answer += `${i} `.repeat(countArr[i]);
  }

  return answer;
}
