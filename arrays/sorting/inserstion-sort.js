function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        const element = array[i];
        let j = i - 1;

        while (element < array[j]) {
            array[j+1] = array[j];
            j--;
        }
        array[j+1] = element;
    }
    return array;
}

const unsortedArray = [10,8,9,4,3,2,1,6,7];
console.log("Unsorted array:", unsortedArray);
console.log("Sorted array:", insertionSort(unsortedArray));
