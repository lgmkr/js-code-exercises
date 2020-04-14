## Reverse an array

### Description

<details>

<summary>
details
</summary>

> Reverse an array

</details>

### Solutions

#### Using _Array.prototype.reverse()_ method

```
Time Complexity: O(n)
Space Complexity: O(1)
```

#### Using _Brute force_ approach:

<details>
<summary>code</summary>
<p>

> ```javascript
> module.exports = (array) => {
>   const length = array.length;
>   for (let i = 0; i < length / 2; i++) {
>     [array[i], array[length - i - 1]] = [array[length - i - 1], array[i]];
>   }
>   return array;
> };
> ```

</p>
</details>

```
Time Complexity: O(n)
Space Complexity: O(1)
```

#### Using an extra array to reverse an array:

<details>
<summary>code</summary>
<p>

> ```javascript
> module.exports = (array) => {
>   let tempArray = [];
>   const length = array.length;
>   for (let i = 0; i < length; i++) {
>     tempArray[i] = array[length - i - 1];
>   }
>   return tempArray;
> };
> ```

</p>
</details>

```
Time complexity: O(n)
Space complexity: O(n)
```

#### Using _stack_ to reverse an array:

```
Time complexity: O(n)
Space complexity: O(1)
```

#### Using _recursion_ with _index_:

```
Time complexity: O(n)
Space complexity: O(n)
```

#### Using _recursion_ with _Array.prototype.pop()_:

```
Time complexity: O(n)
Space complexity: O(n)
```
