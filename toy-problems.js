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