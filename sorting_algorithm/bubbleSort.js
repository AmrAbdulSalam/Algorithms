function bubbleSort(arr) {
  var len = arr.length;
  var swapped = true;

  while (swapped) {
    swapped = false;
    for (var i = 0; i < len - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        // Swap elements
        var temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
    len--;
  }

  return arr;
}

// Example usage:
var array = [5, 1, 3, 12, 10, 9, 0];
console.log("Original Array: " + array.join(", "));
var sortedArray = bubbleSort(array);
console.log("Sorted Array: " + sortedArray.join(", "));
