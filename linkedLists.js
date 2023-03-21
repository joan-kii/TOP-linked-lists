class LinkedList {
  #head;

  constructor(head = new Node()) {
    this.#head = head;
  }

  append(value) {
    // Add node with value as last node
    let node = this.#head;

    while (node) {
      if (node.nextNode === null) {
        node.nextNode = new Node(value);
        break;
      } else {
        node = node.nextNode;
      }
    }
  }

  prepend(value) {
    // Add node with value as first node
    let node = this.#head;
    this.#head = new Node(value, node);
  }

  getSize() {
    // Return the linked list size
    let count = 0;
    let node = this.#head;

    while (node) {
      if (node.nextNode === null) {
        count++;
        break;
      } else {
        count++;
        node = node.nextNode;
      }
    }

    return count;
  }

  get size() {
    return this.getSize();
  }

  get head() {
    // Return the first node
    return this.#head;
  }

  get tail() {
    // Return the last node
    let last = this.#head;

    if (last) {
      while (last.nextNode) {
        last = last.nextNode;
      }
    }

    return last;
  }

  at(index) {
    // Return the node at index
    let count = 0;
    let node = this.#head;

    while (node) {
      if (count === index) return node;
      count++;
      node = node.nextNode;
    }

    return 'There is not a node in that index';
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
}

class Node {
  #value;
  constructor(value = null, nextNode = null) {
    this.#value = value;
    this.nextNode = nextNode;
  }

  get value() {
    return this.#value;
  }
}


const node = new Node('Balde');

const barça = new LinkedList(node);

barça.append('Araujo');
barça.prepend('Ter Stegen');

// console.log(barça.size);
// console.log(barça.head);
// console.log(barça.tail);
// console.log(barça.at(2));
// console.log(barça.at(3));
