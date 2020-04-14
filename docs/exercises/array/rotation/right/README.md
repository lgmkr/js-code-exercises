## Rotate an array right

### Description

<details>
<summary>
details
</summary>
<p>

> Build an algorithm to perform right circular rotation on an array of integers

</p>
</details>

### Example

**Input**

```javascript
const array = [4, 5, 6];
const k = 2;
```

**Output**

```
           k = 1     k = 2
[4,5,6] -> [6,4,5] ->[5,6,4]
```

### Solution

#### Brute force

<details>
<summary>code</summary>
<p>

```javascript
module.exports = (array, k) => {
  for (let i = 0; i < k; i++) {
    array.unshift(array.pop());
  }
  return array;
};
```

</p>
</details>

> Time complexity: O(k).  
> Space complexity: O(1).
