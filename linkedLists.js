class LinkedList {
  constructor(nodes = new Node()) {
    this.nodes = nodes;
  }

  append(value) {
    // Add node with value as last node
    // Seguir aquí (for node in this.nodes)
  }

  prepend(value) {
    // Add node with value as first node
  }

  getSize() {
    // Return the linked list size
  }

  head() {
    // Return the first node
  }

  tail() {
    // Return the last node
  }

  at(index) {
    // Return the node at index
  }

  pop() {
    // Remove the last node
  }

  contains() {
    // Return true/false if the value exists
  }

  find(value) {
    // Return index or null of the node if exists
  }

  toString() {
    // Return the LinkedList as a string
  }

  insertAt(value, index) {
    // Insert node with value at index
  }

  removeAt(index) {
    // Remove node at index
  }

  get size() {
    return this.getSize();
  }
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}


const node = new Node('Ter Stegen');

const barça = new LinkedList(node);

console.log(node);
console.log(barça);