/* Bubble sort is considered the most basic sorting algorithm in Computer Science. It works by starting at the first element of an array and comparing it to the second element:

If the first element is greater than the second element, it swaps the two.
It then compares the second to the third, and the third to the fourth, and so on.
In this way, the largest values ‘bubble’ to the end of the array.
Once it gets to the end of the array, it starts over and repeats the process until the array is sorted numerically.
Implement a function that takes an array and sorts it using this technique. */

var a = [34, 203, 3, 746, 200, 984, 198, 764, 9];

function bubbleSort(a)
{
    var swapped;
    do {
        swapped = false;
        for (var i=0; i < a.length-1; i++) {
            if (a[i] > a[i+1]) {
                var temp = a[i];
                a[i] = a[i+1];
                a[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
}

function bubbleSort2 (input) {
  var swapped = true;
  
  while(swapped){
    swapped = false;
    
    for(var i = 0; i < input.length; i++){
      if(input[i] > input[i + 1]){
        var temp = input[i + 1];
        input[i + 1] = input[i];
        input[i] = temp;
        swapped = true;
      }
    }
  }
  
  return input;
}
 
bubbleSort(a);
console.log(a);


/*Quicksort is a divide and conquer algorithm in the style of merge sort. 
The basic idea is to find a “pivot” item in the array to compare all other items against,
 then shift items such that all of the items before the pivot are less than the pivot value 
 and all the items after the pivot are greater than the pivot value. 
 After that, recursively perform the same operation on the items before and after the pivot. 
 There are many different algorithms to achieve a quicksort and this post explores just one of them.*/

var aTest = [2,4,5,63,4,5,63,2,4,43];
 
function quicksort1(arr)
{
    if (arr.length == 0)
        return [];
 
    var left = new Array();
    var right = new Array();
    var pivot = arr[0];
 
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
           left.push(arr[i]);
        } else {
           right.push(arr[i]);
        }
    }
 
    return quicksort1(left).concat(pivot, quicksort1(right));
}
 
console.log(quicksort1(aTest));


/////////Ver. 2 of quicksort /////////

function swap(items, firstIndex, secondIndex){
    var temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
}

function partition(items, left, right) {

    var pivot   = items[Math.floor((right + left) / 2)],
        i       = left,
        j       = right;


    while (i <= j) {

        while (items[i] < pivot) {
            i++;
        }

        while (items[j] > pivot) {
            j--;
        }

        if (i <= j) {
            swap(items, i, j);
            i++;
            j--;
        }
    }

    return i;
}

function quickSort(items, left, right) {

    var index;

    if (items.length > 1) {

        left = typeof left != "number" ? 0 : left;
        right = typeof right != "number" ? items.length - 1 : right;

        index = partition(items, left, right);

        if (left < index - 1) {
            quickSort(items, left, index - 1);
        }

        if (index < right) {
            quickSort(items, index, right);
        }

    }

    return items;
}

// first call
var result = quickSort(items);