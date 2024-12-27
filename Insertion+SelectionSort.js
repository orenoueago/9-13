/*function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;

        // 將大於 key 的元素移動到它的後面
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
}

// 要排序的數組
const numbers = [1, 5, 63, 27, 45, 31];
const sortedNumbers = insertionSort(numbers);

console.log(sortedNumbers);*/

function selectionSort(arr) {
    const n = arr.length;

    // Traverse through all array elements
    for (let i = 0; i < n - 1; i++) {
        // Find the minimum element in the unsorted array
        let minIndex = i; // Assume the first element is the minimum
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j; // Update minIndex if a smaller element is found
            }
        }

        // Swap the found minimum element with the first element
        if (minIndex !== i) {
            const temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
}

// Define the array of numbers
const numbers = [2, 17, 58, 99, 64, 23, 110];

// Apply selection sort
selectionSort(numbers);

// Output the sorted array
console.log(numbers);