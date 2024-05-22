function getMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

function countingSort(arr, exp) {
    const output = new Array(arr.length).fill(0);
    const count = new Array(10).fill(0);

    // Store count of occurrences in count[]
    for (let i = 0; i < arr.length; i++) {
        const index = Math.floor(arr[i] / exp) % 10;
        count[index]++;
    }

    // Change count[i] so that count[i] contains the actual
    // position of this digit in output[]
    for (let i = 1; i < 10; i++) {
        count[i] += count[i - 1];
    }

    // Build the output array
    for (let i = arr.length - 1; i >= 0; i--) {
        const index = Math.floor(arr[i] / exp) % 10;
        output[count[index] - 1] = arr[i];
        count[index]--;
    }

    // Copy the output array to arr[], so that arr[] now
    // contains sorted numbers according to the current digit
    for (let i = 0; i < arr.length; i++) {
        arr[i] = output[i];
    }
}

function radixSort(arr) {
    // Find the maximum number to know the number of digits
    const max = getMax(arr);

    // Do counting sort for every digit. Note that instead of passing digit
    // number, exp is passed. exp is 10^i where i is the current digit number
    for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
        countingSort(arr, exp);
    }
    return arr;
}

const unsortedArray = [10,8,9,4,3,2,1,6,7];
console.log("Unsorted array:", unsortedArray);
console.log("Sorted array:", radixSort(unsortedArray));
