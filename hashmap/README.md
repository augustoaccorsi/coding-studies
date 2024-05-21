# HashMaps in JavaScript

A hashmap, also known as a hash table or dictionary, is a data structure that stores key-value pairs and provides efficient insertion, deletion, and lookup operations. In JavaScript, hashmaps are commonly implemented using objects or the built-in `Map` class.

## Properties of HashMaps

- **Keys**: Unique identifiers used to access values in the hashmap.
- **Values**: Associated data stored in the hashmap, corresponding to each key.
- **Hashing Function**: A function that converts keys into unique indices, determining the storage location of key-value pairs within the hashmap.
- **Collision Handling**: Mechanisms for resolving collisions that occur when multiple keys map to the same index.

## Operations on HashMaps

- **Insertion**: Adding a new key-value pair to the hashmap.
- **Deletion**: Removing a key-value pair from the hashmap.
- **Lookup**: Retrieving the value associated with a given key.
- **Iteration**: Iterating over all key-value pairs in the hashmap.

## Benefits of HashMaps

- **Fast Access**: HashMaps provide fast access to values based on their keys, typically with constant time complexity on average.
- **Versatility**: HashMaps can store various types of data and support dynamic resizing, making them suitable for a wide range of applications.
- **Flexible Key Types**: In JavaScript, hashmap keys can be of any data type, including strings, numbers, objects, and even functions.

## Example

```javascript
// Using object as a hashmap
const hashmap = {
    'apple': 10,
    'banana': 20,
    'cherry': 30
};

// Accessing values
console.log(hashmap['banana']); // Output: 20

// Using Map class
const map = new Map();
map.set('apple', 10);
map.set('banana', 20);
map.set('cherry', 30);

// Accessing values
console.log(map.get('banana')); // Output: 20
```
## Conclusion

HashMaps are essential data structures in JavaScript for efficient storage and retrieval of key-value pairs. They are widely used in various applications, including caching, memoization, indexing, and more, contributing to the performance and scalability of JavaScript applications.
