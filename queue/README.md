# Queues in JavaScript

A queue is a linear data structure that follows the First In, First Out (FIFO) principle, meaning that the first element added to the queue will be the first one to be removed. Queues are commonly used in JavaScript for managing asynchronous tasks, event handling, and other scenarios where elements need to be processed in the order they were added.

## Operations on Queues

- **Enqueue**: Adds an element to the back of the queue.
- **Dequeue**: Removes the element from the front of the queue.
- **Peek**: Returns the element at the front of the queue without removing it.
- **isEmpty**: Checks if the queue is empty.
- **size**: Returns the number of elements in the queue.

## Benefits of Queues

- **Ordered Processing**: Queues ensure that elements are processed in the order they were added, making them suitable for tasks that require sequential processing.
- **Simple Implementation**: Queues can be implemented using arrays or linked lists, making them easy to work with in JavaScript.

## Example

```javascript
class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.items.length === 0) {
            return "Underflow";
        }
        return this.items.shift();
    }

    peek() {
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }
}

// Example usage
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.peek()); // Output: 1
console.log(queue.dequeue()); // Output: 1
console.log(queue.size()); // Output: 2
```
## Conclusion

Queues are a fundamental data structure in JavaScript, providing efficient methods for managing elements in a First In, First Out (FIFO) manner. They are versatile and widely used in various applications, contributing to the efficient processing of tasks and events.
