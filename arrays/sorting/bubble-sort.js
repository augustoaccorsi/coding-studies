function boubleSort(array) {
    const sortedArray = array;
    for (let i = 0; i < array.length; i++) {
        for (let j = i+1; j < array.length; j++) {
            if (sortedArray[i] > sortedArray[j]) {
                [sortedArray[i], sortedArray[j]] = [sortedArray[j], sortedArray[i]];
            }
            
        }
    }
    return sortedArray;
}

const unsortedArray = [10,8,9,4,3,2,1,6,7];
console.log('Unsorted array:', unsortedArray);
console.log('Sorted Array:', boubleSort(unsortedArray));