20 valid parentheses : check every parentheses if open and closed or not.

## Approach
- created a enpty array
- if [{( add then into array
- if )}] check top of the array or current element is same or not
- if same go further if not return false
- return the length of the new array length === 0 if it is true valid.