# 66 Plus one
a given array of integer bring all digit together and plus 1 then return the array [1,2,3] => [1,2,4], [9,9] => [1,0,0]

## Approach 1
- join all the digits of the array.
- convert them into number by Number()
- plus 1
- convert the result into String by .toString()
- split to create arrya of the string.
- map the array to convert all the elements of the array into NUmbers.
- this apporach fails in large digit array because of limitation of Number function.

## Approach 2
- loop the array from reverse
- if the digit is smaller then 9, increase the digit by +1, return the array.
- if the digit is equal to the 9, make it zero.
- if loop ends add 1 into the array.