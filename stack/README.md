# Stacks in JavaScript

A stack is a linear data structure that follows the Last In, First Out (LIFO) principle, meaning that the last element added to the stack will be the first one to be removed. Stacks are commonly used in JavaScript for managing function invocations (the call stack), undo mechanisms, and other scenarios where elements need to be accessed in a specific order.

## Operations on Stacks

- **Push**: Adds an element to the top of the stack.
- **Pop**: Removes the top element from the stack.
- **Peek (or Top)**: Returns the top element of the stack without removing it.
- **isEmpty**: Checks if the stack is empty.
- **size**: Returns the number of elements in the stack.

## Benefits of Stacks

- **Efficient Insertions and Deletions**: Adding and removing elements from the top of the stack is very efficient, typically with constant time complexity.
- **Simple Implementation**: Stacks can be easily implemented using arrays or linked lists, making them straightforward to work with.

## Example

```javascript
class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.items.length === 0) {
            return "Underflow";
        }
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }
}

// Example usage
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.peek()); // Output: 3
console.log(stack.pop()); // Output: 3
console.log(stack.size()); // Output: 2
```
## Conclusion

Stacks are a fundamental data structure in JavaScript, providing efficient methods for managing elements in a Last In, First Out (LIFO) manner. They are widely used in various applications and are essential for understanding more complex data structures and algorithms.
