class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const  node = {
            value: value,
            left: null,
            right: null
        }
        if (this.root === null) {
            this.root = node;
        } else {
            this._insertNode(this.root, node);
        }
    }

    _insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this._insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this._insertNode(node.right, newNode);
            }
        }
    }

    inOrder(node) {
        if (node !== null) {
            node.left && this.inOrder(node.left);
            console.log(node.value);
            node.right && this.inOrder(node.right);
        }
    }

    preOrder(node) {
        if (node !== null) {
            console.log(node.value);
            node.left && this.preOrder(node.left);
            node.right && this.preOrder(node.right);
        }
    }

    posOrder(node) {
        if (node !== null) {
            node.left && this.posOrder(node.left);
            node.right && this.posOrder(node.right);
            console.log(node.value);
        }
    }
}

const binaryTree = new BinaryTree();
binaryTree.insert(10);
binaryTree.insert(5);
binaryTree.insert(15);
binaryTree.insert(3);
binaryTree.insert(7);

console.log("in order:");
binaryTree.inOrder(binaryTree.root);

console.log("\npre order :");
binaryTree.preOrder(binaryTree.root);

console.log("\npos order :");
binaryTree.posOrder(binaryTree.root);
