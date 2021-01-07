// 1. 선택 정렬
function solution1() {
  let arr = [4, 3, 8, 9, 2, 0, 1, 7];

  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    const temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  }

  return arr;
}

// 2. 삽입 정렬
function solution2() {
  let arr = [4, 3, 8, 9, 2, 0, 1, 7];

  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        const temp = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

// 3. 퀵 정렬
function solution3() {
  let arr = [4, 3, 8, 9, 2, 0, 1, 7];

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
