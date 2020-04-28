## Build an algorithm to check if a given string is palindrome or not.

### Description

<details>
<summary> details</summary>
<p>

> Build an algorithm to check if a given string is palindrome or not.

</p>
</details>

### Examples

**Input**

```
'abba'
'table'
'ABCDCBA'
```

**Output**

```
true
false
true
```

### Solutions

#### Naive approach

> Time complexity: **O(N)**.  
> Space complexity: **O(1)**.

#### Using JS array and string methods

<details>
<summary> code</summary>

<p>

> ```javascript
> function isPalindrome(str) {
>   return str == str.split("").reverse().join("");
> }
> ```

</p>
</details>

> Time Complexity: O(n) where n is the length of the string.  
> Space Complexity: O(n) where n is no of characters in the string.
