function heapSort(array) {
    const length = array.length;

    // Build a max heap
    for (let i = Math.floor(length/2) - 1; i >= 0; i--) {
        heapify(array, length, i);
    }

    // Extract elements from the heap one by one
    for (let i = length - 1; i > 0; i--) {
        // Move current root to end
        [array[0], array[i]] = [array[i], array[0]];

        // Call heapify on the reduced heap
        heapify(array, i, 0);
    }

    return array;
}

function heapify(array, length, i) {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    // If left child is larger than root
    if (left < length && array[left] > array[largest]) {
        largest = left;
    }

    // If right child is larger than largest so far
    if (right < length && array[right] > array[largest]) {
        largest = right;
    }

    // If largest is not root
    if (largest !== i) {
        [array[i], array[largest]] = [array[largest], array[i]];

        // Recursively heapify the affected sub-tree
        heapify(array, length, largest);
    }
}


const unsortedArray = [10,8,9,4,3,2,1,6,7];
console.log("Unsorted array:", unsortedArray);
console.log("Sorted array:", heapSort(unsortedArray));
