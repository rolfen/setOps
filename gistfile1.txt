setOps.js
=========
Set operations in `setOps.js` take two arrays and return the results as an array. Supported operations are `union`, `intersection`, `difference`, `complement`, and `equals`. `difference` is the _symmetric difference_ and `complement` is the _relative complement_.

## Usage

```javascript
var so = setOps,
a = [1, 1, 2, 3, 3], // [1, 2, 3]
b = [3, 4, 4, 5, 5]; // [3, 4, 5]

// Join two sets together. A ∪ B
so.union(a, b); // => [1, 2, 3, 4, 5]

// The intersection of two sets. A ∩ B
so.intersection(a, b); // => [3]

// The symmetric difference of two sets. A Δ B
so.difference(a, b); // => [1, 2, 4, 5]

// The relative complement, or a minus b. A\B
so.complement(a, b); // => [1]

// Set equality. A = B
so.equals(a, b); // => false
so.equals(a, [1, 2, 3]); // => true
```
