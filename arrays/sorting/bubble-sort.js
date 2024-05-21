function boubleSort(array) {
    const sortedArray = array;
    for (let i = 0; i < array.length; i++) {
        for (let j = i+1; j < array.length; j++) {
            if (sortedArray[i] > sortedArray[j]) {
                const aux = sortedArray[i];
                sortedArray[i] = sortedArray[j];
                sortedArray[j] = aux;
            }
            
        }
    }
    return sortedArray;
}

const unsortedArray = [10,8,9,4,3,2,1,6,7];
console.log(boubleSort(unsortedArray));