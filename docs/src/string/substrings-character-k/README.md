## Build an algorithm to count all the substrings of the given string which has the character k at least once.

### Examples

**Input**

```
'abb'
'b'
```

**Output**

```
'5'
// 'a', 'ab', 'abb', 'b', 'bb', 'b'
//       1     2      3 .  4 .   5
```

### Solutions

#### Simple approach

> Time complexity: O(n^3).  
> Space complexity: O(1).

#### Recursion using `String.substring()`

> Time complexity: O(n);  
> Space complexity: O(n ^ 2);
