### Task

Write an algorithm in javascript to find the correct position to insert an element in the given array.
Assume the given array will be sorted and it will not contain any duplicates.

Assume the given array will be sorted and it will not contain any duplicates.

### Example

Input:  
[1,3,5,6] .
5

Output:  
2 //5 is present at index 2

Input:  
[1,3,5,6]
2

Output:  
1 //2 can be inserted after 1 and before 3 at position 1

Input:  
[1,3,5,6]  
7

Output:  
4 //7 can be inserted after 6 at position 4

Input:  
[1,3,5,6]  
0

Output:  
0 //0 can be inserted before 1 at position 0

### Requirements

- Check if element is already present in the array or not and if it is present then return its position.

- If it is not present then we will find the position of the element greater than itself and return its position.
- If there is no element less than the input element in the array then we will return the position after the last element.

  Time complexity: O(n).
  Space complexity: O(1).
