function quickSort(array) {
    if (array.length <= 1) {
        return array;
    }

    const pivot = array[Math.floor(array.length/2)];
    const left = [];
    const right = [];
    const equal = [];

    array.forEach(element => {
        if (element < pivot) {
            left.push(element);
        } else if (element > pivot) {
            right.push(element);
        } else {
            equal.push(element);
        }
    });

    return quickSort(left).concat(equal, quickSort(right));
}

const unsortedArray = [10,8,9,4,3,2,1,6,7];
console.log("Unsorted array:", unsortedArray);
console.log("Sorted array:", quickSort(unsortedArray));
