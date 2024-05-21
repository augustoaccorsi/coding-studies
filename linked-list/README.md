# Linked Lists in JavaScript

Linked lists are linear data structures consisting of nodes, where each node contains a value and a reference (or pointer) to the next node in the sequence. Unlike arrays, linked lists do not have indexes; instead, they rely on these pointers to navigate through the elements.

## Types of Linked Lists

- **Singly Linked List**: Each node points to the next node in the sequence.
- **Doubly Linked List**: Each node points to both the next and the previous node in the sequence.
- **Circular Linked List**: The last node points back to the first node, forming a circular structure.

## Benefits of Linked Lists

- **Dynamic Size**: Linked lists can grow or shrink in size dynamically, as nodes are added or removed.
- **Efficient Insertions and Deletions**: Insertions and deletions are typically faster in linked lists compared to arrays, especially for large datasets.
- **No Pre-allocation**: Linked lists do not require pre-allocation of memory, unlike arrays, which can save memory overhead.

## Drawbacks of Linked Lists

- **Sequential Access**: Accessing elements in a linked list requires traversing the list from the beginning, which can be slower than random access in arrays.
- **Memory Overhead**: Linked lists use additional memory to store pointers, which can lead to higher memory consumption compared to arrays for small datasets.

## Example

```javascript
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    print() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}

// Example usage
const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.print(); // Output: 1, 2, 3
```
## Conclusion

Linked lists provide a flexible and efficient way to store and manipulate data in JavaScript, especially when the size of the data is not known in advance or frequent insertions and deletions are required.
