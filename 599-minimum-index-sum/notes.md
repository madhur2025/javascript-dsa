# 599 Minimum index sum of two lists
there are two lists or strings find the common string and their index sum the indices return the string with the least sum of indices.

## Approach
- create empty variable for minmum index
- create empty array
- iterate list 1 and list 2 with nested loops
- if element of L1 and L2 mached go ahead
- if minimum index is undefined but not zero update minimum index and add the current element into array
- if sum of indices is greater then minimum index check 
- the element is already not present in array and indices sum is equal to minimum index
- else remove old and push new element into array