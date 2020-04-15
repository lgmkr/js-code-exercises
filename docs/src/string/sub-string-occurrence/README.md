## Count number of sub-string occurrence in a string

### Description

<details>
<summary> details</summary>
<p>

> Build an algorithm to count the number of sub string occurrence in a string

</p>
</details>

### Examples

**Input**

```
String:- 'aaa'
Sub-string:- 'aa'
```

**Output**

```
// Overlapping
2
// Non-overlapping
1
```

### Solutions

#### Regular expression.

<summary> code</summary>
<p>

> ```javascript
> //For case sensitive
> var str = "Checking in regular expressions.";
> var count = (str.match(/in/g) || []).length; // /g checks whole string till end
> console.log(count);
> //For case - insensitive
> var str = "Checking IN regular expressions In case - iNsensitive.";
> var count = (str.match(/in/gi) || []).length; // /gi check whole string and ignores case sensitivity
> console.log(count);
> ```

</p>
</details>

> Time Complexity: O(1).
> Space Complexity: O(n) where n is the no of matches found.

#### Naive approach (Non-Overlapping)

> Time Complexity: **O(n \* m)** where n is the length of the string and m is the length of the sub-string.  
> Space Complexity: **O(1)**.

#### Naive approach (Overlapping)

> Time Complexity: O(n \* m) where n is the length of the string and m is the length of the sub-string.
> Space Complexity: O(1).
